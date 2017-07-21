import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  title = "List of Courses";
  imageUrl = "http://lorempixel.com/400/200";
  colspan =2 ;
  constructor() { }

  ngOnInit() {
  }

}
