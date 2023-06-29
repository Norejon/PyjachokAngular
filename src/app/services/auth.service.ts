import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {urls} from "../constants";
import {IAuth} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }


  login(email: string, password: string): Observable<IAuth> {
    const url = urls.login;
    const credentials = { email, password };
    console.log(credentials);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<IAuth>(url, credentials, { headers });
  }

  register(email: string, password: string, username:string): Observable<IAuth> {
    const url = urls.allUsers;
    const credentials = { email, password,username };
    console.log(credentials);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<IAuth>(url, credentials, { headers });
  }
}
