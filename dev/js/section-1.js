import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section1TL = gsap.timeline();

section1TL.from("#section-1 h1",{duration: 1, alpha:0, x:-300})
            .from("#section-1 h2",{duration: 1.5, alpha:0})


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