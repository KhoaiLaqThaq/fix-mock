import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingComponent } from './building.component';
import {BuildingSearchComponent} from "./building-search/building-search.component";
import {BuildingHeaderComponent} from "./building-header/building-header.component";
import {BuildingDetailComponent} from "./building-detail/building-detail.component";

const routes: Routes = [
  { path: '', component: BuildingComponent, children: [
      {
        path: 'building-search',
        component: BuildingSearchComponent
      },
      {
        path: 'building-detail/:no',
        component: BuildingDetailComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
