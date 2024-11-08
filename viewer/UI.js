export class UI {

    static htmlChange(tag, content) {
        document.querySelector(tag).innerText = content;
        // responsiveVoice.speak(content, 'Brazilian Portuguese Female', {rate: 1.2});
    }

    static clearField() {
        document.querySelector('input').value = '';
    }

    static kickButtonEnable() {
        document.getElementById('kick').removeAttribute('disabled');
    }

    static kickButtonDisable() {
        document.getElementById('kick').setAttribute('disabled', '');
    }

    static restartButtonEnable() {
        document.getElementById('restart').removeAttribute('disabled');
    }

    static restartButtonDisable() {
        document.getElementById('restart').setAttribute('disabled', '');
    }

    static gameStartupText(min, max) {
        this.htmlChange('h1', 'Jogo do número secreto');
        this.htmlChange('p', `Escolha um número entre ${min} e ${max}`);
    }

}