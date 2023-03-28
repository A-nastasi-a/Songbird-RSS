import './styles/quiz.scss';
import Icon from "../assets/img/birdIcon.svg";
import GithubIcon from "../assets/img/github.svg";
import RsIcon from "../assets/img/rsLogo.svg";
import hiddenBird from "../assets/img/bird-hidden.jpg";
import birdsData from "./birdsdata";
import WinSound from "../assets/sounds/win.mp3";
import LostSound from "../assets/sounds/lost.mp3";

const birdPlace = document.querySelector('.current-question .bird img');

const iconPlace = document.querySelector('.logo img');
iconPlace.src = Icon;

const burgerMenuSwitcher = document.querySelector('.hidden-menu .hide-menu');
const burderMenu = document.querySelector('.hidden-menu .burger-menu');
const gitHubIcon = document.querySelector('.footer-list li:first-child img');
gitHubIcon.src = GithubIcon;
const rsIcon = document.querySelector('.footer-list li:last-child img');
rsIcon.src = RsIcon;

const questionTypeList = document.querySelectorAll('.question-list .questions li');
const questionsList = document.querySelectorAll('.answers-and-info .answer-list li');
const questionSoundPlayer = document.querySelector('.current-question .player-and-name .player audio');

const secretBirdName = document.querySelector('.current-question .player-and-name .name');

const NextQuestion = document.querySelector('main .next-question');

const infoBirdPic = document.querySelector('.answers-and-info .about-and-info .picture img');
const infoBirdName = document.querySelector('.answers-and-info .about-and-info .info p:first-child');
const infoBirdType = document.querySelector('.answers-and-info .about-and-info .info p:last-of-type');
const infoBirdDesc = document.querySelector('.answers-and-info .about-and-info .about');
const infoBirdAudio = document.querySelector('.answers-and-info .place-to-audio audio');

const score = document.querySelector('.question-list .score');

const mobileInfoButton = document.querySelector('.answers-and-info .info .get-info');
const mobileInfo = document.querySelector('.answers-and-info .hidden-info');

const audio = new Audio();


let audioFlag = true;
let currentMark = 0;
let ball = 5;
let counter = 0;
let secretBird;

burgerMenuSwitcher.addEventListener('click', () => {
    burderMenu.classList.toggle('show-menu');
    burgerMenuSwitcher.classList.toggle('show-menu');
});

function PlaySound(type) {
    if (type == WinSound) {
        questionSoundPlayer.pause();
    }
    audio.src = type;
    audio.autoplay = true;
}


function checkWin() {
    console.log(audioFlag);
    let choosenItem = event.target.querySelector('.indicator');
    if (event.target.innerText == secretBird.name) {
        choosenItem.style.backgroundColor = '#54f542';
        PlaySound(WinSound);
        audioFlag = false;
        secretBirdName.innerText = secretBird.name;
        birdPlace.src = secretBird.image;
        NextQuestion.disabled = false;
        NextQuestion.classList.add('works');
        currentMark += ball;
        ball = 5;
        score.innerText = `Score: ${currentMark}`;
        if (counter == 5) {
            localStorage.setItem('currentScore', currentMark)
        }
    } else {
        if (audioFlag) {
            audio.pause();

            choosenItem.style.backgroundColor = 'red';
            PlaySound(LostSound);
        }

        if (ball > 0) {
            ball -= 1;
        }
    }

};

function showInformation(bird) {
    infoBirdPic.classList.remove('nothing');
    infoBirdAudio.classList.remove('nothing');
    document.querySelector('.answers-and-info .about-and-info hr:first-of-type').classList.remove('nothing');
    document.querySelector('.answers-and-info .about-and-info hr:last-of-type').classList.remove('nothing');
    infoBirdPic.src = bird.image;
    infoBirdName.innerText = bird.name;
    infoBirdType.innerText = bird.species;
    infoBirdDesc.innerText = bird.description;
    infoBirdAudio.src = bird.audio;
    mobileInfo.querySelector('.about-bird').innerText = bird.description;
    mobileInfo.querySelector('.bird-voice').innerHTML = `<audio class="audio" src="${bird.audio
    }" alt="Bird sound" controls>
    </audio>`;
}

function choseRandomBird(birdList) {
    let num = Math.floor(Math.random() * 6);
    secretBird = birdList[num];
    questionSoundPlayer.src = secretBird.audio;
    let hiddenWord = '';
    for (let i = 0; i < 6; i++) {
        hiddenWord += '*';
    }
    secretBirdName.innerText = hiddenWord;
};

function createQuestion() {
    audioFlag = true;
    birdPlace.src = hiddenBird;
    infoBirdPic.classList.add('nothing');
    infoBirdAudio.classList.add('nothing');
    document.querySelector('.answers-and-info .about-and-info hr:first-of-type').classList.add('nothing');
    document.querySelector('.answers-and-info .about-and-info hr:last-of-type').classList.add('nothing');
    infoBirdName.innerText = "";
    infoBirdType.innerText = "";
    infoBirdDesc.innerText = "Послушайте плеер. Выберите птицу из списка";
    questionTypeList[counter - 1].classList.remove('active-type');
    questionTypeList[counter].classList.add('active-type');
    for (let i = 0; i < 6; i++) {
        questionsList[i].innerHTML = `<div class="indicator"></div>
        ${birdsData[counter][i].name}`;
    };
    choseRandomBird(birdsData[counter]);
    console.log(secretBird.name);
    NextQuestion.disabled = true;
    NextQuestion.classList.remove('works');
};

NextQuestion.addEventListener('click', () => {
    counter++;
    if (counter == 6) {
        window.location.href = "../pages/results.html";
    }
    createQuestion(counter)
});

for (let i = 0; i < 6; i++) {
    questionsList[i].addEventListener('click', () => {
        checkWin();
        showInformation(birdsData[counter][i]);
    })
}

window.addEventListener('load', () => {
    audioFlag = true;
    ball = 5;
    currentMark = 0;
    score.innerText = `Score: ${currentMark}`;
    birdPlace.src = hiddenBird;
    infoBirdPic.classList.add('nothing');
    infoBirdAudio.classList.add('nothing');
    document.querySelector('.answers-and-info .about-and-info hr:first-of-type').classList.add('nothing');
    document.querySelector('.answers-and-info .about-and-info hr:last-of-type').classList.add('nothing');
    counter = 0;
    questionTypeList[5].classList.remove('active-type');
    questionTypeList[counter].classList.add('active-type');
    for (let i = 0; i < 6; i++) {
        questionsList[i].innerHTML = `<div class="indicator"></div>
        ${birdsData[counter][i].name}`;
    }
    choseRandomBird(birdsData[counter]);
    console.log(secretBird.name);
});

mobileInfoButton.addEventListener('click', () => {
    mobileInfo.classList.add('show-info');

});

mobileInfo.querySelector('.close-info').addEventListener('click', () => {
    mobileInfo.classList.remove('show-info');
});