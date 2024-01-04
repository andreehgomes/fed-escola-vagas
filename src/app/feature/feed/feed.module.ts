import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedComponent } from "./feed.component";
import { FeedRoutingModule } from "./feed-routing.module";
import { ToolbarModule } from "./../../components/toolbar/toolbar.module";
import { MaterialModule } from "../../material.module";

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, FeedRoutingModule, ToolbarModule, MaterialModule],
})
export class FeedModule {}
