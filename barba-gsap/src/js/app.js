import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import gsap from 'gsap/gsap-core';
import { animationEnter, animationLeave, revealProject, leaveToProject, leaveFromProject } from './animations';


// tell Barba to use the prefetch plugin
barba.use(barbaPrefetch);

const resetActiveLink = () => gsap.set('a.is-active span', {
    xPercent: -100,
    transformOriginal: 'left'
})

barba.hooks.enter(() => {
    // console.log('enter');
    window.scrollTo(0,0);
})
barba.hooks.after(() => {
    // console.log('after');
})

barba.init({
    views: [
        {
            namespace: 'architecture',
            beforeEnter(data){
                console.log(data, 'architecture');
            }
        }
    ],
    transitions: [
        {
            name: 'detail',
            to: {
                namespace: ['detail']
            },
            once({ next }) {
                revealProject(next.container)
            },
            leave: ({ current }) => leaveToProject(current.container),
            enter({ next }) {
                revealProject(next.container)
            },
        },
        {
            name: 'general-transition',

            once({ next }){
                resetActiveLink();
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(next.container)
                })
                // animationEnter(next.container);
            },
            leave: ({ current }) => animationLeave(current.container),
            enter({ next }) {
                // console.log('entering');
                animationEnter(next.container);
            }
        },
        {
            name: 'from-detail',
            from: {
                namespace: ['detail']
            },
            leave: ({ current }) => leaveFromProject(current.container),
            enter({ next }) {
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out'
                });
                animationEnter(next.container);
            }
        }
    ]
})