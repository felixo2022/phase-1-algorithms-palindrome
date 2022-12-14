function isPalindrome(word) {
  // Write your algorithm here
  if(word.length < 2) return true


  let firstWord = 0
  let lastWord = word.length - 1

  while(firstWord <= lastWord){
    if(word[firstWord] != word[lastWord]){
      return false
    }
    firstWord++
    lastWord--
  }

    return true
}

/* 
  1. find word with less than 2 letters
  2. return false if lastWord is not firstWord
  3. increment firstWord and decrement lastWord
  4. return true if firstWord matches lastWord
*/

/*
palindrome words are characters that read the same backward as forward hereby, we need to return true if the word is less than 2 letters, i achieve
that by looping through the string using the while loop.  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;