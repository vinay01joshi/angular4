import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    {year: 2017 , month : 8},
    {year: 2017 , month : 7},
    {year: 2017 , month : 6},
    {year: 2017 , month : 5}
  ]
  constructor() { }

  ngOnInit() {
  }

}
