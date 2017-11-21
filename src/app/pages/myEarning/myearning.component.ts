import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Response, Headers } from '@angular/http'
declare var $: any;


@Component({
  selector: 'app-earning',
  styleUrls: ['./myearning.component.css'],
  templateUrl: './myearning.component.html'
})
export class MyEarningComponent implements OnInit, AfterViewInit, OnDestroy {
  http: Http;
  public obj:Object;
  public transArray:any;
  public coins:any;
  url="https://www.cashlu.com/app_login/userTransDetails";
  public months:number[][];
  public isMonthNotAva:any;
  chngFont(id:string){
    for(var i=0; i<12; i++)
    {
      if(id!="#"+i){
        $("#"+i).removeClass("fa-minus");
      }
    }
    console.log("ok"+id)
    $(id).toggleClass("fa-minus");
  }
 constructor(
    http:Http
  ) {
    // TODO
    this.http = http;
    this.obj={
      "token":JSON.parse(localStorage.getItem('ssdUser')).token
    };
    this.isMonthNotAva = true;
    this.coins={
      "lockedAmount":0,
      "unlockedAmount":0,
      "withdrawnAmount":0,
      "totalEarning":0
    };
    for(var i=0; i<12; i++){
      this.months=[];
    }
    for(var i=0; i<12; i++){
      this.months[i] = [];
    }
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
        
                this.transArray = res.transaction.filter(e=>e.earn_type == 'Rewards');
                console.log("VALUE RECEIVED: ",this.transArray);
                this.months = [];
                for(var i=0; i<12; i++){
                  this.months[i] = [];
                }
                if(this.transArray.length>0){
                  this.isMonthNotAva=false;
                }
                for(var i=0; i<12; i++){
                  for(var j=0; j<this.transArray.length; j++){
                    var a=new Date(this.transArray[j].date);
                    // console.log("i:", i, "months:", a.getMonth());
                    if(a.getMonth() == i){    
                      this.months[i].push(this.transArray[j]);
                    } 
                  }
                  this.months[i].sort((a: any, b: any)=>{
                    if (a.date > b.date) {
                      return -1;
                    } else if (a.date < b.date) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                }
                // console.log("months:", this.months);
                // var a=new Date(this.transArray[0].date);
                // console.log("date:", a);

                // console.log("date:", a.getMonth());
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

        this.url = "https://www.cashlu.com/app_login/userCoinsDetails";

        this.http.post(
            this.url, 
            JSON.stringify(this.obj),
            {headers:headers}
        ).map(
            (res: Response) => res.json()
        ).subscribe(
            (res) => {
                this.coins = res;
                console.log("VALUE RECEIVED coins: ",this.coins);
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
