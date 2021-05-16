import cards from './menu.json';
import foodCardTpl from './templates/food-card.hbs';
import './styles.css';

const refs = {
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__toggle'),
};

const galleryMarkup = foodCardTpl(cards);
refs.menu.insertAdjacentHTML('beforeend', galleryMarkup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', saveData);

function setClassList(evt) {
  evt.preventDefault();
  
  if (refs.switch.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function saveData(evt) {
  
  if (refs.switch.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
