//import * as Demo from './demo.js';

// import {gsap} from "gsap";

import {section1Animation} from "./section-1.js";
import {section2Animation} from "./section-2.js";
import {section3Animation} from "./section-3.js";
import {section31Animation} from "./section-3.js";
import {section4Animation} from "./section-4.js";
import {section5Animation} from "./section-5.js";
import {section6Animation} from "./section-6.js";
import {section7Animation} from "./section-7.js";
import {section8Animation} from "./section-8.js";





// call section 1 animation function
section1Animation();
section2Animation();
section3Animation();
section31Animation();
section4Animation();
section5Animation();
section6Animation();
section7Animation();
section8Animation();





var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;
 
function mouseClick(){
 
if($(window).width() <= 992){
console.log("click");
if(isVisible === false){
$nav.show();
isVisible = true;
}
else{
$nav.hide();
isVisible = false;
}
}
}
 
$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on( "click", mouseClick);
