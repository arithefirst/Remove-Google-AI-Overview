// ==UserScript==
// @namespace   arithefirst
// @name        Remove Google AI Overview
// @version     1.69
// @description Removes the
// @match       https://www.google.com/*
// @grant       none
// @noframes
// @run-at      document-idle
// ==/UserScript==

window.onload = function () {
  var todelete = document.querySelector(".M8OgIe");
  var overview = document.querySelector(".VW3apb");
  if (overview.outerText == "AI Overview") {
    console.log("AI Overview Detected: removing....")
    todelete.outerHTML = "";
  }
};
