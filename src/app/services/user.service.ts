import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IUser[]> {
    const url = urls.allUsers;
    console.log(url);
    return this.httpClient.get<IUser[]>(url);
  }
}
