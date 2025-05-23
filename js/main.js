const tl = gsap.timeline({paused:true});
tl.to(".cart",{scale:1.1,duration:1,ease:"power4.out"});
tl.to("img",{scale:1.2,duration:3,ease:"power4.out"});
tl.from(".cart-text",{
    y:"100%",
    autoAlpha:0,
},"-=3");

document.querySelector(".cart").addEventListener("mouseover", ()=>{
    tl.timeScale(1)
    tl.play();
})
document.querySelector(".cart").addEventListener("mouseleave", () => {
    tl.timeScale(2.5)
  tl.reverse();
});