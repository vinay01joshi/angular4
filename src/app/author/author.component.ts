import { Component, OnInit } from '@angular/core';
import { AuthorService } from "./author.service";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors = [];
  constructor(private _authorService : AuthorService) { }

  ngOnInit() {
   this.authors = this._authorService.getAuthors();
  }

}
