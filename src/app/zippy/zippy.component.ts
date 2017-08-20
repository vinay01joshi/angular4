import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes, useAnimation, query, animateChild, group } from "@angular/animations";

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations:[
    trigger('expandCollapse',[
      state('collapsed',style({
        height: 0,
        paddingTop:0,
        paddingBottom:0,
        overflow: 'hidden'     
      })),
      transition('collapsed => expanded',[
        animate('300ms ease-out')
      ]),
      transition('expanded => collapsed',[
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent {

  isExpanded : boolean;
  @Input('title') title : string;

  constructor() { }


  toggle(){
    this.isExpanded =  !this.isExpanded;
  }

}
