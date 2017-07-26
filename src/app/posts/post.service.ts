import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

import { DataService } from "../shared/services/data.service";

@Injectable()
export class PostService extends DataService {
    constructor(_http : Http){
        super("https://jsonplaceholder.typicode.com/posts",_http);
    }
}