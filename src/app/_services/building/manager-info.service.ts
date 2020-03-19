import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, delay, tap} from "rxjs/operators";
import {ManagerInfoModel} from "../../model/building/manager-info.model";

@Injectable({
  providedIn: 'root'
})
export class ManagerInfoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable< ManagerInfoModel[] > {
    const url = `${ environment.JSON_SERVER }/managerInfo`;
    return this.http.get<ManagerInfoModel[]>(url).pipe(delay(300));
  }

  findById( id: number ): Observable< ManagerInfoModel > {
    return this.http.get<ManagerInfoModel>(`${ environment.JSON_SERVER }/managerInfo/${id}`);
  }

  findByBuildingNo( buildingNo: number ): Observable<ManagerInfoModel[]> {
    return this.http.get<ManagerInfoModel[]>(`${environment.JSON_SERVER}/managerInfo?buildingNo=${buildingNo}`);
  }

}
