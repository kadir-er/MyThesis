import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';

import { SelectivePreloadingStrategy } from '../selective-preloading-strategy';

import 'rxjs/add/operator/map';
import {PersonInfo} from "../Models/PersonInfo";
import {DateTime} from "../Models/dateTime";
import {personArchitecture} from "../Models/personArchitecture";
import {Service} from "../Services/app.service";

@Component({
  template:  `

    <div *ngIf="personSelected">
      <h4>{{selectedPerson.name}}</h4>
      <div class="row" style="margin-left: 20px; margin-top: 20px">
        <ul *ngFor="let rec of records">
          <u>
            <li style="margin:-3px" (click)="recordClick(rec.id, rec.date, rec.time)">
              {{rec.date}} - {{rec.time}}
            </li>
          </u>
        </ul>
      </div>
    </div>
    
    <app-ecg *ngIf="recordSelected"
             [person_name]="selectedPerson.name"
             [person_id]="selectedPerson.id"
             [record_id]="record_id"
             [recordDate]="date">
    </app-ecg>

  `
})
export class HomeDashboardComponent implements OnInit {

  selectedPerson : PersonInfo = null;
  personSelected = false;

  recordSelected = false;

  sessionId: Observable<string>;
  token: Observable<string>;

  //outputs to ecgViewer
  date = "";
  record_id = 0;

  public records : DateTime[] = [];


  constructor(
    private route: ActivatedRoute,
    private service : Service,
  ) {

  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParamMap
      .map(params => params.get('session_id') || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');

    this.selectedPerson = this.service.getSelectedPerson();

    if(this.selectedPerson == null){
      this.personSelected = false;
    }else{
      this.getRecordsList(this.selectedPerson.id);
      this.personSelected = true;
    }
    this.recordSelected = false;
  }

  recordClick(rec_id : number, rec_date : string, rec_hour : string){
    this.recordSelected = true;
    this.record_id = rec_id;
    this.date = rec_date + " - " + rec_hour;
  }

  getRecordsList(person_id : number){
    this.records.splice(0,this.records.length);
    this.service.getRecordsList(person_id).subscribe(
      recordList => this.records = recordList['allRecords'],
      error => console.log(error)
    );
    console.log("records: "+this.records.length);
  }
}
