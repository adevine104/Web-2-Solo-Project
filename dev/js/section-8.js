import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section8TL = gsap.timeline();

section8TL.from("#section-8 h1",{duration: 1, alpha:0, y:100})
            .from("#section-8 aside",{duration: 1.5, alpha:0, y:50})
            .from("#section-8 p",{duration: 1.5, alpha:0})
            .from("#section-8-button",{duration: 1, alpha:0, y:100})


export function section8Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section8TL,
        toggleActions: "play none none none",
        trigger: "#section-8",
        start:"top, 50%",
        end: "bottom 50%"
    });
}