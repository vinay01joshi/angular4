import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from "../common/not-found-error";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
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
     input.value = "";
     this._service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          this.posts.splice(0,0,post);
          console.log(newPost)
      },(error: AppError) => {
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
    this._service.delete(post.id)
      .subscribe(
        ()=>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);       
      },(error : AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has laready been deleted');
        else throw error;
      });
   }

}
