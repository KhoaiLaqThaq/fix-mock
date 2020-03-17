import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401].indexOf(err.status) !== -1) {
        console.log('Unauthorized');
      } else if ([403].indexOf(err.status) !== -1) {
        console.log('Forbidden');
      } else if ([404].indexOf(err.status) !== -1) {
        console.log('Server not found');
      } else if (['failed'].indexOf(err.status) | ['undefined'].indexOf(err.status)) {
        console.log('Server not found', err.status);
      } else {
        console.log('Exception ', err.status);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
