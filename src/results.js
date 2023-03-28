import './styles/results.scss';
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

const scorePlace = document.querySelector('main .question-list .score');
const textForUser = document.querySelector('main .result-window .winner-text');
const restartButton = document.querySelector('main .result-window .came-back');

let Score = 0;


restartButton.addEventListener('click', () => {
    window.location.href = "../pages/quiz.html";
})

function getLocalStorage() {
    if (localStorage.getItem('currentScore')) {
        Score = localStorage.getItem('currentScore');
    }
    scorePlace.innerText = `Score: ${Score}`;
    if (Score < 30) {
        textForUser.innerText = `Вы прошли викторину и набрали ${Score} из 30 возможных баллов`;
        restartButton.display = 'flex';
    } else {
        textForUser.innerText = `Вы идеально справились с викториной и набрали максимум - 30 баллов`;
        restartButton.classList.add('hidden-items');
        document.querySelector('main .result-window hr').classList.add('hidden-items');
    }
}

window.addEventListener('load', getLocalStorage);

burgerMenuSwitcher.addEventListener('click', () => {
    burderMenu.classList.toggle('show-menu');
    burgerMenuSwitcher.classList.toggle('show-menu');
});