import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable()
export class UserService {
  constructor(private http: Http, private authService: AuthService) {

  }
  /*
  addQuote(content: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: content});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://laravel-ng2-vue.dev/api/quote?token=' + token, body, {headers: headers})
  }
*/
  getProfile() {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/user/profile?token='+token)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  getAvatar(){
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/user/getavatar?token='+token)
      .map(
        (response: Response) => {
          return response.json();
        }
      );

  }
  
  /*
  updateQuote(id: number, newContent: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: newContent});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://laravel-ng2-vue.dev/api/quote/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteQuote(id: number) {
    const token = this.authService.getToken();
    return this.http.delete('http://laravel-ng2-vue.dev/api/quote/' + id + '?token=' + token);
  }*/
}