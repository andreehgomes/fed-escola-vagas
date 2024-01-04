import { Component, OnInit, ViewChild } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { AccountService } from "src/app/shared/service/account/account.service";
import { AlertaModel } from "src/app/shared/model/alertas-model";
import { DateAdapter } from "@angular/material/core";
import { RouterEnum } from "src/app/core/router/router.enum";
import { Class, EnterWaitList, NewClass } from "src/app/shared/model/new-class";
import { ClassService } from "src/app/shared/service/class/class.service";
import lists from "../../shared/lists/lists.json";
import { LoaderService } from "src/app/components/loader/loader.service";

@Component({
  selector: "app-enter-wait-list",
  templateUrl: "./enter-wait-list.component.html",
  styleUrls: ["./enter-wait-list.component.scss"],
})
export class EnterWaitListComponent implements OnInit {
  route = RouterEnum;
  turnosList = lists.turnosCadastro;

  @ViewChild("formDirective") private formDirective: NgForm;

  hide = true;
  usuario = {
    nome: "Usuário",
    time: "Lista de espera",
  };

  enterWaitList: EnterWaitList = new EnterWaitList();
  clas: Class = new Class();
  flagEdit: boolean = false;
  mensagemRespostaCadastro: AlertaModel = new AlertaModel();
  sucesso: boolean = false;
  erro: boolean = false;

  constructor(
    private classService: ClassService,
    private laoder: LoaderService
  ) {}

  43999899918;

  formControl = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    telefone: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
    ]),
    vagas: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  ngOnInit(): void {
    this.getClass();
  }

  onSubmit() {
    const { nome, telefone, vagas } = this.formControl.controls;

    this.enterWaitList = {
      nome: nome.value,
      telefone: telefone.value,
      vagas: vagas.value,
    };
    this.classService
      .enterWaitList(
        this.clas.key,
        {
          nome: this.clas.nome,
          turno: this.clas.turno,
          vagas: this.clas.vagas,
          listaDeEspera: this.clas.listaDeEspera,
        },
        this.enterWaitList
      )
      .subscribe((res) => {
        this.afterSubmit();
        this.zerarForm();
      });
  }

  afterSubmit() {
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
  }

  getClass() {
    this.laoder.openDialog();
    this.classService.behaviorClasses.subscribe((clas) => {
      if (clas) {
        this.clas = clas;
        this.laoder.closeDialog();
      } else {
        this.laoder.closeDialog();
      }
    });
  }

  zerarForm() {
    this.formControl.reset();
    this.formDirective.resetForm();
    for (let control in this.formControl.controls) {
      this.formControl.controls[control].setErrors(null);
    }
    this.formControl = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      telefone: new FormControl(null, [Validators.required]),
      vagas: new FormControl(null, [Validators.required]),
    });
  }
}
