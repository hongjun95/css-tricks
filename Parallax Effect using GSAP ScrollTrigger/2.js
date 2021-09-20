console.clear();
gsap.registerPlugin(ScrollTrigger);
// console.dir(ScrollTrigger);

//  sets ease, position of button, and event listener - doCoolStuff to use later
// gsap.defaultEase = "power2.out";
// gsap.set("#clicker", {xPercent:-50, yPercent:-50});
// obvio
// document.querySelector("#clicker").addEventListener("click", doCoolStuff);

// sets variables of toggle, radius, and duration of animation
// var toggle = "closed";
var r = 0;

function figureMask() {
  // finds the radius needed for figureradius
  // the entire SVG and center the circle
  var data = document.querySelector("#opener").getBBox();
  r = figureRadius(data.width, data.height);

  // update the radius while resizing - needs working out
  //   if (r !=0) {
  // gsap.set("#cover", { attr: { r: r } });
  //   }
}
function figureRadius(w, h) {
  return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)) / 2.8;
}
figureMask();
window.addEventListener("resize", figureMask);

var tl = gsap.timeline();

tl.to("#cover", {
  delay: 0.3,
  duration: 3,
  ease: "expo.inOut",
  attr: { r: r },
});

// working without scrollTrigger but not with...
tl.to("#cover", {
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  },
  attr: { r: 0 },
  ease: "expo.inOut",
  duration: 3,
  // delay: 1
});

tl.to(".mainslide", {
  scrollTrigger: {
    trigger: document.body,
    // toggleActions: "play none none none",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: true,
    markers: true,
  },
  opacity: 0,
  // filter: "brightness(0)",
  ease: "expo.inOut",
  duration: 3,
  // delay: 1
});

// sandpit

// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#cover", {
//     scrollTrigger: {
//       trigger: ".mainslide",
//         start: "100 top",
//         end: "center top",
//         scrub: true,
//         markers: true,
//       },
//       attr: { r: 0 },
//     ease: "expo.inOut",
//     duration: 3

// });

// var tl = gsap.timeline({
//     scrollTrigger: {
//       start: "100 top",
//       end: "bottom bottom",
//       scrub: true,
//       markers: true,
//     },
//     ease: "power1.in"
//     // defaults: {
//     //   duration: 1,
//     //   // ease: "power1.inOut"
//     // }
//   })
//   .to("#cover", {
//     attr: { r: 0}},
//   2);
