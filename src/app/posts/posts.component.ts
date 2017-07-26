import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private _service: PostService) {}
  
  ngOnInit(){
    this._service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
      },error => {
          alert('An unexpected error occurred.');
          console.log(error);
      })
  }
   
   createPost(input : HTMLInputElement){
     let post = {title : input.value};
     input.value = "";
     this._service.createPost(post)
      .subscribe(
        res => {
          post['id'] = res.json().id;
          this.posts.splice(0,0,post);
          console.log(res.json())
      },error => {
          alert('An unexpected error occurred.')
          console.log(error);
      });
   }

   updatePost(post){
    //  this._http.put(this.url,JSON.stringify(post))
    this._service.updatePost(post)
      .subscribe(
        res => {
          console.log(res.json());
      },error => {
          alert('An unexpected error occurred.')
          console.log(error);
      });
   }

   deletPost(post){
    this._service.deletePost(post.id)
      .subscribe(
        response=>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
          console.log(response.json());
      },error => {
        alert('An unexpected error occurred.')
        console.log(error);
      });
   }

}
