/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let textForLoop = "";
  for (let index = 0; index < pronoun.length; index++) {
    for (let i = 0; i < adj.length; i++) {
      for (let j = 0; j < noun.length; j++) {
        textForLoop += `<li class="list-group-item">${pronoun[index]}${adj[i]}${noun[j]}.com</li>`;
      }
    }
  }
  let textForOf = "";
  for (const elementPronoun of pronoun) {
    for (const elementAdj of adj) {
      for (const elementNoun of noun) {
        textForOf += `<li class="list-group-item">${elementPronoun}${elementAdj}${elementNoun}.net</li>`;
      }
    }
  }

  document.querySelector("#for-loop").innerHTML = textForLoop;
  document.querySelector("#for-of").innerHTML = textForOf;
};
