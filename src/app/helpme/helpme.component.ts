import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-helpme',
  templateUrl: './helpme.component.html',
  styleUrls: ['./helpme.component.css']
})
export class HelpmeComponent implements OnInit {
  user = new User();
  newPost = new Post ();
  constructor(private userservice :UserService) {
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
  onTest(){
    console.log("Post created  :" + this.newPost);
  }
  postHelpRequest(form : NgForm){
      console.log ("here :" + form.value.description);
      console.log("here : " + form);
      this.newPost.description=form.value.description;
      this.newPost.short_description=form.value.short_description;
      this.newPost.title=form.value.title;
      this.newPost.cost=form.value.cost;
      this.newPost.status=form.value.status;
      this.newPost.skills=form.value.skills.split(' ');
      console.log(this.newPost);

  }
}
