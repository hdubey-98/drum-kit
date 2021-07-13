let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++)
    drums[i].addEventListener("click", playOnClick);

function playOnClick() {
    let letter = this.innerHTML;
    playdrum(letter);
    buttonAnimation(letter);
}

document.addEventListener("keydown", function(e) {
    playdrum(e.key);
    buttonAnimation(e.key);
});

function playdrum(letter) {
    let sound;

    switch (letter) {
        case "a":
            sound = new Audio("sounds/tom-1.mp3");
            break;
        case "s":
            sound = new Audio("sounds/tom-2.mp3");
            break;
        case "d":
            sound = new Audio("sounds/tom-3.mp3");
            break;
        case "f":
            sound = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            sound = new Audio("sounds/crash.mp3");
            break;
        case "k":
            sound = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            sound = new Audio("sounds/snare.mp3");
            break;
    }

    sound.play();
}

function buttonAnimation(letter) {

    let className = "." + letter;
    let activeButton = document.querySelector(className);

    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}