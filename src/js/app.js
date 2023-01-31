import Canvas from './modules/canvas.js';
import gsap from 'gsap';

const tl = gsap.timeline();
Canvas(tl);


let switcher = document.querySelector('#switch');
let openHelp = document.querySelector('.openHelp');
let closeHelp = document.querySelector('.closeHelp');
let overlay = document.querySelector('.overlay');
let partians = document.querySelector('.partians');


openHelp.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});
closeHelp.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

switcher.addEventListener('change', () => {
  if (switcher.checked) {
    document.querySelector('canvas').style.display = 'none';
    document.querySelector('.partians').style.display  = 'block';
    document.querySelector('.method__css').classList.add('active');
    document.querySelector('.method__js').classList.remove('active');
    tl.to('.wrapper', {backgroundColor: '#b5fe8bc9', duration: 1});
  } else {
    document.querySelector('canvas').style.display = 'block';
    document.querySelector('.partians').style.display = 'none';
    document.querySelector('.method__js').classList.add('active');
    document.querySelector('.method__css').classList.remove('active');
    tl.to('.wrapper', {backgroundColor: '#CFFFF7', duration: 1});
  }
});

partians.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('is-css');
  if (document.querySelector('body').classList.contains('is-css')) {
    tl.to('.wrapper', {backgroundColor: '#fff', duration: 1});
  } else {
    tl.to('.wrapper', {backgroundColor: '#b5fe8bc9', duration: 1});
  }
  
});