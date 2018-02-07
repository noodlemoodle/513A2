//
// SENG513 Assignment 2
// Qiyue Zhang
// 10131658
// Tutorial #6
//

// Checks if a character is a letter
function isLetter(c) {
     return (c.toUpperCase() != c.toLowerCase());
}

// Checks if a character is numeric
function isNumeric(c) {
     return (c >= '0' && c <= '9');
}

// Returns a list of all strings classified as a word in text
function getWords(txt) {
     var wordList = [];
     var tempWord = '';
     for(i = 0; i < txt.length; i++) {
          if(tempWord.length == 0) {
               if(isLetter(txt[i]) || isNumeric(txt[i])) tempWord += txt[i];
               else continue;

          } else {
               if(isLetter(txt[i]) || isNumeric(txt[i])) tempWord += txt[i];
               else {
                    wordList.push(tempWord.toLowerCase());
                    tempWord = '';
               }
          }
          if(i == txt.length - 1 && tempWord.length > 0) wordList.push(tempWord);
     }
     return wordList;
}

// Returns an array of words with duplicate items removed
function getUniqueWords(wordList) {
     var uWordList = [];
     for(i = 0; i < wordList.length; i++) {
          if(uWordList.indexOf(wordList[i]) == -1) uWordList.push(wordList[i]);
     }
     return uWordList;
}

// Returns the total number of characters in text, including whitespaces
function nChars(txt) {
     return txt.length;
}

// Returns the total number of words in text
function nWords(words) {
     return words.length;
}

// Returns the total number of lines in text
function nLines(txt) {
     if(txt.trim().length === 0 && txt.split("\n").length === 1) return 0;
     return txt.split("\n").length;
}

// Returns the number of lines containing atleast one visible character
function nNonEmptyLines(txt) {
     var lines = txt.split("\n");
     var nonEmptyLines = 0;
     for(i = 0; i < lines.length; i++) {
          if(lines[i].trim().length > 0) nonEmptyLines++;
     }
     return nonEmptyLines;
}

// Returns the length of the longest line
function maxLineLength(txt) {
     var lines = txt.split("\n");
     var maxLength = 0;
     for(i = 0; i < lines.length; i++) {
          if(lines[i].length > maxLength) maxLength = lines[i].length;
     }
     return maxLength;
}

// Returns the average word length in text
function averageWordLength(words) {
     if(words.length === 0) return 0;
     var allWordsLength = 0;
     for(i = 0; i < words.length; i++) {
          allWordsLength += words[i].length;
     }
     return allWordsLength/words.length;
}

// Check if a string is a palindrome
function isPalindrome(s) {
     s = s.toLowerCase();
     return s == s.split("").reverse().join("");

}

// Returns a list of all palindromes in text
function palindromes(words) {
     var palList = [];
     for(i = 0; i < words.length; i++) {
          if(words[i].length > 2 && isPalindrome(words[i]) && palList.indexOf(words[i]) === -1) {
               palList.push(words[i]);
          }
     }
     return palList;
}

// Returns the top ten longest words in text, sorted by length, then alphabetically/numerically
function longestWords(words) {
     var uWords = getUniqueWords(words);
     var topTen = [];
     var longestWords = [];
     while(uWords.length > 0) {
          var longest = '.';
          for(i = 0; i < uWords.length; i++) {
               if(uWords[i].length > longest.trim().length) longest = uWords[i];
          }
          longestWords.push(longest);
          uWords.splice(uWords.indexOf(longest), 1);
     }
     var buffer = [];
     var lastLen = 99;
     for(i = 0; i < longestWords.length && topTen.length < 10; i++) {
          if(longestWords[i].length < lastLen) {
               buffer.sort();
               for(j = 0; topTen.length < 10 && j < buffer.length; j++) {
                    topTen.push(buffer[j]);
               }
               buffer.splice(0, buffer.length);
               buffer.push(longestWords[i]);
               lastLen = longestWords[i].length;
          } else {
               buffer.push(longestWords[i]);
          }
     }
     for(j = 0; topTen.length < 10 && j < buffer.length; j++) {
          topTen.push(buffer[j]);
     }
     return topTen;
}

// Returns the top ten frequently occuring words in text, sorted by frequency, then alphabetically/numerically
function mostFrequentWords(words) {
     var uWords = getUniqueWords(words);
     uWords.sort();
     var mostFreq = [];
     var frequencies = [];
     for(i = 0; i < uWords.length; i++) {
          var wordFreq = 0;
          for(j = 0; j < words.length; j++) {
               if(uWords[i] === words[j]) {
                    wordFreq++;
               }
          }
          if(wordFreq > 0){
               frequencies.push(wordFreq);
          }
     }
     while(mostFreq.length < 10 && mostFreq.length < frequencies.length) {
          var highestFreq = -1;
          var freqIndex = -1;
          for(j = 0; j < frequencies.length; j++) {
               if(frequencies[j] > highestFreq) {
                    highestFreq = frequencies[j];
                    freqIndex = j;
               }
          }
          mostFreq.push(uWords[freqIndex]+"("+highestFreq+")");
          frequencies[freqIndex] = -1;
          freqIndex = -1;
          highestFreq = -1;
     }
     return mostFreq;
}

function getStats(txt) {
     var words = getWords(txt);
     return {
          nChars: nChars(txt),
          nWords: nWords(words),
          nLines: nLines(txt),
          nNonEmptyLines: nNonEmptyLines(txt),
          maxLineLength: maxLineLength(txt),
          averageWordLength: averageWordLength(words),
          palindromes: palindromes(words),
          longestWords: longestWords(words),
          mostFrequentWords: mostFrequentWords(words)
    };

}
