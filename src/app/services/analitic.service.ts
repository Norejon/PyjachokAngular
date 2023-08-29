import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAnalitic, IUser} from "../interfaces";
import {urls} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnaliticService {

  constructor(private httpClient:HttpClient) { }

  getAnaliticById(id:number):Observable<IAnalitic[]>{
    const url = urls.analiticsById(id);
   return  this.httpClient.get<IAnalitic[]>(url);

  }

  addAnalitic(id: number, nickname: string, gender: string) {
    const url = urls.analiticsById(id);
    const name = nickname;
    const credentials = { name, gender };
    this.httpClient.post(url, credentials, {
      responseType: 'text'
    }).subscribe(
      response => {
      },
      error => {
      }
    );
  }
}
