import './styles/main.scss';
import Icon from "../assets/img/birdIcon.svg";
import GithubIcon from "../assets/img/github.svg";
import RsIcon from "../assets/img/rsLogo.svg";

const iconPlace = document.querySelector('.logo img');
iconPlace.src = Icon;

const burgerMenuSwitcher = document.querySelector('.hidden-menu .hide-menu');
const burderMenu = document.querySelector('.hidden-menu .burger-menu');
const gitHubIcon = document.querySelector('.footer-list li:first-child img');
gitHubIcon.src = GithubIcon;
const rsIcon = document.querySelector('.footer-list li:last-child img');
rsIcon.src = RsIcon;

burgerMenuSwitcher.addEventListener('click', () => {
    burderMenu.classList.toggle('show-menu');
    burgerMenuSwitcher.classList.toggle('show-menu');
});