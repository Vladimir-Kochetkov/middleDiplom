(()=>{"use strict";(()=>{const e=document.querySelector(".header-modal"),t=document.querySelector(".overlay"),s=document.getElementsByClassName("btn")[1],c=document.querySelector(".header-modal__close");s.addEventListener("click",(s=>{s.preventDefault(),t.style.display="block",e.style.display="block"})),c.addEventListener("click",(()=>{t.style.display="none",e.style.display="none"}))})(),(()=>{const e=document.querySelectorAll(".service-button"),t=document.querySelector(".services-modal"),s=document.querySelector(".services-modal__close"),c=document.querySelector(".overlay");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),c.style.display="block",t.style.display="block"}))})),s.addEventListener("click",(e=>{e.preventDefault(),c.style.display="none",t.style.display="none"}))})(),(()=>{const e=document.querySelectorAll(".service-block"),t=document.getElementById("services");document.querySelector(".services__arrow--right"),e.forEach((e=>{e.classList.add("d-none")}));let s=0;window.screen.width<576?(e[0].classList.add("service-active"),t.addEventListener("click",(t=>{t.preventDefault(),t.target.matches('[src="images/benefits/right-arrow.svg"]')?(e[s].classList.remove("service-active"),s++,s>=e.length&&(s=0),e[s].classList.add("service-active")):t.target.matches('[src="images/benefits/left-arrow.svg"]')&&(e[s].classList.remove("service-active"),0===s&&(s=e.length),s--,e[s].classList.add("service-active"))}))):window.screen.width>576&&(e[0].classList.add("service-active"),e[1].classList.add("service-active"),t.addEventListener("click",(t=>{t.preventDefault(),t.target.matches('[src="images/benefits/right-arrow.svg"]')?(e[s].classList.remove("service-active"),e[s+1].classList.remove("service-active"),s+=2,s>=e.length&&(s=0),e[s].classList.add("service-active"),e[s+1].classList.add("service-active")):t.target.matches('[src="images/benefits/left-arrow.svg"]')&&(e[s].classList.remove("service-active"),e[s+1].classList.remove("service-active"),s<=0&&(s=e.length),s-=2,e[s].classList.add("service-active"),e[s+1].classList.add("service-active"))})))})(),(()=>{const e=document.getElementById("benefits"),t=document.querySelectorAll(".benefits__item");t.forEach((e=>{e.classList.add("d-none"),e.style.maxWidth="100%"}));let s=0;if(window.screen.width<576)t[0].classList.add("service-active"),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches('[src="images/benefits/right-arrow.svg"]')?(t[s].classList.remove("service-active"),s++,s>=t.length&&(s=0),t[s].classList.add("service-active")):e.target.matches('[src="images/benefits/left-arrow.svg"]')&&(t[s].classList.remove("service-active"),0===s&&(s=t.length),s--,t[s].classList.add("service-active"))}));else if(window.screen.width>576){for(let e=0;e<3;e++)t[e].classList.add("service-active");e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches('[src="images/benefits/right-arrow.svg"]')?(t[s].classList.remove("service-active"),t[s+1].classList.remove("service-active"),t[s+2].classList.remove("service-active"),s+=3,s>=t.length&&(s=0),t[s].classList.add("service-active"),t[s+1].classList.add("service-active"),t[s+2].classList.add("service-active")):e.target.matches('[src="images/benefits/left-arrow.svg"]')&&(t[s].classList.remove("service-active"),t[s+1].classList.remove("service-active"),t[s+2].classList.remove("service-active"),s<=0&&(s=t.length),s-=3,t[s].classList.add("service-active"),t[s+1].classList.add("service-active"),t[s+2].classList.add("service-active"))}))}})(),(e=>{const t=document.querySelectorAll(".count_1>span"),s=document.querySelectorAll(".count_2>span"),c=document.querySelectorAll(".count_3>span"),i=document.querySelectorAll(".count_4>span"),a=document.getElementsByClassName("countdown-text"),r=()=>{let l=(()=>{const t=e=>e<10?`0${e}`:e,s=new Date(e).getTime(),c=(new Date).getTime(),i=(s-c)/1e3;if(s<=c)for(let e=0;e<a.length;e++)a[e].childNodes[0].textContent="Акция закончилась!Ждите новых!!!";let l=t(Math.floor(i/60/60/24)),n=t(Math.floor(i/60/60)%24),o=t(Math.floor(i/60%60)),d=t(Math.floor(i%60));return s<c&&(l=t(0),n=t(0),o=t(0),d=t(0),clearInterval(r)),{timeRemaining:i,days:l,hours:n,minutes:o,seconds:d}})();for(let e=0;e<2;e++)t[e].textContent=l.days,s[e].textContent=l.hours,c[e].textContent=l.minutes,i[e].textContent=l.seconds;l.timeRemaining>0&&setTimeout(r,1e3)};r()})("19 march 2022"),(()=>{const e=document.querySelector(".smooth-scroll__img");let t=window.scrollY;e.classList.add("d-none"),window.addEventListener("scroll",(function(){t=window.scrollY,t>=560?e.classList.remove("d-none"):t<=560&&e.classList.add("d-none")})),e.addEventListener("click",(()=>{window.scroll({left:0,top:0,behavior:"smooth"})}))})()})();