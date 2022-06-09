gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".scrolling-video");

const tl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".scrolling-video-background",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

const tlFade = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".scrolling-video-background",
    start: "top top",
    end: "+=50",
    scrub: true,
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

document.querySelectorAll(".scrolling-video-background").forEach((el) => {
  const video = document.createElement("video");

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
    tlFade.fromTo(
      video,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  });
  video.src = "./output_960.mp4";
  video.playsInline = true;
  video.preload = "auto";
  video.muted = "muted";
  video.className = "scrolling-video";
  // video.style = "opacity: 0";
  el.appendChild(video);
});
