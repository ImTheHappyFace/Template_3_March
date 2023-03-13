const timelineTwo = gsap.timeline({defaults:{duration:1}})

timelineTwo
.fromTo(".bottle-1", {y:400,x:-400}, {y:0,x:0, duration: 1.9, ease: "slow(0.7, 0.7, false)"},1.4)
.fromTo(".bottle-2", {y:400,x:-400}, {y:0,x:0, duration: 1.9, ease: "slow(0.7, 0.7, false)"},1.4)
.fromTo(".bottle-3", {y:-400,x:400}, {y:0,x:0, duration: 1.9, ease: "slow(0.7, 0.7, false)"},1.4)
.fromTo(".bottle-4", {y:-400,x:400}, {y:0,x:0, duration: 1.9, ease: "slow(0.7, 0.7, false)"},1.4)
.fromTo(".headline", {y:800,opacity: 0}, {y:0,opacity: 1, duration: 1.9, ease: "slow(0.7, 0.7, false)"},1)


 
const button = document.querySelector('.button')