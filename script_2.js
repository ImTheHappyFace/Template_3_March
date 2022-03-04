const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
.from('.heading', { x: '-50vw', ease: 'power2.out',duration:1 },1)
.from('.sub_heading', { x: '50vw', ease: 'power2.out',duration:1 },1)
.from('.button_con', { y: '-100vh' }, '<.1')
.from('.bottle', { y: '-100vh',ease:'bounce',duration:2 }, '<1')
.from('.fixed_bg', { y: '100vh',duration:1 }, '<.4')