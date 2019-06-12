const vowels = ["a", "e", "i", "o", "u"];

function isAVowel(letter) {
  var trueFalse;
  for(var vowel = 0; vowel < vowels.length; vowel++) {
    if(letter === vowels[vowel]) {
      return true;
    }
  }
  return false;
}

function pigLatin(sentence) {
  var finalSentence = [];
  sentence = sentence.split(" ");
  sentence.forEach(function(word) {
    finalSentence.push(translatePigLatinWord(word));
  });
  $(".output").text("Translated to Pig Latin: " + finalSentence.join(" "));
}

function indexCounter(word) {
  var indexCount = 0;
  for(var letter = 0; letter < word.length; letter++) {
    if(! isAVowel(word[letter])) {
      indexCount++;
    } else {
      return indexCount;
    }
  }
}

function translatePigLatinWord(word) {
  word = word.split("");
  var wordIndex = indexCounter(word);



  if(isAVowel(word[0]) && word.length === 1) {
    return word.join("") + "ay";
  }

  if(indexCounter(word) > 1) {
    var multiSlice = word.splice(0, indexCounter(word));
    multiSlice = multiSlice.join("");
    word.push(multiSlice.toString());
    return word.join("") + "ay";
  }

  if (indexCounter(word) === 1 && ! isAVowel(word[0])) {
    var consonantSlice = word.splice(0, 1);
    word.push(consonantSlice.toString().toUpperCase());
    return word.join("") + "ay";
  }

  for(var character = 0; character < word.length; character++) {
      if (word.length > 1 && isAVowel(word[character])) {
          return word.join("") + "Way";
        }
      }
      return word.join("");
    };


    $(document).ready(function(){
      $(".form").submit(function(event) {
        event.preventDefault();
        var userSentence = $("#input1").val();
        pigLatin(userSentence);
      });
    });
