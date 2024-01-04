import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("../app/feature/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "new-account",
    loadChildren: () =>
      import("../app/feature/new-account/new-account.module").then(
        (m) => m.NewAccountModule
      ),
  },
  {
    path: "new-class",
    loadChildren: () =>
      import("../app/feature/new-class/new-class.module").then(
        (m) => m.NewClassModule
      ),
  },
  {
    path: "error",
    loadChildren: () =>
      import("../app/feature/page-error/page-error.module").then(
        (m) => m.PageErrorModule
      ),
  },
  {
    path: "feed",
    loadChildren: () =>
      import("../app/feature/feed/feed.module").then((m) => m.FeedModule),
  },
  {
    path: "enter-wait-list",
    loadChildren: () =>
      import("../app/feature/enter-wait-list/enter-wait-list.module").then(
        (m) => m.EnterWaitListModule
      ),
  },
  {
    path: "wait-list",
    loadChildren: () =>
      import("../app/feature/wait-list/wait-list.module").then(
        (m) => m.WaitListModule
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("../app/feature/feed/feed.module").then((m) => m.FeedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
