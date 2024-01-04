import { Component, OnInit } from "@angular/core";
import { RouterEnum } from "src/app/core/router/router.enum";
import { Class, EnterWaitList, NewClass } from "src/app/shared/model/new-class";
import { ClassService } from "src/app/shared/service/class/class.service";

@Component({
  selector: "app-wait-list",
  templateUrl: "./wait-list.component.html",
  styleUrls: ["./wait-list.component.scss"],
})
export class WaitListComponent implements OnInit {
  route = RouterEnum;
  usuario = {
    nome: "Usuário",
    time: "Lista de espera",
  };

  linkWhats: string;
  flagApi: "web" | "api" = "web";

  clas: Class = new Class();

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.getDevice();
    this.clas = this.classService.behaviorClasses.getValue();
  }

  buildLinkWhatsapp(telefone: string) {
    const quebraLinha = "%0A";
    const espaco = "%20";
    const protocol = "https://";
    const api = this.flagApi;
    const urlWhats = ".whatsapp.com/send?phone=";
    const number = `55${telefone}`;
    this.linkWhats = `${protocol}${api}${urlWhats}${number}`;
    return this.linkWhats;
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

  deteleEspera(espera: EnterWaitList) {
    console.log(espera);
    console.log("INDEX OF: ", this.clas.listaDeEspera.indexOf(espera));
    this.clas.listaDeEspera.splice(this.clas.listaDeEspera.indexOf(espera), 1);
    console.log(this.clas);
    const newClass: NewClass = new NewClass();
    newClass.nome = this.clas.nome;
    newClass.turno = this.clas.turno;
    newClass.vagas = this.clas.vagas;
    newClass.listaDeEspera = this.clas.listaDeEspera;
    console.log("NEW CLASS: ", newClass);
    this.classService
      .updateClass(this.clas.key, newClass)
      .subscribe((res) => {});
  }
}
