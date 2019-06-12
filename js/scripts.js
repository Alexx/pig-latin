const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

function vowelFinder() {

}



function sentenceDistributor(sentence) {
  var finalSentence = [];
  sentence = sentence.split(" ");
  sentence.forEach(function(word) {
    finalSentence.push(translatePigLatinWord(word));
  });
  $(".output").text("Translated to Pig Latin: " + finalSentence.join(" "));
}

function translatePigLatinWord(word) {
  word = word.split("");

  for(var vowel = 0; vowel < vowels.length; vowel++) {
    if(word[0] === vowels[vowel] && word.length === 1) {
      return word.join("") + "ay";
    }
  }

  for(var consonant = 0; consonant < consonants.length; consonant++) {
    if (word[0] === consonants[consonant]) {
      var consonantSlice = word.splice(0, 1);
      consonantSlice = consonantSlice.toString().toUpperCase();
      word.push(consonantSlice);
      return word.join("") + "ay";
    }
  }

  for(var character = 0; character < word.length; character++) {
    for(var vowel = 0; vowel < vowels.length; vowel++) {
      if (word.length > 1 && word[character] === vowels[vowel]) {
        return word.join("") + "Way";
      }
    }
  }

  return word.join("");
};


$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#input1").val();
    sentenceDistributor(userSentence);
  });
});
