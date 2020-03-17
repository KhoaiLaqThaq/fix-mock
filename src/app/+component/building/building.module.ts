import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
import { BuildingSearchComponent } from './building-search/building-search.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { ClarityModule } from "@clr/angular";
import { ToggleSwitchesComponent } from './toggle-switches/toggle-switches.component';
import { BuildingDataTableComponent } from './building-data-table/building-data-table.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BuildingComponent,
    BuildingSearchComponent,
    BuildingDetailComponent,
    ToggleSwitchesComponent,
    BuildingDataTableComponent,
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BuildingComponent
  ]
})
export class BuildingModule { }
