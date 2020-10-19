import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");
 
const glassCounter = document.querySelector('.glass-counter--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');

let currentGlassCounter = 0;

buttonAdd.addEventListener('click', () => {
  currentGlassCounter++;
  glassCounter.innerHTML = currentGlassCounter;
})

buttonRemove.addEventListener('click', () =>{
  currentGlassCounter--;
  glassCounter.innerHTML = currentGlassCounter;
})
