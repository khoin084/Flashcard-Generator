/**
**UCSD Bootcamp
**Khoi Nguyen
**4/7/2017
**Homework #11
**/
//importing packages and files.
var inquirer = require('inquirer');
var CardAdmin = require('./CardAdmin.js');
//Console greeting
console.log("=====================================");
console.log("Welcome to Flashcards Creator!!!    |");
console.log("=====================================");

//initial kickstart for app to begin sequence.
start();

//method to begin CLI.
function start() {
  var startQuestion = [
    {
      type:'list',
      name:'userChoice',
      message:'Create Basic or Cloze Flashcards?',
      choices:['Basic Card','Cloze Card']
    }
  ];
  inquirer.prompt(startQuestion).then(function (answer) {
    //console.log(JSON.stringify(answer, null, ' '));
    if(answer.userChoice === "Basic Card") {
      askBasicCardInfo(answer.userChoice);
    }
    else
      askClozeCardInfo(answer.userChoice);
  });
}
//method to ask the user for front and back of basic card
function askBasicCardInfo(choice) {
  inquirer.prompt([
    {
      type:'input',
      name:'front',
      message:'Type in Front text:'
    },
    {
      type:'input',
      name:'back',
      message:'Type in Back text:'
    }
  ]).then(function (answers) {
    var newBasicCard = new CardAdmin(answers.front, 
                                answers.back,
                                null, 
                                null, 
                                choice);
    newBasicCard.addBasicCards();
    newBasicCard.showCards();
    addAnother();
  });
}
//methode to ask the user for text and cloze.
function askClozeCardInfo(choice) {
  inquirer.prompt([
     {
      type:'input',
      name:'fullText',
      message:'Type in Full text:'
    },
    {
      type:'input',
      name:'cloze',
      message:'Type in cloze text:'
    }
  ]).then(function (answers) {
    var newClozeCard = new CardAdmin(null, 
                                     null,
                                     answers.fullText,
                                     answers.cloze,
                                     choice);
    newClozeCard.addClozeCards();
    newClozeCard.showCards();
    addAnother();
  });
}
//final method to either add or quit the application.
function addAnother () {
  inquirer.prompt([
      {
        type:'list',
        name:'again',
        message:'Add another card?',
        choices: ['yes','no']
      }
    ]).then(function(answer) {
      if(answer.again === "yes") {
        start();
      }
      else{
        console.log("****************************************");
        console.log("Thanks for using the Flash Cards App!! *");
        console.log("****************************************");
        return;
      }
    });
}