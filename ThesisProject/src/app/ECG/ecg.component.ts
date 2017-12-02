import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Service} from "../Services/app.service";
import {EcgPointArch} from "../Models/EcgPointArch";

@Component({
  selector: 'app-ecg',
  templateUrl: './ecg.component.html',
  styleUrls: ['./ecg.component.css'],
  providers: [Service],
  inputs : ['person_id', 'person_name', 'recordDate', 'record_id']
})
export class EcgComponent implements OnInit,OnChanges{
  //Inputs
  private person_id;
  private person_name;
  private record_id;
  private recordDate;

  private isReady = true;
  public max = 1;
  public min = -0.3;
  ecgDatas : EcgPointArch[] = [];
  resultData : EcgPointArch[] = [];

  forwardDisabled = false;
  backwardDisabled = false;

  start = 0;
  end = 5000;

  constructor(private service: Service, private http: HttpClient) {  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getData();
  }

  getChartTitle(){
    return this.recordDate;
  }

  getData(){

    this.ecgDatas = [];
    this.start = 0;
    this.end = 5000;
    this.service.getEcgArray(this.person_id, this.record_id)
      .subscribe(ecgData => this.ecgDatas = ecgData['recordData'].slice(0, 5000),
        err => console.log(err));

    this.service.getEcgArray(this.person_id, this.record_id)
      .subscribe(ecgData => this.resultData = ecgData['recordData'],
        err => console.log(err));

    this.isReady = true;

  }

  forward(){
    this.start = this.start + 2500;
    this.end = this.end + 2500;
    if(this.start < 0){
      this.start = 0;
      this.end = 5000;

    }

    if(this.end > this.resultData.length){
      this.start = this.resultData.length-5000;
      this.end = this.resultData.length;

    }
    this.ecgDatas = this.resultData.slice(this.start,this.end-1);

  }
  backward(){
    this.start = this.start - 2500;
    this.end = this.end - 2500;
    if(this.end > this.resultData.length){
      this.start = this.resultData.length-5000;
      this.end = this.resultData.length;
    }

    if(this.start < 0){
      this.start = 0;
      this.end = 5000;
    }

    this.ecgDatas = this.resultData.slice(this.start,this.end-1);
  }
}
