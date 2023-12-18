const morse_alphabet = require('./morse_alphabet.js');

/**
 * logic: '/' is space, ' ' is to separate letters
 */
function unmorse(text) {
    let morse = '';
    let words = text.split('/');

    for (let word of words) {
        let letters = word.split(' ');
        for (let letter of letters) {
            letter = letter.toUpperCase();
            morse += Object.keys(morse_alphabet).find(key => morse_alphabet[key] === letter);
        }
        morse += ' ';
    }

    return morse;
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