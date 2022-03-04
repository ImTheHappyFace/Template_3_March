// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' })
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
// gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%' })
// gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 })
// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })



const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
.fromTo('.link',  { opacity: 0.8, scale: 1, rotation: 720,duration:2}, { opacity: 1, scale: 1.2, rotation: 0,duration:3 },)

  .from('.header', { y: '-400px', ease: 'bounce',duration:3.2 },1)
  
  .from('.main_tag', { x: '-100vw', ease: 'power2.out',duration:2 }, 2)
  .from('.sub_tag', { x: '100vw', ease: 'power2.out',duration:2 }, 2)
  .from('.btn_yellow', { y: '-100vh' }, '<.8')
  .to('.footer', {  y: 0, ease: 'elastic' })
  .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })


  // gsap.from('.header', { y: '-300px', ease: 'bounce' },1)
 
const button = document.querySelector('.button')




button.addEventListener('click', () => {
  timeline.timeScale(3)
  timeline.reverse()
})