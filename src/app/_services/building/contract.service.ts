import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ContractModel} from "../../model/building/contract.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, delay, tap} from "rxjs/operators";

const httpOptions = {
  header: new Headers({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable< ContractModel[] > {
    return this.http.get<ContractModel[]>(`${ environment.JSON_SERVER }/contract`).pipe(delay(500));
  }

  findByContractNo( contractNo: number ): Observable< ContractModel[] > {
    debugger;
    return this.http.get<ContractModel[]>(`${ environment.JSON_SERVER }/contract?no=${contractNo}`);
  }

}
