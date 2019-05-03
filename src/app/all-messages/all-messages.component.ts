import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { HelpService } from '../help.service';
import { Session } from '../models/session.model';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css']
})
export class AllMessagesComponent implements OnInit {
  user = new User ();
  meSessions : Session[];
  youSessions : Session[];
  session = new Session();
  constructor(private userService : UserService, private helpService : HelpService) { }

  ngOnInit() {
      this.getProfile();
  }
  getProfile (){
    this.userService.getProfile()
    .subscribe(
        data  =>{this.user=data},
        error=>console.log(error)
    );  
  }
  getSessionMe (){
      this.helpService.getSessionMe().subscribe(
         data => this.meSessions=data,
         error => console.log(error),
      );
  }
  getSessionYou (){
    this.helpService.getSessionYou().subscribe(
       data => this.youSessions=data,
       error => console.log(error),
    );
  }
  getHeadMessage(id : number,head : number){
      this.helpService.getHeadMessage(id,head).subscribe(
        data => {console.log(data)},
        error => console.log(error)
      )
  }
  postMessage (id : number , message : string){
    this.helpService.postMessage(id,message).subscribe(
          res=>console.log(res),
          error=>console.log(error),
    )
  }

}
