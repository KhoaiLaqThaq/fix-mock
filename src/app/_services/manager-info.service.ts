import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, delay, tap} from "rxjs/operators";
import {ManagerInfoModel} from "../model/manager-info.model";

@Injectable({
  providedIn: 'root'
})
export class ManagerInfoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable< ManagerInfoModel[] > {
    const url = `${ environment.JSON_SERVER }/managerInfo`;
    return this.http.get<ManagerInfoModel[]>(url)
      .pipe(
        delay(300),
        tap((managerInfoModel: ManagerInfoModel[]) => console.log(`get All manager-info: ${JSON.stringify(managerInfoModel)}`)),
        catchError(err => of([]))
      );
  }

  findById( id: number ): Observable< ManagerInfoModel > {
    const url = `${ environment.JSON_SERVER }/managerInfo/${id}`;
    return this.http.get<ManagerInfoModel>(url)
      .pipe(
        tap( managerInfoModel => console.log(`get manager-info by id ${JSON.stringify(managerInfoModel)}`)),
        catchError( err =>  of(new ManagerInfoModel()))
      );
  }

  findByBuildingNo( buildingNo: number ): Observable<ManagerInfoModel[]> {
    return this.http.get<ManagerInfoModel[]>(`${environment.JSON_SERVER}/managerInfo?buildingNo=${buildingNo}`);
  }

}
