!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.enabledButton=function(e){document.getElementById("js-link-next").classList.add("tutorial__link_disabled"),setTimeout(function(){document.getElementById("js-link-next").classList.remove("tutorial__link_disabled")},e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.swapSlides=function(e,t,n){var o=document.getElementById("js-tutorial-wrapper"),s=document.getElementsByClassName("tutorial__item"),i=(document.getElementsByClassName("tutorial")[0],document.getElementById("js-link-next"),o.getBoundingClientRect().left,s[0].offsetWidth),a=document.getElementById("js-counter"),l=s.length;n<l-1?n++:n=0,TweenMax.to(o,t,{x:"-"+(i*n+e)}),a.innerHTML=(++n).toString()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.step1Init=void 0;var o=n(0);t.step1Init=function(){window.onload=function(){for(var e=new TimelineLite({paused:!0}),t=document.getElementById("js-animate-logo"),n=0;n<=120;n++){var s=n<10?"00"+n:n<100?"0"+n:n;e.set(t,{attr:{src:"assets/animation/"+s+".png"}},n)}TweenLite.to(e,3,{progress:1,ease:Power1.easeInOut}),(0,o.enabledButton)(2e3)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.step2Init=void 0;var o=n(0),s=n(1);t.step2Init=function(){(0,s.swapSlides)(0,.2,0),(0,o.enabledButton)(1200);var e=document.getElementById("js-image-shadow"),t=e.getElementsByClassName("step-2__shadow");[].forEach.call(t,function(e,t){TweenMax.to(e,1,{ease:Power2.easeInOut,y:4*-t+30})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.step3Init=void 0;var o=n(0),s=n(1);t.step3Init=function(){(0,o.enabledButton)(2e3);var e=document.getElementById("js-image-shadow"),t=e.querySelectorAll("div, img"),n=document.getElementsByClassName("step-2")[0].querySelectorAll("h1,p"),i=document.getElementById("js-appearance-text"),a=document.getElementById("js-rotate-photos"),l=a.querySelectorAll("img");TweenMax.fromTo(document.getElementById("js-changing-text"),2,{opacity:0},{opacity:1,innerHTML:"Now it Even..."}),setTimeout(function(){[].forEach.call(t,function(e,t){TweenMax.to(e,2,{ease:Power2.easeInOut,y:-480-80*t})}),[].forEach.call(n,function(e){TweenMax.to(e,2,{opacity:0})})},500),setTimeout(function(){TweenMax.fromTo(i,2,{opacity:0},{opacity:1}),TweenMax.fromTo(l[0],1,{top:"-260px",position:"absolute",left:"160px",rotation:-8},{top:"30px",left:"-60px",rotation:-4}),TweenMax.fromTo(l[1],1,{top:"-260px",position:"absolute",left:"160px",rotation:18},{top:"30px",left:"210px",rotation:4}),TweenMax.fromTo(l[2],1,{top:"-260px",position:"absolute",left:"160px",rotation:-18},{top:"30px",left:"480px",rotation:-4}),(0,s.swapSlides)(0,0,1)},1500)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.step4Init=void 0;var o=n(0),s=n(1);t.step4Init=function(){(0,o.enabledButton)(1500);var e=document.getElementById("js-rotate-photos"),t=e.querySelectorAll("img"),n=document.getElementById("js-link-next"),i=document.getElementById("js-itunes");n.classList.add("tutorial__link_light"),setTimeout(function(){(0,s.swapSlides)(60,.6,2),TweenMax.fromTo(i,.8,{rotation:160},{rotation:0})},200),TweenMax.to(t[1],1.5,{ease:Power2.easeInOut,x:-200,rotation:15}),TweenMax.to(t[2],1.2,{ease:Power2.easeInOut,x:-450,rotation:20})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.step5Init=void 0;var o=n(0),s=n(1);t.step5Init=function(){var e=document.getElementById("js-media-items"),t=e.querySelectorAll("img, h1, p"),n=document.getElementById("js-autoselect"),i=document.getElementById("js-hiding-text"),a=document.getElementById("js-auto-icons"),l=a.querySelectorAll("img");TweenMax.to(t[0],1,{ease:Power2.easeInOut,opacity:0,width:120,x:40}),TweenMax.to(t[1],1,{ease:Power2.easeInOut,opacity:0,width:100,rotation:-100,x:-40}),TweenMax.to(t[2],1,{ease:Power2.easeInOut,opacity:0}),TweenMax.to(t[3],1,{ease:Power2.easeInOut,opacity:0}),setTimeout(function(){(0,s.swapSlides)(0,0,3),TweenMax.fromTo(n,.5,{opacity:0,zoom:.5},{opacity:1,zoom:1.1}),TweenMax.fromTo(i,1,{opacity:0,marginTop:-25},{opacity:1,marginTop:-15}),[].forEach.call(l,function(e){TweenMax.fromTo(e,2,{opacity:0},{opacity:1})});var e=new TimelineLite({paused:!0});e.set(l[0],{attr:{src:"assets/icons/1-selected.png"}},1),e.set(l[9],{attr:{src:"assets/icons/9-selected.png"}},1),TweenLite.to(e,1.5,{progress:1,ease:Power2.easeInOut})},500),(0,o.enabledButton)(2e3)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.stepClose=function(){var e=document.getElementById("js-autoselect"),t=document.getElementsByClassName("step-5")[0].querySelectorAll("div"),n=document.getElementsByClassName("tutorial")[0];[].forEach.call(t,function(e){TweenMax.to(e,.5,{opacity:0,marginTop:-25})}),TweenMax.to(e,.5,{opacity:0,zoom:.5}),TweenMax.to(n,.5,{opacity:0,zoom:0})}},,function(e,t,n){"use strict";var o=n(2),s=n(3),i=n(4),a=n(5),l=n(6),u=n(7);!function(){var e=document.getElementById("js-tutorial-wrapper"),t=document.getElementsByClassName("tutorial__item"),n=document.getElementById("js-link-next"),c=e.getBoundingClientRect().left,r=t[0].offsetWidth,d=(document.getElementById("js-counter"),t.length),m=d*r;e.style.width=m+"px",(0,o.step1Init)(),n.addEventListener("click",function(){var e=document.getElementsByClassName("step-2")[0],t=document.getElementsByClassName("step-1")[0],n=document.getElementsByClassName("step-3")[0],o=document.getElementsByClassName("step-4")[0],r=document.getElementsByClassName("step-5")[0];t.getBoundingClientRect().left===c&&(0,s.step2Init)(),e.getBoundingClientRect().left===c&&(0,i.step3Init)(),n.getBoundingClientRect().left===c&&(0,a.step4Init)(),o.getBoundingClientRect().left===c-60&&(0,l.step5Init)(),r.getBoundingClientRect().left===c&&(0,u.stepClose)()})}(),document.getElementById("js-close").addEventListener("click",function(){TweenMax.to(document.getElementsByClassName("tutorial")[0],.6,{display:"none"})})}]);