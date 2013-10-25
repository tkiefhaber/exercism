var Bob = function(input){ 
  this.hey = function(input){
    if (input == input.toUpperCase() && input.match(/[a-zA-Z]/))
      return 'Woah, chill out!'
    else if (input.match(/\?$/g))
      return 'Sure.'
    else if (input.trim() == '')
      return 'Fine. Be that way!'
    else
      return 'Whatever.'
  };
};

//var Bob = function(input){
//  var responses = [
//    {
//      matches: function(i){ i == i.toUpperCase() && i.match(/[a-zA-Z]/);},
//      response: "Woah, chill out!"
//    },
//    {
//      matches: function(i){i.match(/\?$/g);},
//      response: "Sure."
//    },
//    {
//      matches: function(i){i.trim() === '';},
//      response: "Fine. Be that way!"
//    }
//  ];
//  var default_response = "Whatever.";

//  this.hey = function(input) {
//    var i, reaction, returned_reaction;
//    for(i=0; i<responses.length; i++) {
//      reaction = responses[i];
//      if (reaction.matches(input))
//        return reaction.response; break;
//      else
//        return default_response
//    }
//  }
//};

module.exports = Bob;
