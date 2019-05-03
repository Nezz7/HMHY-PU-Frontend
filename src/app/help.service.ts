import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "./auth.service";
import { Post } from "./models/post.model";


@Injectable()
export class HelpService {
  constructor(private http: Http, private authService: AuthService) {

  }
 
  getSessionMe (){
    const token = this.authService.getToken();
    return this.http.get('http://127.0.0.1:8000/api/user/sessions/helpme?token='+token,)
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  getSessionYou (){
    const token = this.authService.getToken();
    return this.http.get('http://127.0.0.1:8000/api/user/sessions/helpyou?token='+token,)
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  getHeadMessage (id : number , head : number){
    const token = this.authService.getToken();
    return this.http.get('http://127.0.0.1:8000/api/user/session'+id+'/head'+head+'?token='+token,)
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  postMessage (id : number , message : string){
    const token = this.authService.getToken();
    const body = JSON.stringify({
      "message": message,
    });
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://127.0.0.1:8000/api/user/session'+id+'/postmessage?token'+token,body,{headers :headers})
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  createSession (id : number ){
    const token = this.authService.getToken();
    return this.http.post('http://127.0.0.1:8000/api/user/helpme'+id+'/help?token='+token,'')
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}