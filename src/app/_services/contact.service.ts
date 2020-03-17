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
    // debugger
    const url = `${ environment.JSON_SERVER }/contract`;
    return this.http.get<ContactModel[]>(url)
      .pipe(
        delay(500),
        tap((contactModel: ContactModel[]) => console.log(`get All contract: ${JSON.stringify(contactModel)}`)),
        catchError(err => of([]))
      );
  }

  findById( id: number ): Observable< ContactModel > {
    const url = `${ environment.JSON_SERVER }/contract/${id}`;
    return this.http.get<ContactModel>(url)
      .pipe(
        tap( contactModel => console.log(`get contact by id ${JSON.stringify(contactModel)}`)),
        catchError( err =>  of(new ContactModel()))
      );
  }

}
