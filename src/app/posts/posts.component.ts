import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from "../common/not-found-error";
import { trigger, state, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0}),
        animate(2000)
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private _service: PostService) {}
  
  ngOnInit(){
    this._service.getAll()
      .subscribe(posts => this.posts = posts);
  }
   
   createPost(input : HTMLInputElement){
     let post = {title : input.value};
     this.posts.splice(0,0,post);
     input.value = "";
     this._service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;          
          console.log(newPost)
      },(error: AppError) => {
          this.posts.splice(0,1);

          if(error instanceof BadInput){
            // this.form.setErrors(error.originalError);            
          }
          else throw error;             
      });
   }

   updatePost(post){
    //  this._http.put(this.url,JSON.stringify(post))
    this._service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
      });
   }

   deletPost(post){

     let index = this.posts.indexOf(post);
     this.posts.splice(index,1);       

    this._service.delete(post.id)
      .subscribe(
        null
        ,(error : AppError) => {
          this.posts.splice(index,0,post);

        if(error instanceof NotFoundError)
          alert('This post has laready been deleted');
        else throw error;
      });
   }

}
