import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, delay, tap} from "rxjs/operators";
import {BuildingModel} from "../model/building.model";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable< BuildingModel[] > {
    const url = `${ environment.JSON_SERVER }/building`;
    return this.http.get<BuildingModel[]>(url)
      .pipe(
        delay(300),
        tap((buildingModel: BuildingModel[]) => console.log(`get All building: ${JSON.stringify(buildingModel)}`)),
        catchError(err => of([]))
      );
  }

  findById( id: number ): Observable< BuildingModel > {
    const url = `${ environment.JSON_SERVER }/building/${id}`;
    return this.http.get<BuildingModel>(url)
      .pipe(
        tap( buildingModel => console.log(`get building by id ${JSON.stringify(buildingModel)}`)),
        catchError( err =>  of(new BuildingModel()))
      );
  }

  findByContactNo( contactNo: number ): Observable< BuildingModel[] > {
    return this.http.get<BuildingModel[]>(`${ environment.JSON_SERVER }/building?contactNo=${contactNo}`);
  }

}
