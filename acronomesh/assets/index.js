// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' })
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
// gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%' })
// gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 })
// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })



const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline

.from('.bottle_bottom', { duration: 1, ease: "slow(0.7, 0.7, false)", y: -200 },1)
.from('.header', { duration: 1.2, ease: "slow(0.7, 0.7, false)", y: -450 },1)
.fromTo(".main_tag", {opacity: 0}, {opacity: 1, duration: 1.9, ease: "slow(0.7, 0.7, false)"},1.4)
.fromTo('.link',  { opacity: 0.8, scale: 1, rotation: 720,duration:2}, { opacity: 1, scale: 1.2, rotation: 0,duration:3 },1.5)
.fromTo(".sub_tag", {y:20,opacity: 0}, {y:0,opacity: 1, duration: 2, ease: "slow(0.7, 0.7, false)",delay:'.4'},1.5)
.fromTo(".btn_yellow", {y:200,opacity: 0}, {y:0,opacity: 0.8, duration: 1, ease: "slow(0.7, 0.7, false)"},1.6)



// Timeline 2






// button.addEventListener('click', () => {
//   timeline.timeScale(3)
//   timeline.reverse()
// })