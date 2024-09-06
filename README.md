Pixel Buddy 🐾

Pixel Buddy is a simple virtual pet game where you take care of a pixelated pet. You need to feed, play with, and heal your buddy to keep it happy, healthy, and alive!
Features

    Hunger, Happiness, and Health stats dynamically updated
    Interactive buttons to feed, play, and heal your pet
    Visual indicators: text color changes based on the pet's state (normal, warning, critical)

How to Play

    Feed: Increases hunger, but reduces happiness and health.
    Play: Increases happiness, but decreases hunger and health.
    Heal: Increases health, but decreases hunger and happiness.

Be careful! If any of the stats (hunger, happiness, or health) reach zero, your Pixel Buddy will die. Try to maintain a balanced state!
Demo

You can play the game directly in your browser using GitHub Pages: Play Pixel Buddy
Setup

    Clone the repository:

    bash

    git clone https://github.com/codepec/PixelBuddy.git

    Open the index.html file in your browser to play the game locally.

File Structure

    index.html: The main structure of the game.
    style.css: Styles for the layout and design of the game.
    script.js: The logic behind the game’s interactive features.
    pixelbuddy.gif: The image of your pet (make sure you have an image of your pet in the project directory).

Technologies Used

    HTML5: Structure and content
    CSS3: Styling and layout
    JavaScript: Game logic and interactions

How to Use GitHub Pages

To host the game on GitHub Pages, follow these steps:

    Push your code to GitHub:

    bash

git add .
git commit -m "Initial commit"
git push origin main

Enable GitHub Pages:

    Go to your repository on GitHub.
    Click on the Settings tab.
    Scroll down to the GitHub Pages section.
    Under "Source", choose the branch where your index.html is located (usually main) and set the folder to /root.
    Click Save.

Access your game: After a few minutes, your game will be live at:

    https://codepec.github.io/PixelBuddy

Contributing

Contributions are welcome! If you have any ideas to improve the game or want to fix any issues, feel free to create a pull request or open an issue.
License

This project is licensed under the MIT License. See the LICENSE file for more details.