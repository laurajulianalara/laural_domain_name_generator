import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let htmlElement = this.document.querySelector(".domain-name-list");


  const pronoun = ["my", "your", "our", "his" , "her"];
  const adjective = ["great", "divine", "exquisite", "exciting"];
  const noun = ["dog", "horse", "elephant", "lawyer", "programmer", "doctor"];
  const extension = [".com", ".net", ".io", ".dev", ".us", ".cn", ".es", ".org", ".me", ".law"];

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjectiveIndex = 0; adjectiveIndex < adjective.length; adjectiveIndex ++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (let extensionIndex = 0; extensionIndex < extension.length; extensionIndex++) {
          const newDiv = document.createElement("div");
          newDiv.textContent = pronoun[pronounIndex] + adjective[adjectiveIndex] + noun[nounIndex] + extension[extensionIndex];
          htmlElement.appendChild(newDiv);
          console.log(pronoun[pronounIndex] + adjective[adjectiveIndex] + noun[nounIndex] + extension[extensionIndex]);






        }
      }
    }
  }
};
