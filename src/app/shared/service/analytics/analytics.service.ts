import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Path } from "../../model/path.enum";
import { Analytics } from "../../model/analytics-model";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  constructor(private db: AngularFireDatabase, private datePipe: DatePipe) {}

  newAnalytics() {
    const flagAnalytics = sessionStorage.getItem(Path.ANALYTICS)
      ? sessionStorage.getItem(Path.ANALYTICS)
      : null;
    const token = localStorage.getItem(Path.TOKEN)
      ? localStorage.getItem(Path.TOKEN)
      : null;
    const analytics: Analytics = {
      data: this.datePipe.transform(Date.now(), "dd/MM/yyyy HH:mm:ss"),
      user_agent: navigator.userAgent,
    };
    console.log("token: ", token);
    if (flagAnalytics !== "true" && token === null) {
      this.db
        .list(Path.ANALYTICS)
        .push(analytics)
        .then(() => {
          sessionStorage.setItem(Path.ANALYTICS, "true");
        });
    }
  }
}
