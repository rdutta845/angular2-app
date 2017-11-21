import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Response, Headers } from '@angular/http';
declare var $: any;


@Component({
  selector: 'app-profile',
  styleUrls: ['./myprofile.component.css'],
  templateUrl: './myprofile.component.html'
})
export class MyProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  http: Http;
  public obj:Object;
  public userArray:any;
  public name:any;
  public email:any;
  public phone:any;
  public plan:any;
  public area:any;
  public pincode:any;
  public address:any;
  public gender:any;
  public marital:any;
  url = "https://www.cashlu.com/app_login/userDetails";
  constructor(
    http:Http
  ) {
    // TODO
    console.log("json string"+localStorage.getItem('ssdUser'));
    this.name = JSON.parse(localStorage.getItem('ssdUser')).firstname+" "+JSON.parse(localStorage.getItem('ssdUser')).lastname;
    this.email =  JSON.parse(localStorage.getItem('ssdUser')).username;
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
            this.userArray = res;
            this.phone=this.userArray.mobile;
            this.plan=this.userArray.plan;
            this.area = this.userArray.contact.area;
            this.pincode = this.userArray.contact.pincode;
            this.address = this.userArray.contact.address;
            this.gender = this.userArray.gender.toLowerCase();
            this.marital = this.userArray.marital.toLowerCase();
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
