import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BadInput } from "../../common/bad-input";
import { NotFoundError } from "../../common/not-found-error";
import { AppError } from "../../common/app-error";


@Injectable()
export class DataService {
    constructor(private url:string, private _http : Http){}

    getAll(){
         return this._http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(resource){
        //return Observable.throw(new AppError()); generating error intentionally
        return this._http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource){
        return  this._http.patch(this.url + "/" + resource.id ,JSON.stringify({isRead : true}))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id){
        //return Observable.throw(new AppError()); // simulate expection
        return  this._http.delete(this.url + "/" + id)
            .map(response => response.json())
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