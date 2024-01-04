import { Component, OnInit, AfterViewInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { RouterEnum } from "src/app/core/router/router.enum";
import { Product } from "src/app/shared/model/product";
import { LoaderService } from "src/app/components/loader/loader.service";
import { AnalyticsService } from "src/app/shared/service/analytics/analytics.service";
import { PromocaoEnum } from "src/app/shared/model/promocao.enum";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit, AfterViewInit {
  itens: Array<Product> = [];
  itensNatal: Array<Product> = [];
  Rotas = RouterEnum;
  constructor(
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private loader: LoaderService,
    private analytics: AnalyticsService
  ) {}

  ngAfterViewInit(): void {
    this.scrollTop();
  }

  ngOnInit(): void {
    console.log("FEED");
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
