import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewClassComponent } from "./new-class.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: NewClassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewClassRoutingModule {}
