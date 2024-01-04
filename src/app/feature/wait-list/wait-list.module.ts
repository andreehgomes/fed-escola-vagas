import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WaitListComponent } from "./wait-list.component";
import { FooterModule } from "src/app/components/footer/footer.module";
import { ToolbarModule } from "src/app/components/toolbar/toolbar.module";
import { MaterialModule } from "src/app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardAlertModule } from "src/app/components/card-alert/card-alert.module";
import { WaitListRoutingModule } from "./wait-list-routing.module";

@NgModule({
  declarations: [WaitListComponent],
  imports: [
    CommonModule,
    WaitListRoutingModule,
    FooterModule,
    ToolbarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CardAlertModule,
  ],
})
export class WaitListModule {}
