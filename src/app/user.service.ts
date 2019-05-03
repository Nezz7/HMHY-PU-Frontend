import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable()
export class UserService {
  constructor(private http: Http, private authService: AuthService) {

  }
  getProfile() {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/user/profile?token='+token)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  getProfileId (id : number){
    return this.http.get('http://localhost:8000/api/profile'+id)
    .map(
      (response: Response) => {
        return response.json();
      }
    );
  }
  getAvatarId (id : number){
    return this.http.get('http://localhost:8000/api/profile'+id+'/getavatar')
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
  updateDescription(description : string){
    const token = this.authService.getToken();
    const body = JSON.stringify({
      "description": description,
    });
    const headers = new Headers({'Content-Type':'application/json'});
    return   this.http.post('http://127.0.0.1:8000/api/user/updatedescription?token='+token,body,{headers :headers});
  }
  updateOccupation(occupation : string){
    const token = this.authService.getToken();
    return   this.http.post('http://127.0.0.1:8000/api/user/updateoccupation?token='+token,
    {
        occupation : occupation,
        
    }
    ).map(
      (response: Response) => {
        return response.json();
      }
    );;
  }
  updateInstitution(institution : string){
    const token = this.authService.getToken();
   
    return   this.http.post('http://127.0.0.1:8000/api/user/updateinstitution?token='+token,
    {
        institution : institution,
        
    },
    {headers:new Headers({ 'X-Requested-With' : 'XMLHttpRequest'})}
    ).map(
      (response: Response) => {
        return response.json();
      }
    );;
  }
  addSkill (skill : string){
    const token = this.authService.getToken();
    return   this.http.post('http://127.0.0.1:8000/api/user/addskills?token='+token,
    {
        skills : [skill]
        
    }).map(
      (response: Response) => {
        return response.json();
      }
    );;
  }
  deleteSkill (skill : string){
    const token = this.authService.getToken();
    return   this.http.post('http://127.0.0.1:8000/api/user/removeskills?token='+token,
    {
        skills : [skill]
        
    }).map(
      (response: Response) => {
        return response.json();
      }
    );;
  }

}