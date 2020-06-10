import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        // this.authenticationService.logout();
        // location.reload(true);
        console.log('Error de Autenticación');
        this.authenticationService.isAuthenticated = false;
      }
      if(err.status === 500) {
        console.log('This is the error', err);
      }


      const error = err.error.detail || err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
