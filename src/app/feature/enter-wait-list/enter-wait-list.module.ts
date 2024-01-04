import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterModule } from "src/app/components/footer/footer.module";
import { ToolbarModule } from "src/app/components/toolbar/toolbar.module";
import { MaterialModule } from "src/app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardAlertModule } from "src/app/components/card-alert/card-alert.module";
import { EnterWaitListRoutingModule } from "./enter-wait-list-routing.module";
import { EnterWaitListComponent } from "./enter-wait-list.component";

@NgModule({
  declarations: [EnterWaitListComponent],
  imports: [
    CommonModule,
    EnterWaitListRoutingModule,
    FooterModule,
    ToolbarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CardAlertModule,
  ],
})
export class EnterWaitListModule {}
