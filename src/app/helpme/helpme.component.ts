import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-helpme',
  templateUrl: './helpme.component.html',
  styleUrls: ['./helpme.component.css']
})
export class HelpmeComponent implements OnInit {
  user = new User();
  constructor(private userservice :UserService) {
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
