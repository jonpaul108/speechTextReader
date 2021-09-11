const container = document.getElementById('container');
const chooseVoice = document.getElementById('chooseVoice');
const toggleVoice = document.getElementById("toggleText");
const close = document.getElementById('close');
const voiceMenu = document.getElementById('voice');
const userInput = document.getElementById('txtBox');
const readText = document.getElementById('read');

const speechInstance = window.speechSynthesis;
const arr = speechInstance.getVoices();
let voices = speechInstance.getVoices();


const words = [
  {
    text: 'I am angry',
    img: 'img/angry.jpg'
  },
  {
    text: 'let\'s have a juice box.',
    img: 'img/drink.jpg'
  },
  {
    text: 'Is this real pizza?',
    img: 'img/pizza.jpg'
  },
  {
    text: 'You look as good as my grandma.',
    img: 'img/grandma.jpg'
  },
  {
    text: 'You can be happy or really happy!',
    img: 'img/happy.jpg'
  },
  {
    text: 'Where is your home,doggy?',
    img: 'img/home.jpg',
  },
  {
    text: 'That looks like a bad boo boo.',
    img: 'img/hurt.jpg'
  },
  {
    text: 'Outside is where the things are.',
    img: 'img/outside.jpg'
  },
  {
    text: 'Sadness is for movies.',
    img: 'img/sad.jpg'
  },
  {
    text: 'You look like a ghost!',
    img: 'img/ghost.jpg'
  },
  {
    text: 'School is where you do repetitive tasks.',
    img: 'img/school.jpg'
  },
  {
    text: 'Tired from typing in this stuff.',
    img: 'img/tired.jpg'
  },
];

function addSpeechBox() {
  words.forEach(el => {
    const div = document.createElement('div');
    div.classList.add('speech-container');
    div.innerHTML = `
      <img src=${el.img}></img>
      <button class='btn speech-btn'>${el.text}</button>
    `
    container.appendChild(div);
  });
}

function showVoiceChoice() {
  chooseVoice.classList.add('appear');
}

function hideVoiceChoice() {
  chooseVoice.classList.remove('appear');
}

toggleVoice.addEventListener('click', showVoiceChoice);
close.addEventListener("click", hideVoiceChoice);


function sayText(el) {
  const blurb = el.target.innerHTML;
  const currVoice = voiceMenu.value;
  const utterance = new SpeechSynthesisUtterance(blurb);
  for (curr of voices) {
    console.log(curr);
    if (curr.lang === currVoice) {
      utterance.voice = curr;
      speechInstance.speak(utterance);
      break;
    }
  }
}

function voiceBoxClick() {
  const boxes = document.querySelectorAll('.speech-btn');
  boxes.forEach(el => {
    el.addEventListener("click", sayText);
  })
}

function addVoiceOptions() {
  var timer = setInterval(function() {
    voices = speechSynthesis.getVoices();
    if (voices.length !== 0) {
      clearInterval(timer);
      voices.forEach(el => {
        const option = document.createElement('option');
        option.value = el.lang;
        option.innerText = el.lang;
        voiceMenu.appendChild(option);
      })
    }
}, 200);
}



addVoiceOptions();

addSpeechBox();
voiceBoxClick();