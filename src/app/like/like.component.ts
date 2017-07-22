import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() liked = false;
  @Input('total-likes') count = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.liked = !this.liked;
    this.count += (this.liked) ? 1 : -1 ;
  }

}
