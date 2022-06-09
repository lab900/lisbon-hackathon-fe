gsap.registerPlugin(ScrollTrigger);

const config = {
  id: "0",
  name: "cartoonBaseShowCase",
  layers: [
    {
      id: "1",
      name: "part1",
      content: {
        value:
          "https://storage.googleapis.com/lab900-public-assets/background.mp4",
        type: "VIDEO",
      },
      transitions: [
        {
          startPosition: { x: 0, y: 0 },
          endPosition: { x: 0, y: 0 },
          "animation-in": "FADE-IN",
          "animation-out": "FADE-OUT",
        },
      ],
      subLayers: [
        {
          id: "2",
          name: "title",
          content: {
            value: "Space is messy",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: { x: 2, y: 2 },
              endPosition: {
                x: 2,
                y: 2,
              },
              "animation-in": "NONE",
              "animation-out": "NONE",
            },
          ],
          subLayers: [{}],
        },
        {
          id: "3",
          name: "explanation",
          content: {
            value:
              "Space, the final frontier, vast void speckled with planets and it's stars and well… JUNK. You see, space is messy, REALLY MESSY. But why should we care? What is space junk? Why clear space?",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 2,
                y: 10,
              },
              endPosition: {
                x: 2,
                y: 10,
              },
              "animation-in": "NONE",
              "animation-out": "NONE",
            },
          ],
          subLayers: [{}],
        },
      ],
    },
    {
      id: "4",
      name: "part2",
      content: {
        value:
          "https://storage.googleapis.com/lab900-public-assets/could-we-be-in-danger.mp4",
        type: "VIDEO",
      },
      transitions: [
        {
          startPosition: {
            x: 0,
            y: 100,
          },
          endPosition: {
            x: 0,
            y: 500,
          },
          "animation-in": "FADE-IN",
          "animation-out": "FADE-OUT",
        },
      ],
      subLayers: [
        {
          id: "5",
          name: "extraText1",
          content: {
            value:
              "The first satellite was launched in 1957 by the USSR as part of their great space race against the USA.",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 75,
                y: 0,
              },
              endPosition: {
                x: 75,
                y: 94.11,
              },
              "animation-in": "FADE_IN",
              "animation-out": "FADE_OUT",
            },
          ],
          subLayers: [{}],
        },
        {
          id: "6",
          name: "extraText2",
          content: {
            value:
              "Little Sputnik was the first, but certainly wasn't the last.",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 75,
                y: 94.11,
              },
              endPosition: {
                x: 75,
                y: 141.17,
              },
              "animation-in": "FADE_IN",
              "animation-out": "FADE_OUT",
            },
          ],
          subLayers: [{}],
        },
        {
          id: "7",
          name: "extraText3",
          content: {
            value: "Today, there are over 6000, 6542 to be precise,",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 75,
                y: 141.17,
              },
              endPosition: {
                x: 75,
                y: 211.76,
              },
              "animation-in": "FADE_IN",
              "animation-out": "FADE_OUT",
            },
          ],
          subLayers: [{}],
        },
        {
          id: "8",
          name: "extraText4",
          content: {
            value: "and half of them don't even work anymore.",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 75,
                y: 211.76,
              },
              endPosition: {
                x: 75,
                y: 247.06,
              },
              "animation-in": "FADE_IN",
              "animation-out": "FADE_OUT",
            },
          ],
          subLayers: [{}],
        },
        {
          id: "9",
          name: "extraText5",
          content: {
            value: "But that is not all that is floating around out there.",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 75,
                y: 247.06,
              },
              endPosition: {
                x: 75,
                y: 270.59,
              },
              "animation-in": "FADE_IN",
              "animation-out": "FADE_OUT",
            },
          ],
          subLayers: [{}],
        },
        {
          id: "10",
          name: "extraText6",
          content: {
            value:
              "There are spaceships parts, default missiles, even US astronaut Ed Whites' glove.",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 75,
                y: 270.59,
              },
              endPosition: {
                x: 75,
                y: 352.94,
              },
              "animation-in": "FADE_IN",
              "animation-out": "FADE_OUT",
            },
          ],
          subLayers: [{}],
        },
        {
          id: "11",
          name: "extraText7",
          content: {
            value:
              "With so much floating around up there, could we be in danger?",
            type: "TEXT",
          },
          transitions: [
            {
              startPosition: {
                x: 75,
                y: 352.94,
              },
              endPosition: {
                x: 75,
                y: 399,
              },
              "animation-in": "FADE_IN",
              "animation-out": "FADE_OUT",
            },
          ],
          subLayers: [{}],
        },
      ],
    },
    {
      id: "12",
      name: "Part 3",
      content: {
        value:
          "https://storage.googleapis.com/lab900-public-assets/interview-why-is-it-dangerous.mp4",
        type: "VIDEO",
      },
      transitions: [
        {
          startPosition: {
            x: 0,
            y: 500,
          },
          endPosition: {
            x: 0,
            y: 600,
          },
          "animation-in": "NONE",
          "animation-out": "NONE",
        },
      ],
      subLayers: [{}],
    },
  ],
};

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

const tlFadeOut = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".scrolling-video-background",
    start: "bottom bottom",
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
    tlFadeOut.fromTo(
      video,
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );
  });
  video.src = "./danger.mp4";
  video.playsInline = true;
  video.preload = "auto";
  video.muted = "muted";
  video.className = "scrolling-video";
  // video.style = "opacity: 0";
  el.appendChild(video);
});
