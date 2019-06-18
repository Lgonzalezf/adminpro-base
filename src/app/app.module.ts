import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import {APP_ROUTES} from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProgressComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    PagenotfoundComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
