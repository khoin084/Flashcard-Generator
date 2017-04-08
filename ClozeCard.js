function ClozeCard (text, cloze) {
   this.text = text;
   this.cloze = cloze;
   //method with logic to parse out cloze and create a partialText
   this.partialText = function () {
     var oldStr = this.text;
     var charsToReplace = this.cloze;
     //using higher order function replace to parse out the cloze phrase from the full texst.
     var newStr = oldStr.replace(charsToReplace, '...');
     //condition to catch when replace does not work.
     //i.e. the cloze does not appear in the full text.
     //when replace fails, it'll return the same old string.
     if(newStr === this.text) {
       console.log("***Error, your cloze is not in the full text.***");
       //return a flase flag so that we do not store this card.
       return false;
     }
     return newStr;
   }
}

module.exports = ClozeCard;