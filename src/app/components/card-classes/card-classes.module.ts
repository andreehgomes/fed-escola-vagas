import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardClassesComponent } from "./card-classes.component";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [CardClassesComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardClassesComponent],
})
export class CardClassesModule {}
