import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from "@angular/animations";

export let bounceOutLeftAnimcation = animation(
    animate('1s ease-out',keyframes([
        style({ offset: .2, opacity:1,transform:'translateX(20px)'}),
        style({ offset: 1, opacity:0,transform:'translateX(-100%)'}),
    ]))
);

export let slide = trigger('slide',[

    transition(':enter',[
        style({transform:'translateX(-10px)'}),
        animate(500)
    ]),

    transition(':leave',useAnimation(bounceOutLeftAnimcation)
        // animate('0.5s ease-in',style({transform: 'translateX(-100%)'}))
        //animate('0.5s cubic-bezier(.72,.43,.85,.06)',style({transform: 'translateX(-100%)'})) // using cubic bezier
    )
]);

export let fadeInAnimation = animation([
    style({opacity: 0}),animate('{{ duration }} {{ easing }}')
    ],{
    params:{
        duration: '2s',
        easing:'ease-out'
    }
});

export let fadeOutAnimation = animation([
    animate(200),style({opacity:0})
])

export let fade = trigger('fade',[            
        transition(':enter',useAnimation(fadeInAnimation)),
        transition(':leave',useAnimation(fadeOutAnimation))
])