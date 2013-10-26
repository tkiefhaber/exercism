var Bob = function(input){
  var responses = [
    {
      matches: function(i){
        if (i == i.toUpperCase() && i.match(/[a-zA-Z]/))
          return true
      },
      response: "Woah, chill out!"
    },
    {
      matches: function(i){
        if (i.match(/\?$/g))
          return true
      },
      response: "Sure."
    },
    {
      matches: function(i){
        if (i.trim() === '')
          return true
      },
      response: "Fine. Be that way!"
    }
  ];

  var default_response = "Whatever.";

  this.hey = function(input) {
    var i, reaction, returned_reaction;

    for(i=0; i<responses.length; i++) {
      reaction = responses[i];
      if (reaction.matches(input))
        {
          returned_reaction = reaction.response;
          break;
        }
    }
    return returned_reaction ? returned_reaction : default_response
  }
};

module.exports = Bob;
