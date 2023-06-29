import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEstablishment, IUser} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private httpClient:HttpClient) {}

  getAll(): Observable<IEstablishment[]> {
    const url = urls.allEstablishment;
    console.log(url);
    return this.httpClient.get<IEstablishment[]>(url);
  }
}
