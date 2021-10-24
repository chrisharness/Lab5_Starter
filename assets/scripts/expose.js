// expose.js

window.addEventListener('DOMContentLoaded', init);
const hornSelect = document.querySelector('#horn-select');
  hornSelect.addEventListener('change',hornUpdate);
  const volumeSelect = document.querySelector('#volume-controls');
  volumeSelect.addEventListener('change',volumeUpdate);
  const playButton = document.querySelector('button');
  playButton.addEventListener('click',playSound);
  const jsConfetti = new JSConfetti()

function playSound(){
  var audio = expose.getElementsByTagName('audio')[0];
  if(audio.volume != 0) {
  audio.play();
    if(hornSelect.value == 'party-horn'){
    jsConfetti.addConfetti({emojis:['🐵']});
    }
  }
}


function volumeUpdate(){
  // get img, input, and audio elements
  var volumeImg = volumeSelect.getElementsByTagName('img')[0];
  var volumeInput = volumeSelect.getElementsByTagName('input')[0].value;
  var audio = expose.getElementsByTagName('audio')[0];
  // logic based on current volume level
  if(volumeInput == 0 ){
    volumeImg.src = './assets/icons/volume-level-0.svg';
    audio.volume = 0;
  }
  if(volumeInput > 0 && volumeInput < 33){
    volumeImg.src = './assets/icons/volume-level-1.svg';
    audio.volume = volumeInput / 100 ;
  }
  if(volumeInput > 32  && volumeInput < 67){
    volumeImg.src = './assets/icons/volume-level-2.svg';
    audio.volume = volumeInput / 100 ;
  }
  if(volumeInput > 66){
    volumeImg.src = './assets/icons/volume-level-3.svg';
    audio.volume = volumeInput / 100 ;
  }
}
function hornUpdate(){
// update horn image
  var hornImg = expose.getElementsByTagName('img')[0];
  hornImg.src = './assets/images/' + hornSelect.value + '.svg';
 // set horn audio file
  var hornAudio = expose.getElementsByTagName('audio')[0];
  hornAudio.src = './assets/audio/' + hornSelect.value + '.mp3';

}

function init() {
  console.log("hello world")
}