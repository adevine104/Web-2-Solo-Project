import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section5TL = gsap.timeline();

section5TL.from("#section-5 h1",{duration: 1, alpha:0, x:-300})
          .from("#section-5 aside",{duration: 1.5, alpha:0, x:300}, "play-5")
          .from("#section-5 h4",{duration: 1.5, alpha:0}, "play-5")
            .from(".c-5-numbers",{duration: 1, alpha:0, rotation: 360, stagger:.5}, "play-5")
            .from(".c-5-words",{delay:1, duration: 1, alpha:0, stagger:.5}, "play-5")
            .from("#section-5 h6",{duration: .5, alpha:0})


export function section5Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section5TL,
        toggleActions: "play none none none",
        trigger: "#section-5",
        start:"top, 50%",
        end: "bottom 50%"
    });
}