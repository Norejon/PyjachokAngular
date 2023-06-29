import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INews, IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<INews[]> {
    const url = urls.allNews;
    console.log(url);
    return this.httpClient.get<INews[]>(url);
  }
}
