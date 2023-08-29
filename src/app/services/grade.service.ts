import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGrade} from "../interfaces";
import {urls} from "../constants";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private httpClient:HttpClient) {
  }

  getAll():Observable<IGrade[]>{
    const url = urls.allGrades;
    return this.httpClient.get<IGrade[]>(url);
  }


  addGrade(id: number, grade: number, text: string): Observable<string> {
    const url = urls.gradeById(id);
    const credentials = { grade, text };
    return this.httpClient.post(url, credentials,{
      responseType: 'text'
    });
  }

  deleteGrade(id: number): Observable<any> {
    const url = urls.gradeById(id);
    return this.httpClient.delete(url).pipe(
      tap(() => console.log('Успішне видалення')),
      catchError((error) => {
        console.error('Помилка видалення', error);
        return throwError(error);
      })
    );
  }
}
