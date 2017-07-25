import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {
    url = "https://jsonplaceholder.typicode.com/posts";
    constructor(private _http : Http){}

    getPosts(){
         return this._http.get(this.url);
    }

    createPost(post){
        return this._http.post(this.url, JSON.stringify(post));
    }

    updatePost(post){
        return  this._http.patch(this.url + "/" + post.id ,JSON.stringify({isRead : true}));
    }

    deletePost(id){
        return  this._http.delete(this.url + "/" + id);
    }
}