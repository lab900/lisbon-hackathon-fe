import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { CameraRig, ScrollControls } from 'three-story-controls/dist/three-story-controls';
import { PerspectiveCamera, Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
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
    }, {});

    let tl = gsap.timeline({
      defaults: {duration: 1},
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

    const scene = new Scene()
    const gltfLoader = new GLTFLoader()
    const camera = new PerspectiveCamera()
    const cameraRig = new CameraRig(camera, scene)
    const controls = new ScrollControls( cameraRig,{
      scrollElement: document.querySelector('.scroller'),
      scrollActions: [
        {start: '0%', end: '10%', callback: e => fadeInElement(e)},
        {start: '85%', end: '100%', callback: e => fadeOutElement(e)}
      ]
    })

    console.log(controls);

    function fadeInElement(progress) {
      console.log(progress)
    }

    function fadeOutElement(progress) {
      console.log(progress)
    }

  }

}
