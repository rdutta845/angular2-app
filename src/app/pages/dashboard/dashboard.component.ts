import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-dash',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashComponent implements OnInit, AfterViewInit, OnDestroy {

  public obj:any;
  public objArray:any;

  constructor(
  ) {
    // TODO
    this.obj={
      "newOrder":12,
      "bounceRate":13,
      "userRegistration":14,
      "uniqueVisitor":15
    }

  }

  public ngOnInit() {
      
      this.objArray = [
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      }
    ]
    
    
  }
    
 public ngAfterViewInit() {
    
    
  }
    

  public ngOnDestroy() {
  }
}
