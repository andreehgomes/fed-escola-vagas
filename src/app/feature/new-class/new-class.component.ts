import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { AccountService } from "src/app/shared/service/account/account.service";
import { AlertaModel } from "src/app/shared/model/alertas-model";
import { DateAdapter } from "@angular/material/core";
import { RouterEnum } from "src/app/core/router/router.enum";
import { Class, NewClass } from "src/app/shared/model/new-class";
import { ClassService } from "src/app/shared/service/class/class.service";
import lists from "../../shared/lists/lists.json";
import { LoaderService } from "src/app/components/loader/loader.service";

@Component({
  selector: "app-new-class",
  templateUrl: "./new-class.component.html",
  styleUrls: ["./new-class.component.scss"],
})
export class NewClassComponent implements OnInit, OnDestroy {
  route = RouterEnum;
  turnosList = lists.turnosCadastro;

  @ViewChild("formDirective") private formDirective: NgForm;

  hide = true;
  usuario = {
    nome: "Jogador",
    time: "Criar nova conta.",
  };

  newClass: NewClass = new NewClass();
  classEdit: Class = new Class();
  flagEdit: boolean = false;
  mensagemRespostaCadastro: AlertaModel = new AlertaModel();
  sucesso: boolean = false;
  erro: boolean = false;

  constructor(
    private classService: ClassService,
    private laoder: LoaderService
  ) {}

  ngOnDestroy(): void {
    this.classService.behaviorClasses.next(null);
  }

  formControlnewClass = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    turno: new FormControl(null, [Validators.required]),
    vagas: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.buildFormEdit();
  }

  onSubmit() {
    const { nome, turno, vagas } = this.formControlnewClass.controls;

    this.newClass = {
      nome: nome.value,
      turno: turno.value,
      vagas: vagas.value,
    };

    if (!this.flagEdit) {
      this.classService.insertNewClass(this.newClass).subscribe((res) => {
        this.afterSubmit();
        this.zerarForm();
      });
    } else {
      this.classService
        .updateClass(this.classEdit.key, this.newClass)
        .subscribe((res) => {
          this.afterSubmit();
          this.zerarForm();
          this.laoder.closeDialog();
        });
    }
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

  buildFormEdit() {
    this.laoder.openDialog();
    this.classService.behaviorClasses.subscribe((clas) => {
      if (clas) {
        this.flagEdit = true;
        this.classEdit = clas;
        this.formControlnewClass.controls["nome"].setValue(this.classEdit.nome);
        this.formControlnewClass.controls["turno"].setValue(
          this.classEdit.turno
        );
        this.formControlnewClass.controls["vagas"].setValue(
          this.classEdit.vagas
        );
        this.laoder.closeDialog();
      } else {
        this.laoder.closeDialog();
      }
    });
  }

  zerarForm() {
    this.formControlnewClass.reset();
    this.formDirective.resetForm();
    for (let control in this.formControlnewClass.controls) {
      this.formControlnewClass.controls[control].setErrors(null);
    }
    this.formControlnewClass = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      turno: new FormControl(null, [Validators.required]),
      vagas: new FormControl(null, [Validators.required]),
    });
  }
}
