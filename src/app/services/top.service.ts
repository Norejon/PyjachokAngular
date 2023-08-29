import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {IEstablishment} from "../interfaces";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor(private httpClient:HttpClient,private router: Router) {
  }
  getTop(): Observable<IEstablishment[]> {
    const currentUrl = this.router.url;
    const url = urls.allActivatedEstablishment;
    if (currentUrl==='/tops/restaurant') {
      return this.httpClient.get<IEstablishment[]>(url).pipe(
        map(establishments => establishments.filter(item => item.type === "RESTAURANT").sort((a, b) => b.rating - a.rating))
      );
    }
    if (currentUrl==='/tops/bar') {
      return this.httpClient.get<IEstablishment[]>(url).pipe(
        map(establishments => establishments.filter(item => item.type === "BAR").sort((a, b) => b.rating - a.rating))
      );
    }
    if (currentUrl==='/tops/cafe') {
      return this.httpClient.get<IEstablishment[]>(url).pipe(
        map(establishments => establishments.filter(item => item.type === "CAFE").sort((a, b) => b.rating - a.rating))
      );
    }
    if (currentUrl==='/tops/pizzeria') {
      return this.httpClient.get<IEstablishment[]>(url).pipe(
        map(establishments => establishments.filter(item => item.type === "PIZZERIA").sort((a, b) => b.rating - a.rating))
      );
    }
    return new Observable<IEstablishment[]>();

  }

}
