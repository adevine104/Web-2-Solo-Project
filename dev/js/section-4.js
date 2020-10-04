import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#section-4 h1",{duration: 1, alpha:0, y:50})
            .from("#section-4 p",{duration: 1.5, alpha:0, x:300}, "play-4")
            .from("#section-4 aside",{duration: 1.5, alpha:0, x:-300}, "play-4")


export function section4Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section4TL,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start:"top, 50%",
        end: "bottom 50%"
    });
}