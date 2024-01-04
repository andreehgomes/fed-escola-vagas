import { Component, Input, OnInit } from "@angular/core";
import { InitAuthService } from "src/app/core/base-auth/init-auth.service";
import { RouterEnum } from "src/app/core/router/router.enum";
import { RouterService } from "src/app/core/router/router.service";
import { AuthStateService } from "src/app/shared/service/authState/auth-state.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  @Input() usuario?: any;
  @Input() labelComponente?: string;
  openSideNav = false;
  routes = RouterEnum;
  state: boolean = true;
  flagApi: "web" | "api" = "web";
  linkWhats: string = "";

  constructor(
    private router: RouterService,
    private auth: InitAuthService,
    private authState: AuthStateService
  ) {}

  ngOnInit(): void {
    const token = this.auth.getToken();
    this.state = token ? true : false;
    this.getDevice();
  }

  openCloseSideNav() {
    this.openSideNav = !this.openSideNav;
  }

  logout(rota: string) {
    sessionStorage.setItem("logout", "s");
    localStorage.removeItem("token");
    this.auth.logout();
    this.router.navigate(rota);
  }

  home() {
    this.router.navigate(this.router.route.FEED);
  }

  goTo(route: string) {
    this.router.navigate(route);
  }

  buildLinkWhatsapp() {
    const quebraLinha = "%0A";
    const espaco = "%20";
    const protocol = "https://";
    const api = this.flagApi;
    const urlWhats = ".whatsapp.com/send?phone=";
    const number = "43999899918";
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
}
