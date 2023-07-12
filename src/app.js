/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domainName").innerHTML = getDomain();
};

let pronouns = ["the", "our", "his", "my"];
let adjectives = ["great", "big", "small", "tallest"];
let nouns = ["jogger", "raccoon", "dog", "cat"];
let extensions = [".com", ".gov", ".us", ".net"];

function getDomain() {
  let domain = "";
  for (let pronounIndex = 0; pronounIndex < pronouns.length; pronounIndex++) {
    for (
      let adjectiveIndex = 0;
      adjectiveIndex < adjectives.length;
      adjectiveIndex++
    ) {
      for (let nounIndex = 0; nounIndex < nouns.length; nounIndex++) {
        for (let extIndex = 0; extIndex < extensions.length; extIndex++) {
          domain +=
            pronouns[pronounIndex] +
            adjectives[adjectiveIndex] +
            nouns[nounIndex] +
            extensions[extIndex] +
            "<br>";
        }
      }
    }
  }
  return domain;
}

let domainName = getDomain();
