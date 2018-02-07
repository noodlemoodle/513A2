//
// this is just a stub for a function you need to implement
//

//if is letter, push letter, if not case number, case punctuation, cases

function isLetter(c) {
     return (c.toUpperCase() != c.toLowerCase());
}

function isNumeric(c) {
     return (c >= '0' && c <= '9');
}

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

function getUniqueWords(wordList) {
     var uWordList = [];
     for(i = 0; i < wordList.length; i++) {
          if(uWordList.indexOf(wordList[i]) == -1) uWordList.push(wordList[i]);
     }
     return uWordList;
}

function nChars(txt) {
     return txt.length;
}

function nWords(words) {
     return words.length;
}

function nLines(txt) {
     return txt.split("\n").length;
}

function nNonEmptyLines(txt) {
     var lines = txt.split("\n");
     var nonEmptyLines = 0;
     for(i = 0; i < lines.length; i++) {
          if(lines[i].trim().length > 0) nonEmptyLines++;
     }
     return nonEmptyLines;
}

function maxLineLength(txt) {
     var lines = txt.split("\n");
     var maxLength = 0;
     for(i = 0; i < lines.length; i++) {
          if(lines[i].length > maxLength) maxLength = lines[i].length;
     }
     return maxLength;
}

function averageWordLength(words) {
     var allWordsLength = 0;
     for(i = 0; i < words.length; i++) {
          allWordsLength += words[i].length;
     }
     return allWordsLength/words.length;
}

function isPalindrome(s) {
     s = s.toLowerCase();
     return s == s.split("").reverse().join("");

}

function palindromes(words) {
     var palList = [];
     for(i = 0; i < words.length; i++) {
          if(words[i].length > 2 && isPalindrome(words[i]) && palList.indexOf(words[i]) === -1) {
               palList.push(words[i]);
          }
     }
     return palList;
}

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
     for(i = 0; i < longestWords.length && topTen.length < 10; i++) {
               if(longestWords[i].length > longestWords[i+1].length) {
                     buffer.push(longestWords[i]);
                    buffer.sort();
                    var j = 0;
                    while(topTen.length < 10 && j < buffer.length) {
                         topTen.push(buffer[j]);
                         j++;
                    }
                    buffer.splice(0, buffer.length);
               } else {
                    buffer.push(longestWords[i]);
               }
     }
     return topTen;
}

function mostFrequentWords(words) {
     var uWords = getUniqueWords(words);
     var topTen = [];
     var frequencySorted = [];
     var frequencies = [];
     for(i = 0; i < uWords.length; i++) {
          var freq = 0;
          for(i = 0; i < words.length) {
               if(words[i] == uwords[i]) frequencies++;
          }
          frequencies.push(freq);
     }
     var buffer = [];
     for(i = 0; i < frequencies.length; i++) {

     }
     return 0;
}
// function getWordFrequency(wordList, word) {
//      var frequency = 0;
//      for(i = 0; i < wordList.length; i++) {
//           if(wordList[i] == word) frequency ++;
//      }
//      return frequency;
// }
//
// // TODO: Will contain the 10 most frequent words in the text, concatenated with their respective frequencies
// function mostFrequentWords(txt) {
//      var freqWords = [];
//      var words = getWords(txt);
//      for(i = 0; i < words.length; i++) {
//           freqWords.push(getWordFrequency(words,words[i]));
//      }
//      return freqWords;
// }

function getStats(txt) {
     var words = getWords(txt);
     return {
          // TODO: remove allWords
          //uWords: getUniqueWords(words),
          allWords: words,
          nChars: nChars(txt),
          nWords: nWords(words),
          nLines: nLines(txt),
          nNonEmptyLines: nNonEmptyLines(txt),
          maxLineLength: maxLineLength(txt),
          averageWordLength: averageWordLength(words),
          palindromes: palindromes(words),
          longestWords: longestWords(words),
     //     mostFrequentWords: mostFrequentWords(words)
    };
}
