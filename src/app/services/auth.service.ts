import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {urls} from "../constants";
import {map, Observable} from "rxjs";
import {IAuth, IUser} from "../interfaces";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey = 'Authorization';


  private authUser:IAuth | null;

  constructor(private httpClient: HttpClient, private router:Router) {
  }

  setAuthUser(user:IAuth|null):void{
    this.authUser=user;
  }
  getAuthUser(): IAuth | null {
    return this.authUser;
  }

  login(email: string, password: string): Observable<string> {
    const url = urls.login;
    const credentials = { email, password };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(url, credentials, {

      headers,
      responseType: 'text',
      observe: 'response'
    }).pipe(
      map(response => {
        const accessToken = response.headers.get('Authorization') || '';
        this.me().subscribe(user =>this.setAuthUser(user))
        if (accessToken) {
          localStorage.setItem(this.accessTokenKey, accessToken);
          this.router.navigate(['']);
        }
        return accessToken;
      })
    );
  }

  register(email: string, password: string, nickname: string, birth: string, gender: string): Observable<string> {
    const url = urls.allUsers;
    const credentials = { email, password, nickname, birth, gender };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(url, credentials, {
      headers,
      responseType: 'text'
    });
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) || '';
  }

  me():Observable<IUser>{
    return this.httpClient.get<IUser>(urls.authUser)
  }
}
