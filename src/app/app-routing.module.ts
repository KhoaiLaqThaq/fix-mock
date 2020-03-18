import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./+component/decorator/home/home.component";


const routes: Routes = [
  {
    path: 'building',
    loadChildren: () => import('./+component/building/building.module').then(m => m.BuildingModule)
  },
  {
    path: '',
    component: HomeComponent
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
