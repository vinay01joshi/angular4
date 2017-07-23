import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],   
  encapsulation : ViewEncapsulation.Emulated //ViewEncapsulation.Native ( shadow ) //ViewEncapsulation.Non (bleed out side of views)
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite = false;

  @Output() change = new EventEmitter()
  
  canSave= true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue :  this.isFavorite});
  }

}
