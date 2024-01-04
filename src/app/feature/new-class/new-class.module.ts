import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewClassComponent } from "./new-class.component";
import { NewClassRoutingModule } from "./new-class-routing.module";
import { FooterModule } from "src/app/components/footer/footer.module";
import { ToolbarModule } from "src/app/components/toolbar/toolbar.module";
import { MaterialModule } from "src/app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardAlertModule } from "src/app/components/card-alert/card-alert.module";

@NgModule({
  declarations: [NewClassComponent],
  imports: [
    CommonModule,
    NewClassRoutingModule,
    FooterModule,
    ToolbarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CardAlertModule,
  ],
})
export class NewClassModule {}
