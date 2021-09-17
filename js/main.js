let sounds = [];
let rec = false;

function transition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
function audio(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  let sound = {
    audio,
    key,
  };
  if (rec == true) {
    record(sound);
  }
  play(sound);
}

function play({ audio, key }) {
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function record(sound) {
  sounds.push(sound);
}
function playRecord() {
  sounds.forEach(sound => setTimeout(function(){
    play(sound);
    console.log(sound);
  }, 3000));

  // for (let i = 0; i < sounds.length; i++) {
  //   play(sounds[i]);
  // }
}

function btnRec() {
  rec = true;
}
function btnStopRec() {
  rec;
}

let key = Array.from(document.querySelectorAll(".key"));
key.forEach((key) => key.addEventListener("transitionend", transition));
window.addEventListener("keydown", audio);
