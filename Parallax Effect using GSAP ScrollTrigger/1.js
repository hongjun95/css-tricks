gsap.utils.toArray(".show_up").forEach((panel, i) => {
  const ani = gsap.to(panel, {
    scrollTrigger: {
      scrub: 1,
    },
    opacity: 1,
    y: 0,
  });
  ScrollTrigger.create({
    trigger: panel,
    start: "-90%% 100%",
    end: "-90%% 100%",
    markers: true,
    onEnter: () => ani.play(),
  });
});
