import { Component, OnInit, Input } from "@angular/core";
import { Class } from "src/app/shared/model/new-class";

@Component({
  selector: "card-classes",
  templateUrl: "./card-classes.component.html",
  styleUrls: ["./card-classes.component.scss"],
})
export class CardClassesComponent implements OnInit {
  @Input() list: Array<Class> = [];
  classList: Array<Class> = new Array<Class>();

  constructor() {}

  ngOnInit(): void {}

  classVagas(qtdVagas: number): string {
    return qtdVagas > 0 ? "qtd-vagas" : "qtd-vagas-zero";
  }
}
