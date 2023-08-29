import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../constants";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient,private authService:AuthService) { }

  getAll(): Observable<IUser[]> {
    const url = urls.allUsers;
    return this.httpClient.get<IUser[]>(url);
  }

  updateUser(id: number, birth: string, gender: string, nickname: string): Observable<IUser> {
    const url = urls.userById(id);
    const credentials = {birth, gender, nickname};
    console.log(credentials);
    return this.httpClient.put<IUser>(url, credentials, {
      responseType: 'json'
    });
  }

  deleteUser(id: number): Observable<string> {
    const url = urls.userById(id);
    return this.httpClient.delete(url, { responseType: 'text' });
  }
  logout(): Observable<string> {
    const url = urls.logout;
    localStorage.removeItem('Authorization');
    return this.httpClient.post(url, null, { responseType: 'text' });
  }
}
