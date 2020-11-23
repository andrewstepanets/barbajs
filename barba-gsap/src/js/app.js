import barba from '@barba/core';
import gsap from 'gsap';

const animationEnter = (container) => {
    return gsap.from(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
}
const animationLeave = (container) => {
    return gsap.to(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none' });
}
barba.init({
    transitions: [
        {
            once({ next }){
                animationEnter(next.container);
            },
            leave({ current }){
                animationEnter(current.container);
            }
        }
    ]
})