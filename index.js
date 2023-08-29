function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  psuedocode
  isPalindrome(word)
    reversedWord = word.reverse.join
    rtrn word === reversedWord
*/

/*
  explanation
  Original word is passed into isPalindrome function
  word is then reversed into a new string using .split.reverse.join
  original string is compared to new reversed string
  output true if equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
