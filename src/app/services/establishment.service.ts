import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IEstablishment} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private httpClient:HttpClient) {}

  getAll(): Observable<IEstablishment[]> {
    const url = urls.allEstablishment;
    return this.httpClient.get<IEstablishment[]>(url);
  }
  getActivated(): Observable<IEstablishment[]> {
    const url = urls.allActivatedEstablishment;
    return this.httpClient.get<IEstablishment[]>(url);
  }
  getDesActivated(): Observable<IEstablishment[]> {
    const url = urls.allDesActivatedEstablishment;
    return this.httpClient.get<IEstablishment[]>(url);
  }

  getById(id:number):Observable<IEstablishment>{
    const url = urls.establishmentsById;
    return this.httpClient.get<IEstablishment>(url(id));
  }

  getOfUser():Observable<IEstablishment[]>{
    const url= urls.establishmentsOfUser;
    return this.httpClient.get<IEstablishment[]>(url);
  }

  addEstablishment(name: string, type: string, midle_check: number, location: string, schedule: string, tags: string[], contacts: { website: any; phone: any; telegram: any; instagram: any; email: any; others: any }) {
    const url = urls.allEstablishment;
    const credentials = { name, type, midle_check, location, schedule, tags ,contacts};
    return this.httpClient.post(url, credentials, {
      responseType: 'text'
    });
  }
  saveImage(formData: FormData): Observable<any> {
    const url = urls.image;
    return this.httpClient.post(url, formData, {
      responseType: 'text'

    });
  }

  addToFavorite(id: number): Observable<any> {
    const url = urls.addEstablishmentToFavorite(id);
    return this.httpClient.post(url, null, { responseType: 'text' });
  }

  deleteFromFavorite(id:number):Observable<any>{
    const url = urls.deleteFromFavorite(id);
    return this.httpClient.delete(url,{ responseType: 'text' })

  }

  deleteEstablishment(id: number): Observable<string> {
    const url = urls.establishmentsById(id);
    return this.httpClient.delete(url, { responseType: 'text' });
  }

  activateEstablishment(id:number):Observable<any>{
    const url =urls.activateEstablishment(id)
    return this.httpClient.put(url,null,{ responseType: 'text' });
  }

  desActivateEstablishment(id:number):Observable<any>{
    const url =urls.desActivateEstablishment(id)
    return this.httpClient.put(url,null,{ responseType: 'text' });
  }

  updateEstablishment(id: number, name: string, type: string, midle_check: number, location: string, schedule: string, tags: string[], contacts: { website: any; phone: any; telegram: any; instagram: any; email: any; others: any }) {
    const credentials={name,type,midle_check,location,schedule,tags,contacts}
    const url = urls.establishmentsById(id);
    console.log(credentials);
    return this.httpClient.put(url,credentials,{responseType:'text'})
  }

  changeOwner(establishmentId: number, userId: number): Observable<any> {
    const url = urls.changer(establishmentId, userId);
    return this.httpClient.put(url, null, { responseType: 'text' });
  }
}
