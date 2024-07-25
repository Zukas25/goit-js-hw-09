//generuje losowy kolor w formacie szesnastkowym (hex).
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
// pobiera referencje do przycisków "Start" i "Stop" z dokumentu HTML
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

//jest flagą, która wskazuje, czy zmiana koloru jest aktualnie w toku.
let isChangingColor = false;
//przechowuje identyfikator timeoutu zwrócony przez setTimeout
let timeoutId;
  
//zmienia kolor tła strony na losowy kolor co sekundę
function changeBackgroundColor() {
  if (isChangingColor) {
    document.body.style.backgroundColor = getRandomHexColor();
    timeoutId = setTimeout(changeBackgroundColor, 1000);
  }
}
  
//zmiana koloru jest w toku- dezaktywuje przycisk "Start", a aktywuje przycisk "Stop".
startButton.addEventListener('click', () => {
  if (!isChangingColor) {
    isChangingColor = true;
    changeBackgroundColor();
    startButton.disabled = true;
    stopButton.disabled = false;
  }
});
  
stopButton.addEventListener('click', () => {
  if (isChangingColor) {
    isChangingColor = false;
    clearTimeout(timeoutId);
    startButton.disabled = false;
    stopButton.disabled = true;
  }
});