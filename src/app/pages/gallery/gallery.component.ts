import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Response, Headers } from '@angular/http';
declare var $: any;


@Component({
  selector: 'app-gallery',
  styleUrls: ['./gallery.component.css'],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  http: Http;
  public obj:Object;
  public objArray:any;
  public imgArr: any;
  public backupImgArr: any;
  public categs : any;
  url="https://www.cashlu.com/app_login/ssdBannersGallery";
  showImage(index:any){
    console.log("index", index);
    this.imgArr[index].isModal=true;
     
  }
  closeImage(index:any) { 
      console.log("index", index);
      this.imgArr[index].isModal=false;
  }
  formStr(str:any){
    // console.log(str.split('_')[0].charAt(0).toUpperCase()+str.split('_')[0].substring(1)+' '+str.split('_')[1].charAt(0).toUpperCase()+str.split('_')[1].substring(1));
    var strName="";
    if(str!=""){
      if(str.split('_').length>0){
        for(var i=0; i<str.split('_').length; i++){
          strName+=str.split('_')[i].charAt(0).toUpperCase()+str.split('_')[i].substring(1)+" ";
        }
      }else{
        strName+=str.charAt(0).toUpperCase();
      }
    }else{
      strName="Others";
    }
    return strName;
  }
  captionText(str:any){
    if(str.length>30){
      return str.substring(0, 30);
    }else{
      return str;
    }
  }
  fbs_click(url:any) {
    
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url),'sharer','toolbar=0,status=0,width=626,height=436');return false;
  }
  filter(index:any, i:any){
    this.imgArr=this.backupImgArr;
    console.log("backupImgArr->", this.backupImgArr);
      // this.imgArr.splice(index-1, 1);
      this.imgArr = this.imgArr.filter(function(el){
        return(el.bCategory==index);
      })
      console.log("index", i);
      $('#-1').removeClass('btn-success');
      $('#-1').addClass('btn-info');
      $('#'+i).removeClass('btn-info');
      $('#'+i).addClass('btn-success');
    
      for(var j=0; j<this.categs.length; j++){
        if(j!=i){
          $('#'+j).removeClass('btn-success');
          $('#'+j).addClass('btn-info');
        }
      }
    
  }
  reset(){
    $('#-1').addClass('btn-success');
    $('#-1').removeClass('btn-info');
    for(var j=0; j<this.categs.length; j++){
        $('#'+j).removeClass('btn-success');
        $('#'+j).addClass('btn-info');
    }
    this.imgArr=this.backupImgArr;
  }
  constructor(
    http:Http
  ) {
    // TODO
    this.http = http;
    this.obj={
      "token":JSON.parse(localStorage.getItem('ssdUser')).token
    };
    this.categs = [];
  }

  public ngOnInit() {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var tempInd=-1;
      var temp;
        this.http.post(
            this.url, 
            JSON.stringify(this.obj),
            {headers:headers}
        ).map(
            (res: Response) => res.json()
        ).subscribe(
            (res) => {
              console.log("res", res);
              this.backupImgArr = res;
              for(var ind=0; ind<this.backupImgArr.length; ind++){
                this.backupImgArr[ind].bUrl = "https://www.cashlu.com"+this.backupImgArr[ind].bUrl.replace("/uploads/", "/ssdBanners/");
                if(this.categs.indexOf(this.backupImgArr[ind].bCategory)<0){
                  this.categs.push(this.backupImgArr[ind].bCategory);
                }
                console.log("this.backupImgArr[ind].bUrl", this.backupImgArr[ind].bUrl);
              }
              for(var i=0; i<this.categs.length; i++){
                if(this.categs[i]==""){
                  tempInd=i;
                  break;
                }
              }
              if(tempInd>=0){
                temp=this.categs[tempInd];
                this.categs[tempInd]=this.categs[this.categs.length-1];
                this.categs[this.categs.length-1]=temp;
              }
              console.log("categs", this.categs);
              this.imgArr=this.backupImgArr;
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
