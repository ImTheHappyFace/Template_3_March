const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
.fromTo('.link',  { opacity: 0.8, scale: 1, rotation: 720,duration:2}, { opacity: 1, scale: 1.2, rotation: 0,duration:3 },)

  .from('.header', { y: '-400px', ease: 'bounce',duration:3.2 },1)
  
  .from('.main_tag', { x: '-100vw', ease: 'power2.out',duration:2 }, 2)
  .from('.sub_tag', { x: '100vw', ease: 'power2.out',duration:2 }, 2)
  .from('.btn_yellow', { y: '-100vh' }, '<.8')