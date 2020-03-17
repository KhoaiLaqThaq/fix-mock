import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingComponent } from './building.component';
import {BuildingSearchComponent} from "./building-search/building-search.component";

const routes: Routes = [
  { path: '', component: BuildingComponent, children: [
      {
        path: 'building-search',
        component: BuildingSearchComponent
      },
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
