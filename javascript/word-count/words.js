var Words = function(input_text) {
  var word_array = input_text.match(/\b[a-zA-Z0-9]+\b/gi);

  this.count = {};

  for(i = 0; i < word_array.length; i++) {
    var word = word_array[i].toLowerCase();

    if (this.count[word] === undefined) {
      this.count[word] = 1
    }
    else {
      this.count[word] += 1;
    }
  };

};


module.exports = Words;
