import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./+component/decorator/home/home.component";


const routes: Routes = [
  {
    path: 'building',
    loadChildren: () => import('./+component/building/building.module').then(m => m.BuildingModule)
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
