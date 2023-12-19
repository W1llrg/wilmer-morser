const morse_alphabet = require('./morse_alphabet.js');

/**
 * logic: '/' is space, ' ' is to separate letters
 */
function unmorse(morse) {
    let text = '';
    let words = morse.split(' / ');

    for (let word of words) {
        let chars = word.split(' ');
        for (let char of chars) {
            text += Object.keys(morse_alphabet).find(key => morse_alphabet[key] === char);
        }
        text += ' ';
    }

    return text;
}

function morse(text) {
    console.log(`input: ${text}`);
    let morse = '';
    let words = text.split(' ');

    for (let word of words) {
        for (let letter of word) {
            letter = letter.toUpperCase();
            morse += morse_alphabet[letter] + ' ';
        }
        morse += '/ ';
    }
    console.log(`output: ${morse}`)

    return morse;
}

module.exports = { unmorse, morse };