const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

function translatePigLatin(sentence) {
  sentence = sentence.split("");
  for(var vowel = 0; vowel < vowels.length; vowel++) {
    if(sentence[0] === vowels[vowel] && sentence.length === 1) {
      return sentence.join("") + "ay";
    }
  }
  for(var consonant = 0; consonant < consonants.length; consonant++) {
    if (sentence[0] === consonants[consonant]) {
      var consonantSlice = sentence.splice(0, 1);
      consonantSlice = consonantSlice.toString().toUpperCase();
      sentence.push(consonantSlice);
      return sentence.join("") + "ay";
    }
  }

  for(var character = 0; character < sentence.length; character++) {
    for(var vowel = 0; vowel < vowels.length; vowel++) {
      if (sentence.length > 1 && sentence[character] === vowels[vowel]) {
        return sentence.join("") + "Way";
      }
    }
  }
  return sentence.join("");
};


$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#input1").val();
    console.log(translatePigLatin(userSentence));
  });
});
