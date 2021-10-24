// explore.js

window.addEventListener('DOMContentLoaded', init);
const voiceSelect = document.querySelector('select');
var synth = window.speechSynthesis;
var voices = [];

setTimeout(() => {
  voices = synth.getVoices();
  populateVoiceList();
},50);

function populateVoiceList(){

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
var currImg = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click',onClick);

function onClick(){
  var currVoice = voiceSelect.value;
  var sayThis = new SpeechSynthesisUtterance(document.querySelector('textarea').value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      sayThis.voice = voices[i];
    }
}
  synth.speak(sayThis);
  currImg.src = '/assets/images/smiling-open.png';
  sayThis.addEventListener('end',() => {
    currImg.src = '/assets/images/smiling.png';
  });
}



function init(){
 
}
