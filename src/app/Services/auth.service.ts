import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const url = "https://ngx.ampath.or.ke/amrs/ws/rest/v1/session";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private http: HttpClient) { }
  public authenticate(username:string, password: string) {
    let headers = new HttpHeaders();
     
        const base64 = btoa(username + ':' + password);
        headers = headers.append('Authorization', 'Basic ' + base64);
        return this.http.get(url, { headers: headers });
    
}
public logout () {
  this.http.delete (url)
}

}


