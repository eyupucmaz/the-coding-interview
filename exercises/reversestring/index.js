// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let reversed = '';
//   for (let i = 0; i < str.length; i++) {
//     reversed += str[str.length - 1 - i];
//   }
//   return reversed;
// }

// Solution 2

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 3

// function reverse(str) {
//   let reversed = ''

//   for (character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Solution 4

function reverse(str) {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
