'use strict';
const toggle = document.querySelector('.toggle-btn');
const input = document.getElementById('toggle');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  setTimeout(function () {
    document.body.classList.add('dark');
    input.checked = true;
  }, 500);
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  setTimeout(function () {
    document.body.classList.remove('dark');
    input.checked = false;
  }, 500);
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

input.addEventListener('click', function (e) {
  console.log(e.currentTarget);
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
