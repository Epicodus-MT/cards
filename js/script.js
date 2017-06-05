//Business logic
var suits = ["hearts","clubs","spades","diamonds"] //array for card suits
var numbers = ["ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"] //array of #'s
var newDeck = [];

// steps through both arrays and create a new full deck
suits.forEach(function(suit){
  numbers.forEach(function(num){
    newDeck.push(num+" of " + suit);
  })

});

console.log(newDeck);
