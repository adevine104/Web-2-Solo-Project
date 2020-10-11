import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const section3TL = gsap.timeline();

section3TL.from("#section-3 h1",{duration: 1, alpha:0, x:300})


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


const section31TL = gsap.timeline();

section31TL.from("#section-3 .number",{duration: 1, alpha:0, rotation: 270, stagger:.5}, "play-3")
            .from("#section-3 h3",{duration: 1, alpha:0, stagger:.5}, "play-3")

export function section31Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section31TL,
        toggleActions: "play none none none",
        trigger: "#section-3 .number",
        start:"top, 50%",
        end: "bottom 50%"
    });
}