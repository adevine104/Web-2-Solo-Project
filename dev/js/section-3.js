import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

section3TL.from("#section-3 h1",{duration: 1, alpha:0, x:300})
            // .from("#blue-man",{duration: .5, alpha:0})
            .from("#section-3 .number",{delay:1, duration: 1.5, alpha:0, rotation: 360, stagger:.5}, "play-3")
            .from("#section-3 h3",{delay:1, duration: 1.5, alpha:0, stagger:.5}, "play-3")


export function section3Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section3TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start:"top, 50%",
        end: "bottom 50%"
    });
}