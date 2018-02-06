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

// TODO: Get an array of all words in the text
function getWords(txt) {
     var wordList = [];
     var tempWord = '';
     var hasQuote = false;

     for(i = 0; i < txt.length; i++) {
          if(tempWord.length == 0) {

               // if is letter or number, push character to tempWord
               if(isLetter(txt[i]) || isNumeric(txt[i])) tempWord += txt[i];
               else continue;

          } else {

               // if is letter or number, push character to tempWord
               if(isLetter(txt[i]) || isNumeric(txt[i])) tempWord += txt[i];
               else {
                    if(txt[i] == "\'" && !hasQuote) {
                         tempWord+=txt[i];
                         hasQuote = true;
                    } else {
                         wordList.push(tempWord);
                         tempWord = '';
                         hasQuote = false;
                    }
                    // TODO: numbers with decimal points
               }

          }
     }
     // wordList.push(txt.length);
     return wordList;
}

// TODO: Get total number of characters in the text, including all whitespaces
function nChars(txt) {
     return txt.length;
}

// TODO: Will contain the total number of words in the text
function nWords(txt) {
     return getWords(txt).length;
}

// TODO: Will contain the number of lines in the text. 0 iff text is empty
function nLines(txt) {
     return txt.split("\n").length;
}

// TODO: Will contain the number of lines in the text containing at least one visible character (anything other than space, newline, tab)
function nNonEmptyLines(txt) {
     return 0;
}

// TODO: Will contain the length of the longest line. Computed by counting the number of characters and trailing whitespaces, but excludes the newline character
function maxLineLength(txt) {
     return 0;
}

// TODO: Will contain the average word length in the text. i.e., sum of the length of all words divided by nWords
function averageWordLength(txt) {
     return 0;
}

// TODO: Will contain a list of unique palindromes in the text
function palindromes(txt) {
     return 0;
}

// TODO: Will contain the 10 longest words. In the case of ties, sort alphabetically
function longestWords(txt) {
     return 0;
}

// TODO: Will contain the 10 most frequent words in the text, concatenated with their respective frequencies
function mostFrequentWords(txt) {
     return 0;
}


function getStats(txt) {
     return {
          // TODO: remove allWords
          allWords: getWords(txt),
          nChars: txt.length,
          nWords: nWords(txt),
          nLines: nLines(txt),
          nNonEmptyLines: nNonEmptyLines(txt),
          averageWordLength: averageWordLength(txt),
          maxLineLength: maxLineLength(txt),
          palindromes: palindromes(txt),//["12321", "kayak", "mom
          longestWords: longestWords(txt),//["xxxxxxxxx", "123444444
          mostFrequentWords: mostFrequentWords(txt)//["hello(7)", "world(1)"]
    };
}
