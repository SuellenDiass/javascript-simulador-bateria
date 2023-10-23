/* inserindo audios nas teclas */

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];/* as teclas só tocarão se tiver dentro desse vetor*/
let audio = new Audio("src/tunes/a.wav");

/* carregando o audio para memória javaScript */
const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();
/* adicionando efeito teclado */
  const clickedKey = document.querySelector(`[data-key="${key}"]`);/* interpolaçao de strings */
  clickedKey.classList.add("active"); 
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});
/* capturando a tecla que o usuario está digitando */
document.addEventListener("keydown", (e) => {
    /* somente as teclas mapeadas serão tocadas */
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));/*toggle adiciona e remove uma classe  */
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);