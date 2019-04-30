import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user= new User();
  img : string;
  constructor(private userservice :UserService,private authService : AuthService) { 
    const token = this.authService.getToken();
    this.img='http://localhost:8000/api/user/getavatar?token='+token;
  }
  ngOnInit() {
    this.onGetProfile();
 }
 onGetProfile (){
   this.userservice.getProfile()
   .subscribe(
       data  =>this.user=data,
       error=>console.log(error)
   );
 }

}
