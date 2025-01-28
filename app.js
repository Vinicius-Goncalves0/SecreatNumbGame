import { Game } from './controller/Game.js';
import { UI } from './viewer/UI.js';


// Uso das classes
const minNumbS = 1;
const maxNumbS = 10;
const game = new Game(minNumbS, maxNumbS);
UI.gameStartupText(minNumbS, maxNumbS);

// Eventos dos botões
document.getElementById('kick').addEventListener('click', () => {
    let kick = document.querySelector('input').value;
    game.kickCheck(kick);
 });

document.getElementById('restart').addEventListener('click', () => {
    game.restartGame();
});