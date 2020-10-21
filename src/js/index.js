import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");
 
//Counter

const glassCounter = document.querySelector('.glass-counter--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const key = new Date().toISOString().slice(0, 10)


let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if(localStorageValue){
  currentGlassCounter = localStorageValue;
}else{
  localStorage.setItem(key, 0);
}


glassCounter.innerHTML = currentGlassCounter;

buttonAdd.addEventListener('click', () => {
  currentGlassCounter++;
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});

buttonRemove.addEventListener('click', () =>{
  if (currentGlassCounter > 0){
  currentGlassCounter--;
  
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
  }
});

// DarkMode

let isDark=false;

const switchMode = document.querySelector('.darkMode');

switchMode.addEventListener('click', () => {
  if(isDark){
    document.documentElement.style.setProperty('--background-color', '#3baaff');
    document.documentElement.style.setProperty('--buttonAdd','#fff');
    document.documentElement.style.setProperty('--buttonRemovecolor','white');
    document.documentElement.style.setProperty('--button-Hover','rgb(219, 240, 255)');
    document.documentElement.style.setProperty('--removeColor','#fff');
    document.documentElement.style.setProperty('--header','#fff');
    isDark = false;
  }else{
    document.documentElement.style.setProperty('--background-color','#333333');
    document.documentElement.style.setProperty('--buttonAdd','#222');
    document.documentElement.style.setProperty('--buttonRemovecolor','#555');
    document.documentElement.style.setProperty('--button-Hover','#555');
    document.documentElement.style.setProperty('--removeColor','#666');
    document.documentElement.style.setProperty('--header','#555');
    isDark = true;
  }
})


