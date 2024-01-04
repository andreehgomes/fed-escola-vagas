import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnterWaitListComponent } from "./enter-wait-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: EnterWaitListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterWaitListRoutingModule {}
