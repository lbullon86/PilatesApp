import { Component, OnInit, Input } from "@angular/core";
import { Activity } from '../schedule/add-activity/activity-model';

@Component({
  selector: "app-activity-entry",
  templateUrl: "./activity-entry.component.html",
  styleUrls: ["./activity-entry.component.css"]
})
export class ActivityEntryComponent implements OnInit {
  @Input() activity: Activity;
  constructor() {}

  ngOnInit(): void {}
}
