
const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".hero-boy");
const wolf = document.querySelector(".wolf");

function jump() {
    if (hero.classList != "animate") {
        hero.classList.add("animate");
        wolf.style.animation = "move 1s infinite linear";


    }

    setTimeout(function() {
        hero.classList.remove("animate");
    }, 300);
}

document.addEventListener("keydown", function() {
    jump();
})

let isAlive = setInterval(function() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    //   console.log(heroTop);
    let vilanLeft = parseInt(window.getComputedStyle(wolf).getPropertyValue("left"));

    if (vilanLeft < 40 && vilanLeft > 20 && heroTop >= 130) {
        wolf.style.animation = "none";

        alert("Game Over. Press spacebar to restart");



    }


}, 10);