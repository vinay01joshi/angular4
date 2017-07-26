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
      .subscribe(
        response => {
          this.posts = response.json();
      });
  }
   
   createPost(input : HTMLInputElement){
     let post = {title : input.value};
     input.value = "";
     this._service.create(post)
      .subscribe(
        res => {
          post['id'] = res.json().id;
          this.posts.splice(0,0,post);
          console.log(res.json())
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
        res => {
          console.log(res.json());
      });
   }

   deletPost(post){
    this._service.delete(post.id)
      .subscribe(
        response=>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
          console.log(response.json());
      },(error : AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has laready been deleted');
        else throw error;
      });
   }

}
