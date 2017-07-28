import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers : any[];
  constructor(private service : GithubFollowersService,private route : ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.paramMap.subscribe(
      params => {

      }
    );

    let page = this.route.queryParamMap.subscribe(
      params => {
        
      }
    );

    this.service.getAll()
    .subscribe(followers => this.followers = followers);
  }

}
