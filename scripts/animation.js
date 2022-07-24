"use strict";
var expandButton = document.getElementById("expand-btn");
var playButton = document.getElementById("play-btn");
var settings = document.getElementById("settings");
var rootElement = document.querySelector("html");
rootElement.style.setProperty("--animation-play-state", "paused");
function expandMenu() {
    settings.classList.toggle("expanded");
    expandButton.classList.toggle("expanded");
}
function toogleAnimationPlayingState() {
    var property = "--animation-play-state";
    rootElement.style.getPropertyValue(property) === "paused"
        ? rootElement.style.setProperty(property, "running")
        : rootElement.style.setProperty(property, "paused");
    playButton.classList.toggle("play");
}
function setAnimationProperties(event) {
    var target = event.target;
    var animationProperty = target.dataset.animationProperty;
    var tagName = target.tagName, value = target.value;
    rootElement.style.setProperty(animationProperty, "".concat(tagName === "INPUT" ? "".concat(value, "s") : tagName === "SELECT" ? value : ""));
}
expandButton.addEventListener("click", expandMenu);
playButton.addEventListener("click", toogleAnimationPlayingState);
settings.addEventListener("change", setAnimationProperties);
