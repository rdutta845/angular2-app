import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Response, Headers } from '@angular/http';
declare var $: any;


@Component({
  selector: 'app-visit',
  styleUrls: ['./myvisit.component.css'],
  templateUrl: './myvisit.component.html'
})
export class MyVisitComponent implements OnInit, AfterViewInit, OnDestroy {
  http: Http;
  public obj:Object;
  public objArray:any;
  public postResponse:any;
  public url="https://www.cashlu.com/app_login/userClickDetails";
  public isDataAva:any;
  constructor(
    http:Http
  ) {
    // TODO
    this.http = http;
    this.obj={
      "token":JSON.parse(localStorage.getItem('ssdUser')).token
    };
    this.isDataAva=false;
    // console.log("this.obj", this.obj);
    // console.log("this.url", this.url);
    // this.objArray=this.http.post(this.url, this.obj);
    // console.log("this.objArray", this.objArray);
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
                this.postResponse = res;
                this.objArray = res;
                if(this.objArray.length>0){
                  this.isDataAva=true;
                }
                console.log("VALUE RECEIVED: ",res);
                this.objArray.sort((a: any, b: any)=>{
                  if (a.date > b.date) {
                    return -1;
                  } else if (a.date < b.date) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
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
