import { Component, OnInit, AfterViewInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { RouterEnum } from "src/app/core/router/router.enum";
import { Product } from "src/app/shared/model/product";
import { LoaderService } from "src/app/components/loader/loader.service";
import { AnalyticsService } from "src/app/shared/service/analytics/analytics.service";
import { PromocaoEnum } from "src/app/shared/model/promocao.enum";
import { Class } from "src/app/shared/model/new-class";
import { ClassService } from "src/app/shared/service/class/class.service";
import { LoginService } from "../login/shared/service/login.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit, AfterViewInit {
  classes: Array<Class> = [];
  Rotas = RouterEnum;
  constructor(
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private loader: LoaderService,
    private classService: ClassService,
    private loginService: LoginService
  ) {}

  ngAfterViewInit(): void {
    this.scrollTop();
  }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if (!token) this.loginService.siginAnonimous();
    this.getListClasses();
  }

  getListClasses() {
    this.loader.openDialog();
    this.classService.getListClasses().subscribe((classes) => {
      this.classes = new Array<Class>();
      if (classes.length > 0) {
        let classLength = 0;
        for (let clas in classes) {
          classLength++;
          this.classes.push(classes[clas].payload.val());
          this.classes[clas].key = classes[clas].key;
          if (classLength == classes.length || classLength >= classes.length) {
            this.loader.closeDialog();
            return;
          }
        }
      } else {
        this.loader.closeDialog();
      }
    });
  }

  goTo(Rota: string, param?: string, filtro?: string, tipo?: string) {
    if (param)
      this.Router.navigate([Rota, param], {
        state: { filtro: filtro, tipo: tipo },
      });
    else
      this.Router.navigate([Rota], { state: { filtro: filtro, tipo: tipo } });
  }

  scrollTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  }

  async share() {
    try {
      await navigator.share({ url: this.mountUrl() });
    } catch (error) {
      navigator.clipboard.writeText(this.mountUrl());
    }
  }

  mountUrl(): string {
    return window.location.href;
  }
}
