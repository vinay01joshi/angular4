import { trigger, state, transition, style, animate } from "@angular/animations";

export let slide = trigger('slide',[
    transition(':enter',[
        style({transform:'translateX(-10px)'}),
        animate(500)
    ]),

    transition(':leave',[
        animate(500,style({transform: 'translateX(-100%)'}))
    ])
]);

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