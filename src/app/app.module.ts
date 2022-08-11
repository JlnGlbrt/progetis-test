import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApodComponent } from './components/apod/apod.component';
import { NeowsComponent } from './components/neows/neows.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module';

const routes: Routes = [
    {path: 'apod', component: ApodComponent},
    {path: 'neows', component: NeowsComponent},
    {path: '', redirectTo: '/apod', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    NeowsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
