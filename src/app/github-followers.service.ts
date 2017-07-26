import { Http } from '@angular/http';
import { DataService } from './shared/services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/vinay01joshi/followers',http);
   }

}
