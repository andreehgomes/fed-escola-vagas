import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { InitAuthService } from "src/app/core/base-auth/init-auth.service";
import { RouterEnum } from "src/app/core/router/router.enum";
import { Class } from "src/app/shared/model/new-class";
import { ClassService } from "src/app/shared/service/class/class.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "card-classes",
  templateUrl: "./card-classes.component.html",
  styleUrls: ["./card-classes.component.scss"],
})
export class CardClassesComponent implements OnInit {
  @Input() list: Array<Class> = [];
  classList: Array<Class> = new Array<Class>();
  state: boolean = false;
  flagApi: "web" | "api" = "web";
  constructor(
    private auth: InitAuthService,
    private classService: ClassService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.auth.getToken();
    this.state = token ? true : false;
    this.getDevice();
  }

  classVagas(qtdVagas: number): string {
    return qtdVagas > 0 ? "qtd-vagas" : "qtd-vagas-zero";
  }

  edit(clas: Class) {
    this.classService.behaviorClasses.next(clas);
    this.goTo(RouterEnum.NEW_CLASS);
  }
  delet(clas: Class) {
    this.classService.deleteClass(clas.key).subscribe(() => {});
  }
  goTo(rota: string) {
    this.router.navigate([rota]);
  }

  enterWaitList(clas: Class) {
    this.classService.behaviorClasses.next(clas);
    this.goTo(RouterEnum.ENTER_WAIT_LIST);
  }

  buildLinkWhatsapp(clas: Class) {
    const quebraLinha = "%0A";
    const espaco = "%20";
    const protocol = "https://";
    const api = this.flagApi;
    const urlWhats = ".whatsapp.com/send?phone=";
    const number = `55${environment.celNumber}`;
    const text = "&text=";
    const saudacao = "Olá, tudo bem?!";
    const mensagem = `Gostaria de matricular meu filho(a) na turma do(a) _*${clas.nome.toUpperCase()}*_ no período da _*${clas.turno.toUpperCase()}*_.`;
    const conclusao = "Essa vaga ainda está disponível?";
    return `${protocol}${api}${urlWhats}${number}${text}${saudacao}${quebraLinha}${quebraLinha}${mensagem}${quebraLinha}${quebraLinha}${conclusao}`;
  }

  getDevice() {
    const typeDevice = "windows";
    const userAgent = navigator.userAgent.toLowerCase();
    const device = userAgent.indexOf(typeDevice);
    if (userAgent.substring(device, device + 7).toLowerCase() == typeDevice) {
      this.flagApi = "web";
    } else {
      this.flagApi = "api";
    }
  }
}
