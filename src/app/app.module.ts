import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AppTemplatingModule } from './app-templating.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NasaService } from './services/nasa.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTemplatingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
