import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
//import { Observable, throwError} from 'rxjs';
//import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { throwError } from 'rxjs';
//import { catchError } from "rxjs/operators";
//import { throwError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url="/assets/data/employees.json"
  constructor( private http:HttpClient) { }

  getemployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
    
    }

    errorHandler(error:HttpErrorResponse){
     return Observable.throw(error.message || "Server Error");
     //return Observable.throwError('Error Occurred');
    } 
}
