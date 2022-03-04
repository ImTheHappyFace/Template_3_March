const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
.from('.heading', { x: '-50vw', ease: 'power2.out',duration:1 },1)
.from('.clean', { x: '-100vw', ease: "back.out(1)",duration:1 },1)
.from('.it', { x: '100vw', ease: "back.out(1)",duration:1 },1)
.from('.all', { y: '100vh', ease: "back.out(1.1)",duration:1.5 },1)
.from('.sub_heading', { x: '100vw', ease: 'power2.out',duration:1 },2)
.from('.center_button', { y: '30vh',ease:"bounce",duration:1.6 }, '<.5')