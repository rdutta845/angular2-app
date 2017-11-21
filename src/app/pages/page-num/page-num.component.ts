import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html'
})
export class PageNumComponent implements OnInit, AfterViewInit, OnDestroy {
  public id = 0;
  public sub: any;
  public pageData:any;
  public boxSection: any;
  public singleIframeHeight = "";
  public pages:Object;
  // public userInfo:Object;
  public name:any;
  public email:any;

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService,
    public sanitizer: DomSanitizer,
    private cdRef:ChangeDetectorRef
  ) {
    // TODO
      this.name = JSON.parse(localStorage.getItem('ssdUser')).firstname+" "+JSON.parse(localStorage.getItem('ssdUser')).lastname;
      this.email =  JSON.parse(localStorage.getItem('ssdUser')).username;
      // console.log("name", this.name, "email", this.email);
      this.pages =   {
          "home": {
            "title": "Stores & Offers",
            "titleSub" : "",
            "layout": "tab", //box,tab,accordion
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/1nSLRK-DXqF6TnDEENGM7orcKor2oXBFv0_nWHDx671k/pubhtml?gid=0&single=true&headers=false&chrome=false&widget=false",
                "title": "Trending",
                "type": "iframe", //iframe,video
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vR7V53CuOY5mG5oRcKcwdkYao4QoPnakG1GCaeEUYPdMT5ujH_0bVnhm3bYXvYTG4r6-Vaff92KxjGj/pub?embedded=true",
                "title": "Store Of The Week",
                "type": "iframe", //iframe,video
                "height": "100%"
              }
            ]
          },
          "fashion-offers": {
            "title": "Fashion Offers",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1939335151&single=true&headers=false&chrome=false&widget=false",
                "title": "Men & Women Offers",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1685717330&single=true&headers=false&chrome=false&widget=false",
                "title": "Baby & Kids Offers",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
		  "travel-offers": {
            "title": "Travel",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1889888209&single=true&headers=false&chrome=false&widget=false",
                "title": "Domestic Flights",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1830329162&single=true&headers=false&chrome=false&widget=false",
                "title": "International Flights",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1011309374&single=true&headers=false&chrome=false&widget=false",
                "title": "Hotels",
                "type": "iframe",
                "height": "100%"
              },
             {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1286543445&single=true&headers=false&chrome=false&widget=false",
                "title": "Bus",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1355922391&single=true&headers=false&chrome=false&widget=false",
                "title": "Car Hire",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "recharge-bill-offers": {
            "title": "Recharge Offers",
            "titleSub" : "",
            "layout": "box", //box,tab,accordion
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=123804980&single=true&headers=false&chrome=false&widget=false",
                "title": "Recharge and Bill Offers",
                "type": "iframe", //iframe,video
                "height": "100%"
              }
            ]
          },
          "electronics-offers": {
            "title": "",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=379175149&single=true&headers=false&chrome=false&widget=false",
                "title": "Electronics Offers",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "health-beauty-offers": {
            "title": "Health &amp; Beauty",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=15874255&single=true&headers=false&chrome=false&widget=false",
                "title": "Medicine Offers",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1206022738&single=true&headers=false&chrome=false&widget=false",
                "title": "Cosmetics and Beauty",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "payment-gateway-offers": {
            "title": "",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=839489027&single=true&headers=false&chrome=false&widget=false",
                "title": "Payment Gateway Cashback and Discount",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
		  "introduction": {
            "title": "Business Guidance",
            "titleSub" : "Begin your journey here",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1K8CgGiBL5I094kqL23B4clQJ285ceZqnExCLSLuQVsM/pub?embedded=true",
                "title": "Introduction",
                "type": "iframe",
                "height": "1000px"
              }
            ]
          },
          "how-to-start": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1kPHpnkG3IAqkkS1E_f4EtPrSb-CTESnNpLVVWyHfQb0/pub?embedded=true",
                "title": "How to Start",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "step-by-step-guide": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vTvFOngToAC0e0sUMqwoQVde0H1dLTGfXOnmTV44X2VeaxjE6U9CkoD2hq3uFXxhh4i-1vmZ4EkKzoP/pub?embedded=true",
                "title": "Step by Step Guide",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "set-up-business": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1HiUdomGBQzEZySeNwBYHBfougui2ZLX6eO9SoURDles/pub?embedded=true",
                "title": "Set Up Business",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "how-ssd-works": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/18SE3p4FeeM0fl8lY6HzEKhsvebM8DN-x6__9_uiE4fw/pub?embedded=true",
                "title": "How SSD Works",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "how-cashlu-works": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1_-hJ6S84UNEtZYyMwC-8dIgFAJgL5tI9gTbujVulVSY/pub?embedded=true",
                "title": "How CashLu Works",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "marketing-guidance": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1lOIAy3zd5xmAe2agf_RrvQiyZM422UeaJvRtfmXTgF0/pub?embedded=true",
                "title": "Marketing Guidance",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "customer-handling": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1Mvh11l9OUpk7zqYtswtPN7kFWwzzZiVg3xivZf6ixDQ/pub?embedded=true",
                "title": "Customer Handling",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "ssd-plans": {
            "title": "My Plans",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1UKtmGnnbdcyTI23s_EZ3ebuVKRicr3B9h1Rvhgx6MpE/pub?embedded=true",
                "title": "SSD Plans",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "master-adviser-plan": {
            "title": "My Plans",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/16zdl83tqOnUlvTiAJ3xzvDeooFMvptuP3wDIuwwp7vY/pub?embedded=true",
                "title": "Master Adviser Plan",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "fashion-stores": {
            "title": "Fashion Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1576997281&single=true&headers=false&chrome=false&widget=false",
                "title": "Men Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=320383276&single=true&headers=false&chrome=false&widget=false",
                "title": "Women Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=644107035&single=true&headers=false&chrome=false&widget=false",
                "title": "Lingerie Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1035926768&single=true&headers=false&chrome=false&widget=false",
                "title": "Jewellery Stores",
                "type": "iframe",
                "height": "100%"
              },
             {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1035926768&single=true&headers=false&chrome=false&widget=false",
                "title": "Footwear Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1709269&single=true&headers=false&chrome=false&widget=false",
                "title": "Accessories Stores",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "electronics-stores": {
            "title": "Electronics Stores",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1569018102&single=true&headers=false&chrome=false&widget=false",
                "title": "Electronics Stores",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "recharge-bill-stores": {
            "title": "Recharge & Bill Stores",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1845571722&single=true&headers=false&chrome=false&widget=false",
                "title": "Recharge & Bill Payments",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "home-kitchen-stores": {
            "title": "Home & Kitchen Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1542365929&single=true&headers=false&chrome=false&widget=false",
                "title": "Large Appliances",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=2030837107&single=true&headers=false&chrome=false&widget=false",
                "title": "Kitchen Appliances",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=773956281&single=true&headers=false&chrome=false&widget=false",
                "title": "Furniture",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=89542137&single=true&headers=false&chrome=false&widget=false",
                "title": "Grocery",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "travel-stores": {
            "title": "Travel Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=930960313&single=true&headers=false&chrome=false&widget=false",
                "title": "Flight",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=293887155&single=true&headers=false&chrome=false&widget=false",
                "title": "Hotel",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1101519320&single=true&headers=false&chrome=false&widget=false",
                "title": "Bus & Car",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
           "all-stores": {
            "title": "All Stores List (A to Z)",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=881866191&single=true&chrome=false&widget=false",
                "title": "All Stores (A to Z)",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "health-beauty-stores": {
            "title": "Health & Beauty Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=187638597&single=true&headers=false&chrome=false&widget=false",
                "title": "Beauty Products & Personal Care",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1882233758&single=true&headers=false&chrome=false&widget=false",
                "title": "Medicine & Healtcare",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "worldof-online-shopping": {
            "title": "World of Online Shopping",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vS_-CJrm5vaDa0T2e62fQ9hwMvNnnrPajdpZjgWUoMbDK_jOFXgVHzvSaVhmbQj_ZKF6X5HC-9pieS3/pub?embedded=true",
                "title": "World of Online Shopping",
                "type": "iframe",
                "height": "100%"
              }
              
            ]
          },
           "fashion-guide": {
            "title": "Fashion & Accessories Shopping",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vSht8FamnX0AIYEM2yddIY4go6I6Bc9HXjUc520GajSFHgrO8sdOQVMz3f1XBE5zxosFCEnHIDITEk-/pub?embedded=true",
                "title": "Fashion",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vROJgvn5VfZtqH9rNdAyVGGv3nUsnm7xsc-DHvEot37XrScJOqZ6gxkF_kTIFNZdvX9eax45r97uDEN/pub?embedded=true",
                "title": "Accessories",
                "type": "iframe",
                "height": "100%"
              }
              
            ]
          },
          // "appliances-guide": {
          //   "title": "Appliances",
          //   "titleSub" : "",
          //   "layout": "tab",
          //   "section": [
          //     {
          //       "url": "https://docs.google.com/document/d/e/2PACX-1vTugyMplDvzve-o4YF4BcwBqD-bZOvYPsf2jQ_g3TjhO34HHsIn-x8qaXlygCBbLkaRrCLCokOUbcrt/pub?embedded=true",
          //       "title": "Air Conditioners",
          //       "type": "iframe",
          //       "height": "100%"
          //     },
          //     {
          //       "url": "https://docs.google.com/document/d/e/2PACX-1vR3OgdKrfWT3kcx5nDcAQx0jFQQtMmzhaVX6dbIOz3JmZNDWNEq_RGtaBGyzWeogFx4H2tBou9X1pXB/pub?embedded=true",
          //       "title": "Washing Machine",
          //       "type": "iframe",
          //       "height": "100%"
          //     },
          //     {
          //       "url": "https://docs.google.com/document/d/e/2PACX-1vSFI-5Q2zrAbZZBdn0AVRMRvJS4DbkKFRHksWTMzvu49Gy0Ep9tzqyBAzJJnf1HsJBeVRs2OYrHcRs5/pub?embedded=true",
          //       "title": "Refrigerator",
          //       "type": "iframe",
          //       "height": "100%"
          //     },
          //     {
          //       "url": "https://docs.google.com/document/d/e/2PACX-1vSPT88qKEmutOoq7oVPM7tPa6_t5gL0HQF-aplWXRXmre2PY3mt0CCEwZoeJZYknke5LJgCUMuKGh_Y/pub?embedded=true",
          //       "title": "Television",
          //       "type": "iframe",
          //       "height": "100%"
          //     }
              
          //   ]
          // },
          "electronics-guide": {
            "title": "Electronics",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vQ_vFULY3arGDHQIxtijvz9ZyTt23or6Uu2TY-6rMMne0QvcHwc0gtdMJr20dDTt_BqPsrhxr7IFLn5/pub?embedded=true",
                "title": "Smartphone",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vSQaK2tsoQ4jEDaL_dP4zgHX3xsnILWTW-CRTH8JFZeCgN5JJH4gliV51bA_YmH80Ivxu2My9av29y7/pub?embedded=true",
                "title": "Laptop",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vTugyMplDvzve-o4YF4BcwBqD-bZOvYPsf2jQ_g3TjhO34HHsIn-x8qaXlygCBbLkaRrCLCokOUbcrt/pub?embedded=true",
                "title": "Air Conditioners",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vR3OgdKrfWT3kcx5nDcAQx0jFQQtMmzhaVX6dbIOz3JmZNDWNEq_RGtaBGyzWeogFx4H2tBou9X1pXB/pub?embedded=true",
                "title": "Washing Machine",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vSFI-5Q2zrAbZZBdn0AVRMRvJS4DbkKFRHksWTMzvu49Gy0Ep9tzqyBAzJJnf1HsJBeVRs2OYrHcRs5/pub?embedded=true",
                "title": "Refrigerator",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vSPT88qKEmutOoq7oVPM7tPa6_t5gL0HQF-aplWXRXmre2PY3mt0CCEwZoeJZYknke5LJgCUMuKGh_Y/pub?embedded=true",
                "title": "Television",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "health-guide": {
            "title": "Health",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vRk_WkIZWU3DK1_0uZ9WWECWPnYCHn8u5tE0dob83xM7Kcjs4jD6p86JzfVfhyX6bcf41rB2vkDORlj/pub?embedded=true",
                "title": "Medicine",
                "type": "iframe",
                "height": "100%"
              }
              
            ]
          },
          "cosmetics-guide": {
            "title": "Cosmetics",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vTFwTrdH0meICi2PRJbQOa96vn_a1UE-XGM2GOEr0up-mcFP2loO-MgxZzEmg-feeZClyoGSwO0dGYP/pub?embedded=true",
                "title": "Introduction and makeup",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vTeVbjrK9ip9EMe7LKay8bU9sIN9LhWWLvPts5DF5YCYw9DqjELXv080zdCCUknQ5ff5I12O61gVOmL/pub?embedded=true",
                "title": "Hair,Skin & Other Personal Care",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vThO_gWoAPQzzPFxO7m5xKPO-spZZ29WQ5fHRECN1q6flFs7i7lj5CpiMjGoFERTNyg-uB9869nlR7d/pub?embedded=true",
                "title": "Fragrance & Men's Personal Care",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vQcIwdIMS-ZQp9-1fA0ldOsgGcnwdeceq3Uv0skwvoe4Qe892mNlYgU65Ytt_mjlalyhkdyX5YS13Mf/pub?embedded=true",
                "title": "Mom & Baby Care",
                "type": "iframe",
                "height": "100%"
              }
              
            ]
          },
          "travel-guide": {
            "title": "Travel",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vRfPntidDFZwL3zHxsCVCbTpQ0E3Qp2y5DwWg_w2R_HXWrCP1ji8xMEvMfULkZGXQ6bAaiF3lPwJ-rf/pub?embedded=true",
                "title": "Hotel",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vRfJNk9Xt06AgerPXR6XllzmDGSzr7khVqQS9FrPBh62e0BPRoGQ7n6k99_Ip8j-Ldrf7AKuVp7HSbi/pub?embedded=true",
                "title": "Flight",
                "type": "iframe",
                "height": "100%"
              }
              
            ]
          },
          "furniture-guide": {
            "title": "Furniture",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vRthZ0C7Vd14uSkeD9evgDMESGTzcGytToewYJgzZeLLVq0Q847-Ex8Rg1i6rrffL4zuOF9mWR03tiI/pub?embedded=true",
                "title": "Furniture",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vSjCizOYwlAbxzYjCf64z1-2L5ctGZhgeTn7uzKsjLK0mvuE-RWTvVX9ZylK51DjKw1PIctyBBb7DY1/pub?embedded=true",
                "title": "Home Decor",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vT_yHMQx11uyz9O3kBLaDc8vcHMaty1hHzzXPdUis72ke7NuObN0QV0yH9Qu7T_6wCQdczYTxRY4za_/pub?embedded=true",
                "title": "Kitchen and Dining",
                "type": "iframe",
                "height": "100%"
              }
              
            ]
          },
          "basic-assessment":{
            "title": "Basic Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLScc_14zYzloaSVCbwzYvQ0cHayW3jfIYfrooGzNhJARPCbw6A/viewform?embedded=true&entry.158292248="+this.name+"&emailAddress="+this.email,
                "title":"Basics",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },
          "cashluWorks-assessment":{
            "title": "CashluWorks Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLScHEpJFfzMdbBNCPH8gWE6xsMiQRXcsuNCxFq_wMgh5L9iPbA/viewform?embedded=true&entry.958795601="+this.name+"&emailAddress="+this.email,
                "title":"How-Cashlu-Works",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },
          "shopping-practice-assessment":{
            "title": "Shopping Practice Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSdMbmh6AHW_g1v9NiClCaD23W1TbdBcRjO4j04RVT_n_JXTNQ/viewform?embedded=true&entry.2076133304="+this.name+"&emailAddress="+this.email,
                "title":"Shopping Practice 1",
                "type":"iframe",
                "height":"100%"
              },
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSfWr2cyqBEoLpZCx7GtitaBMdbcU9AN5ibzbOKnL3Yg3Bs5fw/viewform?embedded=true&entry.1652139921="+this.name+"&emailAddress="+this.email,
                "title":"Shopping Practice 2",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },

          "electronics-assessment":{
            "title": "Electronics Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSen_HsniZsCB3Pp_9-yE6r3F26Ya3OM2eXbczDJUB6zGiJjWw/viewform?embedded=true&entry.534026579="+this.name+"&emailAddress="+this.email,
                "title":"Mobile phones",
                "type":"iframe",
                "height":"100%"
              },
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSfehstWAZrT3-AYi8kLFfI8gr7i3uV3oV4Zjms7IjhrffmBEA/viewform?embedded=true&entry.194649951="+this.name+"&emailAddress="+this.email,
                "title":"Air Conditioners",
                "type":"iframe",
                "height":"100%"
              },
              {
                "url":"https://docs.google.com/forms/d/1zR3D-a6tzc1QGbPyCRgSZPDGcFw9bF9K4vq-k90zPSo/viewform?embedded=true&entry.254672352="+this.name+"&emailAddress="+this.email,
                "title":"Refrigerator",
                "type":"iframe",
                "height":"100%"
              },
              {
                "url":"https://docs.google.com/forms/d/1PIQ15mbzNoNX_-_rvslN_fHHo4slMNE5nLq-ZvWpEOA/viewform?embedded=true&entry.2028354913="+this.name+"&emailAddress="+this.email,
                "title":"Washing Machine",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },
          // "appliances-assessment":{
          //   "title": "Appliances Assessment",
          //   "titleSub":"",
          //   "layout":"tab",
          //   "section": [
          //     {
          //       "url":"https://docs.google.com/forms/d/e/1FAIpQLSfehstWAZrT3-AYi8kLFfI8gr7i3uV3oV4Zjms7IjhrffmBEA/viewform?embedded=true&entry.1449005772="+this.name+"&entry.1685270148="+this.email,
          //       "title":"Air Conditioners",
          //       "type":"iframe",
          //       "height":"100%"
          //     }
          //   ]
          // },
          "health-assessment":{
            "title": "Health Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSfH6hRvlVScwwzMngVQFAOIP19999iuafZqbiroOOOoeVyEnA/viewform?embedded=true&entry.681780724="+this.name+"&emailAddress="+this.email,
                "title":"Medicine",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },
          "travel-assessment":{
            "title": "Appliances Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSfQStKI72NCDAidbQRXF5OMXlsnMNbcBN1yIfY_isCOx_2ssA/viewform?embedded=true&entry.1777834182="+this.name+"&emailAddress="+this.email,
                "title":"Flights",
                "type":"iframe",
                "height":"100%"
              },
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSeG7NvYvHFODh52oOqrc_ksrMxHmqHdnJkWgs0E7cLoVDfrsg/viewform?embedded=true&entry.1440242942="+this.name+"&emailAddress="+this.email,
                "title":"Hotels",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },
          "fashion-assessment":{
            "title": "Fashion Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/12MvKrl_3HrhyKUvmLcsOv7c2-w5DBrf3S8WSv0Mbi0Q/viewform?embedded=true&entry.1328889359="+this.name+"&emailAddress="+this.email,
                "title":"Fashion 1",
                "type":"iframe",
                "height":"100%"
              },
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSea_sUOMsP52EZ7Pb5AJ_ypj0DO1JT4c53_dXFdATrnINoxmQ/viewform?embedded=true&entry.2146366367="+this.name+"&emailAddress="+this.email,
                "title":"Fashion 2",
                "type":"iframe",
                "height":"100%"
              },
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSdpjRCcD9QbDBVl-wupdymprswgVYOgf6KcA8FmGu9GlyowUA/viewform?embedded=true&entry.9051645="+this.name+"&emailAddress="+this.email,
                "title":"Fashion 3",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },
          "furniture-assessment":{
            "title": "Furniture Assessment",
            "titleSub":"",
            "layout":"tab",
            "section": [
              {
                "url":"https://docs.google.com/forms/d/e/1FAIpQLSc0mGrLTeeWuqttTnaiQh9dAQiDlBEykcZK-9YM35EwmUVQ_g/viewform?embedded=true&entry.864676499="+this.name+"&emailAddress="+this.email,
                "title":"Furniture",
                "type":"iframe",
                "height":"100%"
              }
            ]
          },
          "deals-offers-guide": {
            "title": "Deals and Offers",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vS-Oh7HcWdYTZetDX3sXI5MidAgibC0H-VC_sWU2vhKtrQYE6p6lHckQA-cnUyjWkCiMGzWy7K3iVZZ/pub?embedded=true",
                "title": "Deals and Offers",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "about-ssd": {
            "title": "",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vRLbp5s1CqArVU37I65BzO6y43OSIYk2dZQ0AnMV6a_1c4nsTmmfoM07-qaVC04Qok38g4ZO1Ry-2S_/pub?embedded=true",
                "title": "About SSD",
                "type": "iframe",
                "height": "100%"
              }
            ]
          }
        }
    
  }

  public ngOnInit() {
      
    // when calling routes change
    const idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {

      this.id = data[idkey];
      this.pageData = this.pages[this.id];
      this.boxSection = this.pages[this.id].section;
              
       if((this.boxSection.length == 1 && this.pageData.layout == "box") || this.pageData.layout == "tab"){
            $("body").addClass("pageHeightAuto");
        }else{
            $("body").removeClass("pageHeightAuto");
        }
        
    
      // changing header
      this.breadServ.set({
        header: this.pages[this.id].title,
        description: this.pages[this.id].titleSub,
        display: false,
        levels: [
          {
            icon: 'dashboard',
            link: ['/'],
            title: 'Home'
          },
          {
            icon: 'clock-o',
            link: ['/page/' + this.id],
            title: 'Page ' + this.id
          }
        ]
      });
        
    });
      
      
    
  }
    
 public ngAfterViewInit() {
    
      let self =this;
      $(window).resize(function() {
        self.setHeight();
      });
     
      this.setHeight();
    
  }
    
 setHeight():void {
     
    if((this.boxSection.length == 1 && this.pageData.layout == "box") || this.pageData.layout == "tab"){
    var windowHeight = $(window).innerHeight();
    if($('.pageHeightAuto .box-iframe').offset()){
        var topHeight = $('.pageHeightAuto .box-iframe').offset().top;
        this.singleIframeHeight = (windowHeight - topHeight).toString();
         this.cdRef.detectChanges();
        $('.pageHeightAuto .box-iframe').css('height', windowHeight-topHeight);
    }
    
    }
  }
  

  public ngOnDestroy() {
    $("body").removeClass("pageHeightAuto");
    $('.pageHeightAuto .box-iframe').css('height', '');
    this.sub.unsubscribe();
    this.breadServ.clear();
    this.route = null;
  }
}
