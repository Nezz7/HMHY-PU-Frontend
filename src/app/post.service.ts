import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "./auth.service";
import { Post } from "./models/post.model";


@Injectable()
export class PostService {
  constructor(private http: Http, private authService: AuthService) {

  }
 
  createPost (post : Post){
    const token = this.authService.getToken();
    return this.http.post('http://127.0.0.1:8000/api/user/helpme/create?token='+token,post)
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  getAllPost (){
    const token = this.authService.getToken();
    return this.http.get('http://127.0.0.1:8000/api/user/helpme/all?token='+token)
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  deletePost(id : number){
    const token = this.authService.getToken();
    return this.http.post('http://127.0.0.1:8000/api/user/helpme'+id+'/delete?token='+token,'')
    .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  
}