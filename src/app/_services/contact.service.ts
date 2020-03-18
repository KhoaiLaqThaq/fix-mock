import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ContactModel} from "../model/contact.model";
import {environment} from "../../environments/environment";
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
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable< ContactModel[] > {
    return this.http.get<ContactModel[]>(`${ environment.JSON_SERVER }/contract`).pipe(delay(500));
  }

  findByContractNo( contractNo: number ): Observable< ContactModel[] > {
    debugger;
    return this.http.get<ContactModel[]>(`${ environment.JSON_SERVER }/contract?no=${contractNo}`);
  }

}
