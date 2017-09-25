"use strict";function setBodyMargin(){var e=document.querySelector(".navbar.fixed");document.querySelector("body").style.marginTop=e.clientHeight+10+"px"}function toogleFlex(e){"none"===getComputedStyle(e).display?e.style.display="flex":e.style.display=null}!function(){function e(e,t){""!==t.value?e.classList.add("not-empty-input"):e.classList.remove("not-empty-input")}var t=document.querySelectorAll(".form-input"),r=!0,n=!1,o=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done);r=!0)!function(){var t=l.value,r=t.querySelectorAll("input, textarea"),n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0)!function(){var r=i.value;r.addEventListener("change",function(){e(t,r)}),window.addEventListener("load",function(){e(t,r)})}()}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}}()}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}(),function(){var e=document.querySelectorAll(".alert.alert-dismissable"),t=!0,r=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0)!function(){var e=o.value;e.insertAdjacentHTML("beforeend",'<button type="button" class="close">&times;</button>'),e.querySelector(".close").addEventListener("click",function(t){t.preventDefault(),e.className+=" alert-dismissed",setTimeout(function(){e.style.display="none"},300)})}()}catch(e){r=!0,n=e}finally{try{!t&&l.return&&l.return()}finally{if(r)throw n}}}(),function(){var e=document.querySelectorAll(".tabs"),t=!0,r=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0)!function(){var e=o.value,t=e.querySelectorAll(".menu li a"),r=e.querySelector(".menu .active"),n=e.querySelectorAll(".body > div"),l=1,a=!0,i=!1,u=void 0;try{for(var c,d=n[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){c.value.id=e.id+"-tab-"+l++}}catch(e){i=!0,u=e}finally{try{!a&&d.return&&d.return()}finally{if(i)throw u}}l=1;var y=!0,f=!1,s=void 0;try{for(var v,m=t[Symbol.iterator]();!(y=(v=m.next()).done);y=!0)!function(){var t=v.value;t.href="#"+e.id+"-tab-"+l++,t.addEventListener("click",function(r){r.preventDefault();var n=e.querySelector(".menu .active");null!==n&&(n.classList.remove("active"),e.querySelector(".body > .show").classList.remove("show")),t.classList.add("active"),e.querySelector(t.getAttribute("href")).classList.add("show")})}()}catch(e){f=!0,s=e}finally{try{!y&&m.return&&m.return()}finally{if(f)throw s}}if(null!==r){e.querySelector(".body "+r.getAttribute("href")).classList.add("show")}}()}catch(e){r=!0,n=e}finally{try{!t&&l.return&&l.return()}finally{if(r)throw n}}}(),function(){var e=document.querySelectorAll("[data-modal-id]"),t=!0,r=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0)!function(){var e=o.value,t=e.getAttribute("data-modal-id");e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(t).style.display="flex",document.querySelector("body").style.overflow="hidden",setTimeout(function(){document.querySelector(t).classList.add("show")},1)})}()}catch(e){r=!0,n=e}finally{try{!t&&l.return&&l.return()}finally{if(r)throw n}}var a=document.querySelectorAll(".modal"),i=!0,u=!1,c=void 0;try{for(var d,y=a[Symbol.iterator]();!(i=(d=y.next()).done);i=!0)!function(){var e=d.value,t=e.querySelectorAll(".close"),r=!0,n=!1,o=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done);r=!0){l.value.addEventListener("click",function(t){t.preventDefault(),e.classList.remove("show"),document.querySelector("body").style.overflow="auto",setTimeout(function(){e.style.display="none"},300)})}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}()}catch(e){u=!0,c=e}finally{try{!i&&y.return&&y.return()}finally{if(u)throw c}}}(),function(){var e=document.querySelectorAll(".navbar-mobile-menu-button"),t=!0,r=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0)!function(){var e=o.value;e.addEventListener("click",function(t){t.preventDefault(),toogleFlex(document.querySelector(e.getAttribute("data-menu-id")))})}()}catch(e){r=!0,n=e}finally{try{!t&&l.return&&l.return()}finally{if(r)throw n}}setBodyMargin(),window.addEventListener("resize",function(){setBodyMargin()}),window.addEventListener("scroll",function(){null!==document.querySelector(".navbar.fixed")&&(window.scrollY>100?document.querySelector(".navbar.fixed").classList.add("compact"):document.querySelector(".navbar.fixed").classList.remove("compact"))})}(),function(){var e=document.querySelectorAll(".dropdown"),t=!0,r=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0)!function(){var e=o.value;e.querySelector(".dropdown-menu-button").addEventListener("click",function(t){t.preventDefault(),toogleFlex(e.querySelector(".dropdown-menu"))})}()}catch(e){r=!0,n=e}finally{try{!t&&l.return&&l.return()}finally{if(r)throw n}}}();