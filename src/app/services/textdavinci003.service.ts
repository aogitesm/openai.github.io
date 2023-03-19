import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class Textdavinci003Service {

  constructor(private http: HttpClient) { }
  apiURL = 'https://api.openai.com/v1/completions';
  
  //HTTP OPTIONS
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    })
  }

  postCompletition(payload: any): Observable<any>{
    return this.http.post<any>(this.apiURL, JSON.stringify(payload), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Get client-side error
      errorMessage = error.error.message;
    }else{
      //Get server-side-error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
