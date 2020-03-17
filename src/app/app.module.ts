import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClarityModule} from "@clr/angular";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BuildingModule} from "./+component/building/building.module";
import { HeaderComponent } from './+component/common/header/header.component';
import { HomeComponent } from './+component/decorator/home/home.component';
import {HttpResponseInterceptor} from "./common/interceptor/http-response.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    RouterModule,
    BuildingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
