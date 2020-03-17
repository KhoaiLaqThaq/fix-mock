import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ApartmentModel} from "../model/apartment.model";
import {environment} from "../../environments/environment";
import {catchError, delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor( private http: HttpClient ) { }

  findAll(): Observable<ApartmentModel[]> {
    const url = `${environment.JSON_SERVER}/apartment`;
    return this.http.get<ApartmentModel[]>(url)
      .pipe(
        delay(300),
        tap((apartmentModel: ApartmentModel[]) => console.log(`get all apartment ${JSON.stringify(apartmentModel)}`)),
        catchError(err => of([]))
      );
  }

  findById(id: number): Observable<ApartmentModel> {
    const url = `${environment.JSON_SERVER}/apartment/${id}`;
    return this.http.get<ApartmentModel>(url)
      .pipe(
        tap(apartmentModel => console.log(`Get apartment by id ${JSON.stringify(apartmentModel)}`)),
        catchError(err => of(new ApartmentModel()))
      );
  }

  findByBuildingNo( buildingNo: number ): Observable<ApartmentModel[]> {
    return this.http.get<ApartmentModel[]>(`${environment.JSON_SERVER}/apartment?buildingNo=${buildingNo}`);
  }

}
