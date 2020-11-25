import gsap from 'gsap';

const leaveToProject = (container) => {

    const navLinks = container.querySelectorAll('header a');
    const images = container.querySelectorAll('.image');
    const img = container.querySelectorAll('img');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.4, ease: 'power1.in'
        }
    });

    tl
        .to(navLinks, { yPercent: 100, stager: 0.05 }, 0)
        .to(images, { xPercent: 101, stagger: 0.05 }, 0)
        .to(img, { xPercent: -101, stagger: 0.05 }, 0);

    return tl;
}

export default leaveToProject;