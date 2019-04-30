import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user= new User();
  img : string;
  selectedFile : File = null; 
  token : string;
  description : boolean;
  institution : boolean;
  skills : boolean;
  occupation : boolean;
  constructor(private userservice :UserService,private authService : AuthService,private http: HttpClient,private router : Router) { 
     this.token = this.authService.getToken();
    this.img='http://localhost:8000/api/user/getavatar?token='+this.token;
  }
  ngOnInit() {
    this.onGetProfile();
 }
 onGetProfile (){
   this.userservice.getProfile()
   .subscribe(
       data  =>{this.user=data, console.log(data),
        this.description=(this.user.description==null);
        this.institution=(this.user.institution==null);
        this.skills=(this.user.skills==null);
        this.occupation=(this.user.occupation==null);
      },
       error=>console.log(error)
   );
 }
 onFiledSelected (event){
   console.log(event);
   this.selectedFile = <File> event.target.files[0];
   const fd = new FormData();
   fd.append('photo',this.selectedFile);
  this.http.post('http://localhost:8000/api/user/uploadavatar?token='+this.token,fd).subscribe(
    res => console.log(res)
  );
 }



}
