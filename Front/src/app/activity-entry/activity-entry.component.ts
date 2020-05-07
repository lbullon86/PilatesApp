import { Component, OnInit, Input } from "@angular/core";
import { Schedule } from "../diario/schedule-model";

@Component({
  selector: "app-activity-entry",
  templateUrl: "./activity-entry.component.html",
  styleUrls: ["./activity-entry.component.css"]
})
export class ActivityEntryComponent implements OnInit {
  @Input() activity: Schedule;
  constructor() {}

  ngOnInit(): void {}
}
