//importing files.
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
//arrays to store both types of cards.
var storeBC = [];
var storeCC = [];

//main constructor to handle both types of cards.
function CardAdmin (front, back, text, cloze, choice) {
  this.front = front;
  this.back = back;
  this.text = text;
  this.cloze = cloze;
  this.choice = choice;
  //method to store Basic cards
  this.addBasicCards = function () {
    var newBasicCard = new BasicCard(this.front, this.back);
    storeBC.push(newBasicCard);
  };
  //method to store cloze cards
  this.addClozeCards = function () {
    console.log("gotten this far?");
    var newClozeCard = new ClozeCard(this.text, this.cloze);
    //obj are mutable - adding property partialText
    newClozeCard.partialText = newClozeCard.partialText();
    //only store cloze that appear within the full text.
    if(newClozeCard.partialText !== false) {
      storeCC.push(newClozeCard);
    }
  };
  this.showCards = function () {
    //displays current cards stored for both types.
    if(this.choice === "Basic Card"){
      console.log("=======Currently Stored Basic Cards==============");
      console.log(storeBC);
      console.log("=================================================");
    }
    else {
      console.log("=======Currently Stored Cloze Cards==============");
      console.log(storeCC);
      console.log("=================================================");
    }
  };
}

module.exports = CardAdmin;