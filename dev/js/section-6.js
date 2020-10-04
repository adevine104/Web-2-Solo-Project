import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section6TL = gsap.timeline();

section6TL.from("#section-6 h1",{duration: 1, alpha:0, y:100})
          .from(".pic",{duration: 1.5, alpha:0, rotate:90, stagger:.5}, "play-6")
          .from(".text",{duration: 1.5, alpha:0,  stagger:.5}, "play-6")
            // .from(".c-5-numbers",{duration: 1.5, alpha:0, rotation: 360, stagger:.5}, "play-5")
            // .from(".c-5-words",{delay:1, duration: 1.5, alpha:0, stagger:.5}, "play-5")
            // .from("#section-5 h6",{duration: .5, alpha:0})


export function section6Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section6TL,
        toggleActions: "play none none none",
        trigger: "#section-6",
        start:"top, 50%",
        end: "bottom 50%"
    });
}