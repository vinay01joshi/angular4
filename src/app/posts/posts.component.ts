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
  constructor(http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      })
   }

}
