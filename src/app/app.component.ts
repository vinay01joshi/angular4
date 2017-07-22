import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4App';

  tweets = {
    body : 'Here is the body of tweet.',
    isLiked : true,
    totalLikes : 10
  } 

}
