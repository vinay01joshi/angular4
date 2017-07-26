import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import { NotFoundError } from './../common/not-found-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class PostService {
    url = "https://jsonplaceholder.typicode.com/posts";
    constructor(private _http : Http){}

    getPosts(){
         return this._http.get(this.url)
            .catch(this.handleError);
    }

    createPost(post){
        return this._http.post(this.url, JSON.stringify(post))
            .catch(this.handleError);
    }

    updatePost(post){
        return  this._http.patch(this.url + "/" + post.id ,JSON.stringify({isRead : true}))
            .catch(this.handleError);
    }

    deletePost(id){
        return  this._http.delete(this.url + "/" + id)
            .catch(this.handleError)
    }

    private handleError(error : Response){
        if(error.status === 400)
            return Observable.throw(new BadInput(error.json()));
        if(error.status === 404)
            return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error.json()));
    }
}