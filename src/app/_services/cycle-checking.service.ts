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
    return this.http.get<CycleCheckingModel[]>(url).pipe(delay(300));
  }

  findById( id: number ): Observable< CycleCheckingModel > {
    return this.http.get<CycleCheckingModel>(`${ environment.JSON_SERVER }/cycleChecking/${id}`);
  }

  findByBuildingNo( buildingNo: number ): Observable<CycleCheckingModel[]> {
    return this.http.get<CycleCheckingModel[]>(`${environment.JSON_SERVER}/cycleChecking?buildingNo=${buildingNo}`);
  }
}
