import { Component, OnInit, ViewChild } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { AccountService } from "src/app/shared/service/account/account.service";
import { AlertaModel } from "src/app/shared/model/alertas-model";
import { DateAdapter } from "@angular/material/core";
import { RouterEnum } from "src/app/core/router/router.enum";
import { NewClass } from "src/app/shared/model/new-class";
import { ClassService } from "src/app/shared/service/class/class.service";
import lists from "../../shared/lists/lists.json";

@Component({
  selector: "app-new-class",
  templateUrl: "./new-class.component.html",
  styleUrls: ["./new-class.component.scss"],
})
export class NewClassComponent implements OnInit {
  route = RouterEnum;
  turnosList = lists.turnosCadastro;

  @ViewChild("formDirective") private formDirective: NgForm;

  hide = true;
  usuario = {
    nome: "Jogador",
    time: "Criar nova conta.",
  };

  newClass: NewClass = new NewClass();
  mensagemRespostaCadastro: AlertaModel = new AlertaModel();
  sucesso: boolean = false;
  erro: boolean = false;

  constructor(private classService: ClassService, private datePipe: DatePipe) {}

  formControlnewClass = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    turno: new FormControl(null, [Validators.required]),
    vagas: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {}

  onSubmit() {
    const { nome, turno, vagas } = this.formControlnewClass.controls;

    this.newClass = {
      nome: nome.value,
      turno: turno.value,
      vagas: vagas.value,
    };

    this.classService.insertNewClass(this.newClass).subscribe((res) => {
      this.classService.responseInsertNewClass.subscribe((mensagem) => {
        this.mensagemRespostaCadastro = mensagem;

        if (this.mensagemRespostaCadastro) {
          if (this.mensagemRespostaCadastro.codigo == "200") {
            this.sucesso = true;
            this.erro = false;
          } else if (this.mensagemRespostaCadastro.codigo == "500") {
            this.erro = true;
            this.sucesso = false;
          }
        }
      });
    });

    this.zerarForm();
  }

  zerarForm() {
    this.formControlnewClass.reset();
    this.formDirective.resetForm();
    for (let control in this.formControlnewClass.controls) {
      this.formControlnewClass.controls[control].setErrors(null);
    }
    this.formControlnewClass = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      dataNascimento: new FormControl(null, [Validators.required]),
      novaSenha: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      celular: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
  }
}
