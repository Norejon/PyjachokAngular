import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {urls} from "../constants";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PyjachokService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  drinker(budget: number, countOfPeople: number, date: string, time: string, whoPay: string, description: string, phone: string, id: number): Observable<string> {
    const url = urls.drinkers;
    const credentials = {budget, countOfPeople, date, time, whoPay, description,phone}

    return this.httpClient.post(url(id), credentials, {
      responseType: 'text'
    });
  }

  deleteDrinker(id:number):Observable<any>{
    const url= urls.drinkers(id);
    return this.httpClient.delete(url,{ responseType: 'text' });
  }
}
