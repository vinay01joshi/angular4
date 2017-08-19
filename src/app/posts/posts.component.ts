import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from "../common/not-found-error";
import { fade, slide, bounceOutLeftAnimcation, fadeInAnimation } from './../shared/animations/fade.animations';
import { trigger, state, transition, style, animate, keyframes, useAnimation, query, animateChild } from "@angular/animations";


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations:[
    trigger('todosAnimation', [
      transition(':enter',[
        query('h1',[
          style({transform: 'translateY(-20px)'}),
          animate(1000)
        ]),
        query('@todoAnimation',animateChild(),{ optional: true })
      ])
    ]),

    trigger('todoAnimation',[
      transition(':enter',[
        useAnimation(fadeInAnimation,{
          params:{
            duration:'500ms'
          }
        })
      ]),
      transition(':leave',[
        style({backgroundColor:'red'}),
        animate(1000),
        useAnimation(bounceOutLeftAnimcation)
      ]
    ),
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

   animationStarted($event){ console.log($event); }
   animationDone($event){ console.log($event); }

}
