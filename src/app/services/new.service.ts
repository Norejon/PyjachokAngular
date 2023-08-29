import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INews} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<INews[]> {
    const url = urls.allNews;
    return this.httpClient.get<INews[]>(url);
  }

  getById(id: number): Observable<INews> {
    const url = urls.newById(id);
    return this.httpClient.get<INews>(url)
  }

  getNewsOfEstablishment(id: number): Observable<INews[]> {
    const url = urls.newsOfEstablishment(id);
    return this.httpClient.get<INews[]>(url);
  }

  addNew(id: number, title: string, type: string, text: string) {
    const credentials = {title, type, text};
    const url = urls.newToEstablishment(id);
    return this.httpClient.post(url, credentials, {
      responseType: 'text'
    });
  }

  deleteNew(id: number):Observable<any> {
    const url = urls.newById(id);
    console.log(url)
    return this.httpClient.delete(url,{ responseType: 'text' });
  }

  updateNew(id: number, title: string, type: string, text: string) {
    const credentials = {title, type, text}
    const url = urls.newById(id);
    console.log(id)
    console.log(credentials)
    return this.httpClient.put(url, credentials, {responseType: 'text'})

  }
}
