"use strict";

function moveButton() {
  const x =
    Math.random() *
    (window.innerWidth - document.getElementById("noButton").offsetWidth);
  const y =
    Math.random() *
    (window.innerHeight - document.getElementById("noButton").offsetHeight);
  document.getElementById("noButton").style.left = `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;
}

function changeMsg() {
  const newMessage = document.getElementById("dateMessage");
  const newGif = document.querySelector(".gif");
  var containerElement = document.querySelector(".container");

  newMessage.innerHTML = "Great! Let's go for a date!";
  newGif.src = "https://media.giphy.com/media/3ohzdGmM14QTUne9tm/giphy.gif";
  containerElement.style.backgroundImage =
    "url('https://media.giphy.com/media/2o1eDUHEP6T1C/giphy.gif')";
  containerElement.style.backgroundSize = "cover";
  removeButtons();
}

function removeButtons() {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  if (yesButton) {
    yesButton.remove();
  }

  if (noButton) {
    noButton.remove();
  }
}
