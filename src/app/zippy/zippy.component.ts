import { expandCollapse } from './../shared/animations/zippy.component.animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations:[expandCollapse]
})
export class ZippyComponent {

  isExpanded : boolean;
  @Input('title') title : string;

  constructor() { }


  toggle(){
    this.isExpanded =  !this.isExpanded;
  }

}
