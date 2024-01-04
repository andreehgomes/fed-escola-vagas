import { Component, OnInit } from "@angular/core";
import { RouterService } from "../app/core/router/router.service";
import { LoginService } from "./feature/login/shared/service/login.service";
import { InitAuthService } from "./core/base-auth/init-auth.service";
import { AlertaModel } from "./shared/model/alertas-model";
import { Subscription, Observable, observable } from "rxjs";
import { PayloadLogin } from "./feature/login/shared/model/payload-login";
import { ResponseLogin } from "./feature/login/shared/model/response-login";
import { ActivatedRoute } from "@angular/router";
import { RouterEnum } from "./core/router/router.enum";
import { couldStartTrivia } from "typescript";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "fed-escola-vagas";
  mensagemRespostaLogin: AlertaModel = new AlertaModel();
  subscribeLogin: Subscription = new Subscription(null);
  subscribeMensagem: Subscription = new Subscription(null);
  constructor(
    private router: RouterService,
    private service: LoginService,
    private auth: InitAuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("APP COMPONENT");
    this.initiByStorage();
  }

  initiByStorage() {
    const href = window.location.href.includes(RouterEnum.NEW_ACCOUNT)
      ? RouterEnum.NEW_ACCOUNT
      : RouterEnum.FEED;
    const usuario = this.auth.getToken();
    if (usuario) {
      this.autenticarWithEmail({
        email: usuario.email,
        senha: usuario.senha,
      }).subscribe(() => {
        this.goTo(href);
      });
    } else {
      console.log("INIT BY STORAGE => ELSE");
      this.anonimousAutenticate().subscribe((res) => {
        this.goTo(href);
      });
    }
  }
  autenticarWithEmail(payload: PayloadLogin): Observable<any> {
    return new Observable((observer) => {
      this.service.signWithEmail(payload.email, payload.senha).then(
        (res) => {
          this.service.behaviorUsuarioLogado.subscribe((logado) => {
            if (logado) {
              localStorage.setItem("usuario", btoa(JSON.stringify(logado)));
              localStorage.setItem("token", btoa(JSON.stringify(payload)));
              // this.router.navigate(this.router.route.FEED);
              this.mensagemRespostaLogin = null;
            } else {
              this.service.behaviorLoginMensagem.subscribe((mensagem) => {
                if (mensagem) {
                  this.mensagemRespostaLogin = mensagem;
                }
              });
              this.subscribeMensagem?.unsubscribe();
            }
            observer.next(logado);
          });
          this.subscribeLogin?.unsubscribe();
        },
        (error) => {}
      );
    });
  }

  anonimousAutenticate() {
    return new Observable((observer) => {
      this.service.siginAnonimous().then(() => {
        observer.next();
      });
    });
  }

  goTo(param) {
    if (!param) this.router.navigate(this.router.route.FEED);
    else this.router.navigate(param);
  }
}
