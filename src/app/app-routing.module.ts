import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApodComponent } from './components/apod/apod.component';
import { NeowsComponent } from './components/neows/neows.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    {path: 'apod', component: ApodComponent},
    {path: 'neows', component: NeowsComponent},
    {path: '', redirectTo: '/apod', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
