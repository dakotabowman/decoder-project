// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    const dictionary = [
      { letter: "a", position: "11" }, { letter: "b", position: "21" }, { letter: "c", position: "31" }, { letter: "d", position: "41" }, { letter: "e", position: "51" },
      { letter: "f", position: "12" }, { letter: "g", position: "22" }, { letter: "h", position: "32" }, { letter: "i", position: "42" }, { letter: "j", position: "42" },
      { letter: "k", position: "52" }, { letter: "l", position: "13" }, { letter: "m", position: "23" }, { letter: "n", position: "33" }, { letter: "o", position: "43" },
      { letter: "p", position: "53" }, { letter: "q", position: "14" }, { letter: "r", position: "24" }, { letter: "s", position: "34" }, { letter: "t", position: "44" },
      { letter: "u", position: "54" }, { letter: "v", position: "15" }, { letter: "w", position: "25" }, { letter: "x", position: "35" }, { letter: "y", position: "45" },
      { letter: "z", position: "55" },
    ];
  
    const letterToPosition = {};
    const positionToLetter = {};
  
    dictionary.forEach(({ letter, position }) => {
      letterToPosition[letter] = position;
      positionToLetter[position] = letter;
    });
  
    input = input.toLowerCase();
    let result = '';
  
    if (encode) {
      for (let char of input) {
        if (char in letterToPosition) {
          result += letterToPosition[char];
        } else if (char === ' ') {
          result += ' ';
        }
      }
    } else {
      let i = 0;
      while (i < input.length) {
        if (input[i] === ' ') {
          result += ' ';
          i++;
        } else {
          let pair = input.slice(i, i + 2);
          if (pair === '42') {
            result += '(i/j)';
            i += 2;
          } else if (pair in positionToLetter) {
            result += positionToLetter[pair];
            i += 2;
          } else {
            return false;
          }
        }
      }
    }
    return result;
  }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
