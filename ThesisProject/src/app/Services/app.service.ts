import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {PersonInfo} from "../Models/PersonInfo";
import {of} from "rxjs/observable/of";

@Injectable()
export class Service{
  private _url: string = "";
  private _selectedPerson : PersonInfo;

  constructor(private _http : Http){ }

  getPersons(): PersonInfo[] {
    return [
      {id: 1, name: "John Smith"},
      {id: 2, name: "Blaise Pascal"},
      {id: 3, name: "Edmond Halley"},
      {id: 4, name: "Marie Curie"},
      {id: 5, name: "Caroline Herschel"}
    ];
  }

  getSelectedPerson(): PersonInfo {
    return this._selectedPerson;
  }

  setSelectedPerson(value: PersonInfo) {
    this._selectedPerson = value;
  }

  getEcgArray( person : number, rec_id : number):Observable<any>{
    this.generateUrl(person, rec_id);
    return this._http.get(this._url).map((response:Response)=>response.json());
  }

  generateUrl(per : number, rec: number){
    var str = "assets/";
    str += "p"+per+"-r"+rec+".json";
    this._url = str;
    console.log("URL  :  "+this._url);
  }

  getRecordsList( person : number ):Observable<any>{
    var url = "assets/person"+person+"RecordsList.json";
    return this._http.get(url).map( (response:Response) => response.json());
  }

}
