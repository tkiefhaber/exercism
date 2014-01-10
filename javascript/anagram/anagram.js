var Anagram = function(anagramable_word) {
  this.match = function(possible_anagrams){
    var anagrams = new Array();

    for(i = 0; i < possible_anagrams.length; i++) {
      var possible = possible_anagrams[i];

      var format = function(word) {
        return word.toLowerCase().split('').sort().join(',');
      };

      var not_same_word = function(words) {
        return words[0].toLowerCase() != words[1].toLowerCase() ? true : false;
      };

      var comparable = function(words) {
        return format(words[0]) === format(words[1]) ? true : false
      };

      var anagramable = function(words) {
        return comparable(words) && not_same_word(words) ? true : false;
      };

      var words = [anagramable_word, possible];

      if(anagramable(words)) anagrams.push(possible);
    };
    return anagrams
  };

};

module.exports = Anagram;
