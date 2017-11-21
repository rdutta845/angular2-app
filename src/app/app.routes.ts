import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateGuard, LayoutsAuthComponent } from 'ngx-admin-lte';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { DashComponent } from './pages/dashboard/dashboard.component';
import { MyEarningComponent } from './pages/myEarning/myearning.component';
import { MyProfileComponent } from './pages/myProfile/myprofile.component';
import { MyVisitComponent } from './pages/myVisit/myvisit.component';
import { PaymentComponent } from './pages/paymentGateway/payment.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

// Components
import { AppComponent } from './app.component';

const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
    { path: '', redirectTo: 'page/home', pathMatch: 'full' },
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: 'home'
      },
      {
        canActivate: [CanActivateGuard],
        component: PageNumComponent,
        path: 'page/:id'
      },
      {
        canActivate: [CanActivateGuard],
        component: DashComponent,
        path: 'dashboard'
      },
      {
        canActivate: [CanActivateGuard],
        component: MyEarningComponent,
        path: 'myearning'
      },
      {
        canActivate: [CanActivateGuard],
        component: MyProfileComponent,
        path: 'myprofile'
      },
      {
        canActivate: [CanActivateGuard],
        component: MyVisitComponent,
        path: 'myvisit'
      },
      {
        canActivate: [CanActivateGuard],
        component: PaymentComponent,
        path: 'payment'
      },
      {
        canActivate: [CanActivateGuard],
        component: GalleryComponent,
        path: 'gallery'
      }


    ],
    component: LayoutsAuthComponent,
    path: ''
    
  },
  // not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
