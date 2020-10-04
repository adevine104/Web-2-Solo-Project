import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section7TL = gsap.timeline();

section7TL.from("#section-7 h1",{duration: 1, alpha:0, x:300})
            .from("#section-7 aside",{duration: 1, alpha:0, y:50})
            .from("#section-7 p",{duration: 1.5, alpha:0, y:100})
            // .from("#section-3 h3",{delay:1, duration: 1.5, alpha:0, stagger:.5}, "play-3")


export function section7Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section7TL,
        toggleActions: "play none none none",
        trigger: "#section-7",
        start:"top, 50%",
        end: "bottom 50%"
    });
}