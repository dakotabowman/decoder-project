// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
  
    let arr = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      if (alphabet.includes(char)) {
        let currentIndex = alphabet.indexOf(char);
        let newIndex = 0;
        if (encode === true) {
          newIndex = (currentIndex + shift) % 26;
        }
        else {
          newIndex = (currentIndex - shift) % 26;
        }
        if (newIndex < 0) {
          newIndex += 26;
        }
        let newChar = alphabet[newIndex];
        arr.push(newChar);
      } else {
        arr.push(input[i]);
      }
    }
    return arr.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };