import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2 h1",{duration: 1, alpha:0, y:100})
            .from("#section-2 p",{duration: 1.5, alpha:0})
            .from("#section-2-buttons",{duration: 1, alpha:0, y:100})
            .from("#join-button",{duration: 1, alpha:0, y:100})


export function section2Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start:"top, 50%",
        end: "bottom 50%"
    });
}