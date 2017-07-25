import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : any[];
  url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private _http: Http) {
    this._http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      })
   }

   createPost(input : HTMLInputElement){
     let post = {title : input.value};
     input.value = "";
     this._http.post(this.url, JSON.stringify(post))
      .subscribe(res => {
        post['id'] = res.json().id;
        this.posts.splice(0,0,post);
        console.log(res.json())
      });
   }

   updatePost(post){
    //  this._http.put(this.url,JSON.stringify(post))
     this._http.patch(this.url + "/" + post.id ,JSON.stringify({isRead : true}))
      .subscribe(res => {
        console.log(res.json());
      });
   }

}
