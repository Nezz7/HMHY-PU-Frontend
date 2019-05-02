import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-helpyou',
  templateUrl: './helpyou.component.html',
  styleUrls: ['./helpyou.component.css']
})
export class HelpyouComponent implements OnInit {
  user = new User();
  token : string;
  img   : string;
  constructor(private userservice:UserService,private authService : AuthService) {
    this.token = this.authService.getToken();
    this.img='http://localhost:8000/api/user/getavatar?token='+this.token;
   }

  ngOnInit() {
    this.onGetProfile();
  }
  onGetProfile (){
    this.userservice.getProfile()
    .subscribe(
        data  =>this.user=data,
        error=>console.log("Here :"+error)
    );  
  }
}
