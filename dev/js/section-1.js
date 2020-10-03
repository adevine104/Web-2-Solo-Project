import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section1TL = gsap.timeline();

section1TL.from("#section-1-header",{duration: 0.5, alpha:0, rotation:180})
            // .from("#section-1-first h1",{duration: 0.5, alpha:0, x: -300})
            // .from("#section-1-first h4",{duration: 0.5, alpha:0, x: 300})
            // .from("#section-1-middle",{duration: 0.5, alpha:0, x: -300})
            // .from("#section-1-last",{duration: 10, alpha:0, x: 300});


export function section1Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section1TL,
        toggleActions: "play none none none",
        trigger: "#section-1",
        start:"top, 50%",
        end: "bottom 50%"
    });
}