!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){},,function(e,t,o){"use strict";o.r(t);o(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),console.log("HELLO 🚀");var n=document.querySelector(".glass-counter--js"),r=document.querySelector(".button-add--js"),c=document.querySelector(".button-remove--js"),u=(new Date).toISOString().slice(0,10),l=0,d=localStorage.getItem(u);d?l=d:localStorage.setItem(u,0),n.innerHTML=l,r.addEventListener("click",(function(){l++,n.innerHTML=l,localStorage.setItem(u,l)})),c.addEventListener("click",(function(){l>0&&(l--,n.innerHTML=l,localStorage.setItem(u,l))}));var s=!1;document.querySelector(".darkMode").addEventListener("click",(function(){s?(document.documentElement.style.setProperty("--background-color","#3baaff"),document.documentElement.style.setProperty("--buttonAdd","#fff"),document.documentElement.style.setProperty("--buttonRemovecolor","white"),document.documentElement.style.setProperty("--button-Hover","rgb(219, 240, 255)"),document.documentElement.style.setProperty("--removeColor","#fff"),document.documentElement.style.setProperty("--header","#fff"),s=!1):(document.documentElement.style.setProperty("--background-color","#333333"),document.documentElement.style.setProperty("--buttonAdd","#222"),document.documentElement.style.setProperty("--buttonRemovecolor","#555"),document.documentElement.style.setProperty("--button-Hover","#555"),document.documentElement.style.setProperty("--removeColor","#666"),document.documentElement.style.setProperty("--header","#555"),s=!0)}))}]);