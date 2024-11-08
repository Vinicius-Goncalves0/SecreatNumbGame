import { UI } from '../viewer/UI.js';

export class Game {

    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.numbDrawn = [];
        this.secretNumber = this.getRandomNumber();
        this.tryCounts = 0;
    }

    getRandomNumber() {        
        let chosenNumb = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        let listSize = this.numbDrawn.length;


        if (listSize == this.max) {
            this.numbDrawn = [];
        }
    
        if (this.numbDrawn.includes(chosenNumb)) {
            return this.getRandomNumber();
        } else {
            this.numbDrawn.push(chosenNumb);
            console.log(this.numbDrawn);
            return chosenNumb;
        }
    }

    restartGame() {
        UI.clearField();
        UI.kickButtonEnable();
        UI.restartButtonDisable();
        UI.gameStartupText(this.min, this.max);
        this.secretNumber = this.getRandomNumber();
        this.tryCounts = 0;
    }

    kickCheck(kick) {
        this.tryCounts++;

        if (kick == this.secretNumber) {
            let tryWord = this.tryCounts > 1 ? 'tentativas' : 'tentativa';
            UI.htmlChange('h1', 'Acertou!');
            UI.htmlChange('p', `Você descobriu o número secreto, com ${this.tryCounts} ${tryWord}.`);
            UI.kickButtonDisable();
            UI.restartButtonEnable();
        } else {
            UI.clearField();
            UI.htmlChange('h1', 'Não foi dessa vez :(');
            UI.htmlChange('p', kick > this.secretNumber ? `O número secreto é menor que ${kick}` : `O número secreto é maior que ${kick}.`);
        }
    }

}