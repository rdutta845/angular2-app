import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Response, Headers } from '@angular/http';
declare var $: any;


@Component({
  selector: 'app-dash',
  styleUrls: ['./payment.component.css'],
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit, AfterViewInit, OnDestroy {

  public obj:Object;
  public objArray:any;
  url = "https://www.cashlu.com/app_login/paymentGatewayOffersDetails";
  http: Http;
  filterArg={name:''};
  public backupArray:any;

  filterParams(itemName:string){
    console.log("ok");
    this.objArray=this.backupArray;
    console.log("itemName.length:", itemName.length);
    if(itemName=='' || itemName.length<=2){
      console.log("no input");
    }else{
      // this.objArray = this.objArray.filter(e=>e.companyName.toLowerCase().startsWith(itemName.toLowerCase()) || e.companyName.toLowerCase().startsWith(itemName.toLowerCase()));

      this.objArray = this.objArray.filter(e=>e.companyName.toLowerCase().indexOf(itemName.toLowerCase())!=-1 || e.paymentCode.toLowerCase().indexOf(itemName.toLowerCase())!=-1 || e.cashback.toLowerCase().indexOf(itemName.toLowerCase())!=-1);
    } 
  }
  constructor(
    http:Http
  ) {
    // TODO
    this.http = http;
    this.obj={
      "token":JSON.parse(localStorage.getItem('ssdUser')).token
    };
  }

  public ngOnInit() {
      
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      this.http.post(
          this.url, 
          JSON.stringify(this.obj),
          {headers:headers}
      ).map(
          (res: Response) => res.json()
      ).subscribe(
          (res) => {
              this.objArray = res;
              this.backupArray = res;
              console.log("VALUE RECEIVED: ",res);
          },
          (x) => {
              /* this function is executed when there's an ERROR */
              console.log("ERROR: "+x);
          },
          () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log("Completed");
          }
      );

    
  }
    
 public ngAfterViewInit() {
    
    
  }
    

  public ngOnDestroy() {
  }
}
