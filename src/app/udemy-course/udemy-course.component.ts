import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.css']
})
export class UdemyCourseComponent {

  catagories = [
    {id  : 1 , name : 'Development'},
    {id  : 2 , name : 'Art'},
    {id  : 3 , name : 'Science'}
  ]
  constructor() { }

  submit(value){
    console.log(value);
  }

}
