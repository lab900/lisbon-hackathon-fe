gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector("video");

once(video, "loadedmetadata", () => {
  tl.fromTo(
    video,
    {
      currentTime: 0,
    },
    {
      currentTime: video.duration || 1,
    }
  );
});

let tl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".video",
    start: "top top",
    // end: "bottom bottom",
    end: "bottom+=400% bottom",
    scrub: true,
    markers: true,
  },
});

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}
