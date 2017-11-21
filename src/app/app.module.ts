import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// modules
import { NgxAdminLteModule } from 'ngx-admin-lte';

// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashComponent } from './pages/dashboard/dashboard.component';
import { MyEarningComponent } from './pages/myEarning/myearning.component';
import { MyProfileComponent } from './pages/myProfile/myprofile.component';
import { MyVisitComponent } from './pages/myVisit/myvisit.component';
import { PaymentComponent } from './pages/paymentGateway/payment.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
const pages = [
    HomeComponent,
    PageNumComponent,
    LoginComponent,
    RegisterComponent,
    DashComponent,
    MyEarningComponent,
    MyProfileComponent,
    MyVisitComponent,
    PaymentComponent,
    GalleryComponent
];

// main bootstrap
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ...pages
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    FormsModule,
    HttpModule,
    NgxAdminLteModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
