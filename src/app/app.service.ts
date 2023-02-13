import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationBody, generateTokenBody } from './ServiceInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  // baseURL = "http://yokoso-api-gateway-1945304836.us-east-1.elb.amazonaws.com/api/Token/authenticate";
  baseURL = "https://localhost:7195/api/Login";
  authURL="http://yokoso-api-gateway-1945304836.us-east-1.elb.amazonaws.com/api/Token/authenticate";

  generateToken(authData : generateTokenBody){
    console.log(authData);
    
    return this.http.post(this.baseURL,authData,{responseType:'text'});
  }

  authenticate(authData : AuthenticationBody):Observable<AuthenticationBody>{
    console.log(authData);
    
    return this.http.post<AuthenticationBody>(this.authURL,authData);
  }

  getContryStates() {
    return this.http.get("https://countriesnow.space/api/v0.1/countries/states");
  }

  getContryUsers() {
    return this.http.get("https://localhost:7195/api/UserTables");
  }
}
