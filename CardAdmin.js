var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var storeBC = [];
var storeCC = [];

function CardAdmin (front, back, text, cloze, choice) {
  this.front = front;
  this.back = back;
  this.text = text;
  this.cloze = cloze;
  this.choice = choice;
  
  this.addBasicCards = function () {
    var newBasicCard = new BasicCard(this.front, this.back);
    storeBC.push(newBasicCard);
  };
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