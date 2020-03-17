import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, delay, tap} from "rxjs/operators";
import {CycleCheckingModel} from "../model/cycle-checking.model";

@Injectable({
  providedIn: 'root'
})
export class CycleCheckingService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable< CycleCheckingModel[] > {
    const url = `${ environment.JSON_SERVER }/cycleChecking`;
    return this.http.get<CycleCheckingModel[]>(url)
      .pipe(
        delay(300),
        tap((cycleCheckingModel: CycleCheckingModel[]) => console.log(`get All cycle checking: ${JSON.stringify(cycleCheckingModel)}`)),
        catchError(err => of([]))
      );
  }

  findById( id: number ): Observable< CycleCheckingModel > {
    const url = `${ environment.JSON_SERVER }/cycleChecking/${id}`;
    return this.http.get<CycleCheckingModel>(url)
      .pipe(
        tap( cycleCheckingModel => console.log(`get cycle-checking by id ${JSON.stringify(cycleCheckingModel)}`)),
        catchError( err =>  of(new CycleCheckingModel()))
      );
  }

  findByBuildingNo( buildingNo: number ): Observable<CycleCheckingModel[]> {
    return this.http.get<CycleCheckingModel[]>(`${environment.JSON_SERVER}/cycleChecking?buildingNo=${buildingNo}`);
  }
}
