import { trigger, state, transition, style, animate } from "@angular/animations";
export let fade = trigger('fade',[
    
        state('void',style({opacity:0})),
    
          // <=> bi-directinal expression
          // also we can write multple expression in transiction   transition('void => *,*=>void'
          // transition('void <=> *',[
          //   animate(2000)
          // ])
        transition(':enter, :leave',[  // same thing achvied with aliases
            animate(2000)
    ])
])