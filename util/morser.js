const morse_alphabet = require('./morse_alphabet.js');

/**
 * logic: '/' is space, ' ' is to separate letters
 */
function unmorse(morse) {
    let text = '';
    let words = morse.split('/');

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

function morse(text) {
    console.log(`input: ${text}`);
    let morse = '';
    let words = text.split(' ');
    let hasUnknown = false;

    for (let word of words) {
        for (let letter of word) {
            letter = letter.toUpperCase();
            let char = morse_alphabet[letter]; 
            if (char !== undefined) {
                morse += char + ' ';
            } else {
                morse += '¿';
                hasUnknown = true;
            }
        }
        morse += '/ ';
    }
    console.log(`output: ${morse}`)

    return [morse, hasUnknown];
}

function morseToString() {
    let str = '';
    for (let key in morse_alphabet) {
        str += `${key}: ${morse_alphabet[key]}\n`;
    }
    return str;
}

module.exports = { unmorse, morse, morseToString };