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
  isActive= true;
  userEmail = "me.@example.com";

  course = {
    title : "The complete Angular course",
    rating : 4.9745,
    students: 30123,
    price : 19095,
    releaseDate : new Date(2016,3,1)
  }

  constructor() { }


  ngOnInit() {
  }

  onSave($event){
    $event.stopPropagation();
    console.log('Button was clicked !' , $event);
  }

  onKeyup($event){
    if($event.keyCode === 13){
      console.log("Enter was pressed");
    }
  }

  onKeyupNew($event){    
      console.log($event.target.value);    
  }
  onKeyupNew1(email){    
      console.log(email);    
  }

  onKeyupNew2(){    
      console.log(this.userEmail);    
  }

  onDivClicked(){
    console.log('Div was clicked');
  }

}
