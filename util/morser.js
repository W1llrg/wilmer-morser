const morse_alphabet = require('./morse_alphabet.js');

class Morser {
    constructor() {
        // such morspty
    }

    unmorse(morse, normalize=true) {
        
        if (normalize) morse = this.normalizeMorse(morse);

        let text = '';
        let words = morse.split(' / ');

        for (let word of words) {
            let chars = word.split(' ');
            for (let char of chars) {
                let letter = Object.keys(morse_alphabet).find(key => morse_alphabet[key] === char);
                if (letter === undefined) return -1;
                text += letter;
            }
            text += ' ';
        }
        console.log(`output: ${text}`)

        return text;
    }

    morse(text) {
        console.log(`input: ${text}`);
        let morseCode = '';
        let words = text.split(' ');
        let hasUnknown = false;

        for (let word of words) {
            for (let letter of word) {
                letter = letter.toUpperCase();
                let char = morse_alphabet[letter];
                if (char !== undefined) {
                    morseCode += char + ' ';
                } else {
                    morseCode += '¿';
                    hasUnknown = true;
                }
            }
            if (words.length > 1) morseCode += '/ ';
        }
        console.log(`output: ${morseCode}`)

        return [morseCode, hasUnknown];
    }

    normalizeMorse(morse) {
        let normalized = '';
        const acpt = ['_', '·'];
        const rep = ['-', '.'];

        for (let char of morse) {
            if (acpt.includes(char)) {
                normalized += rep[acpt.indexOf(char)];
            } else {
                normalized += char;
            }
        }
        return normalized;
    }

    morseToString() {
        let str = '';
        for (let key in morse_alphabet) {
            str += `${key}: ${morse_alphabet[key]}\n`;
        }
        return str;
    }
}

module.exports = new Morser();
