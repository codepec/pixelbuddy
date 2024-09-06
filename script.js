let hunger = 100;
let happiness = 100;
let health = 100;

function updateStatus() {
    // Update Hunger, Happiness, and Health elements on the page
    const hungerElement = document.getElementById("hunger");
    const happinessElement = document.getElementById("happiness");
    const healthElement = document.getElementById("health");

    // Check hunger and update text color based on conditions
    if (hunger <= 30) {
        hungerElement.style.color = "red";  // Very low hunger
    } else if (hunger <= 60) {
        hungerElement.style.color = "orange";  // Moderately low hunger
    } else {
        hungerElement.style.color = "black";  // Normal hunger
    }

    // Check happiness and update text color based on conditions
    if (happiness <= 30) {
        happinessElement.style.color = "red";  // Very low happiness
    } else if (happiness <= 60) {
        happinessElement.style.color = "orange";  // Moderately low happiness
    } else {
        happinessElement.style.color = "black";  // Normal happiness
    }

    // Check health and update text color based on conditions
    if (health <= 30) {
        healthElement.style.color = "red";  // Very low health
    } else if (health <= 60) {
        healthElement.style.color = "orange";  // Moderately low health
    } else {
        healthElement.style.color = "black";  // Normal health
    }

    // Update the displayed values
    hungerElement.innerText = hunger;
    happinessElement.innerText = happiness;
    healthElement.innerText = health;



    if (hunger <= 0 || happiness <= 0 || health <= 0) {
        alert("Dein Pixel Buddy ist gestorben 😢");
        resetGame();
    }
}

function feedPet() {
    if (hunger < 100) {
        hunger += 10;
        if (hunger > 100) hunger = 100;
    }
    happiness -= 5;
    health -= 2;
    updateStatus();
}

function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        if (happiness > 100) happiness = 100;
    }
    hunger -= 10;
    health -= 2;
    updateStatus();
}

function healPet() {
    if (health < 100) {
        health += 10;
        if (health > 100) health = 100;
    }
    happiness -= 5;
    hunger -= 5;
    updateStatus();
}

function resetGame() {
    hunger = 100;
    happiness = 100;
    health = 100;
    updateStatus();
}

function gameLoop() {
    hunger -= 1;
    happiness -= 1;
    health -= 1;
    updateStatus();

    if (hunger > 0 && happiness > 0 && health > 0) {
        setTimeout(gameLoop, 3000); // Reduziert alle 3 Sekunden
    }
}

window.onload = function() {
    updateStatus();
    gameLoop();
};
