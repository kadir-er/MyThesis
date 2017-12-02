import {Component, OnInit} from '@angular/core';

import { Router} from "@angular/router";
import {PersonInfo} from "../Models/PersonInfo";
import {personArchitecture} from "../Models/personArchitecture";
import {Service} from "../Services/app.service";

@Component({
  template:  `

    <div class="row" style="margin: 20px">
      <div *ngFor="let pers of persons" class="col-sm-2" style="margin: 4px">
        <button (click)="personSelect(pers)">
          {{pers.name}}
        </button>
      </div>
    </div>
  `,
  outputs : ['personEvent']
})
export class SearchComponent implements OnInit{

  selectedPerson : PersonInfo = null;

  persons : personArchitecture[];

  constructor(
    private router : Router,
    private service : Service
  ) {
  }

  ngOnInit(){
    this.service.setSelectedPerson(null);

    this.persons = this.service.getPersons();
  }

  personSelect(person : PersonInfo){
    this.selectedPerson = person;
    this.service.setSelectedPerson(this.selectedPerson);
    this.router.navigate(['home/ecg']);
  }
}
