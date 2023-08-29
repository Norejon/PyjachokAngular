import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private httpClient: HttpClient) {
  }

  complaint(id: number, text: string): Observable<string> {
    const credentials = { text };
    const url = urls.complaintsById(id);
    return this.httpClient.post(url, credentials, {
      responseType: 'text'
    });
  }
}
