'use strict';
// const toggleInfo = document
//   .getElementById('mobile-menu')
//   .classList.remove('hidden');
const toggleInfo = document.getElementById('mobile-menu');
const closeHamburger = document
  .getElementById('close-toggle')
  .addEventListener('click', () => {
    toggleInfo.classList.toggle('hidden');
    toggleInfo.classList.toggle('flex');
  });

const toggleBtn = document
  .getElementById('hamburger-menu')
  .addEventListener('click', () => {
    toggleInfo.classList.toggle('hidden');
    toggleInfo.classList.toggle('flex');
    toggleBtn.classList.toggle('toggle-btn');
    closeHamburger();
  });

const link = document.getElementById('link-1').addEventListener('click', () => {
  toggleInfo.classList.toggle('hidden');
  toggleInfo.classList.toggle('flex');
});

const link2 = document
  .getElementById('link-2')
  .addEventListener('click', () => {
    toggleInfo.classList.toggle('hidden');
    toggleInfo.classList.toggle('flex');
  });

const link3 = document
  .getElementById('link-3')
  .addEventListener('click', () => {
    toggleInfo.classList.toggle('hidden');
    toggleInfo.classList.toggle('flex');
  });

const link4 = document
  .getElementById('link-4')
  .addEventListener('click', () => {
    toggleInfo.classList.toggle('hidden');
    toggleInfo.classList.toggle('flex');
  });

const link5 = document
  .getElementById('link-5')
  .addEventListener('click', () => {
    toggleInfo.classList.toggle('hidden');
    toggleInfo.classList.toggle('flex');
  });
