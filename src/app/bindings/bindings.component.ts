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

  onKeyupNew(){    
      console.log("Angular 4 Enter was pressed");    
  }

  onDivClicked(){
    console.log('Div was clicked');
  }

}
