# Tic Tac Toe (HTML, CSS & JavaScript)

A two-player Tic Tac Toe game built with HTML, CSS, and JavaScript. Players take turns clicking the board, and the game announces the winner or a draw.

🔗 **Play it live:** https://muhammaduzairkhalid15.github.io/Tic-Tac-Toe-JavaScript-Uzi-Solutions/
💻 **Repository:** https://github.com/MuhammadUzairKhalid15/Tic-Tac-Toe-JavaScript-Uzi-Solutions

## 🎮 How to Play

1. Player **O** goes first. Click any empty box.
2. Then it is the turn of player **X**. Keep taking turns.
3. The first player to get three in a row (across, down, or diagonal) wins.
4. If all nine boxes are filled and nobody wins, it is a draw.
5. Press **Reset Game** to start again, or **New Game** on the result screen.

## ✨ Features

- 👥 Two players on one device
- 🏆 Win detection using an array of all 8 winning patterns
- 🤝 Draw detection after nine moves
- 🔒 A clicked box is disabled so it cannot be changed
- 🎨 O is shown in red and X in green
- 🔄 Reset Game and New Game buttons
- 📐 The board scales with the screen using `vmin` units

## 🔧 Built With

- **HTML5**
- **CSS3** – flexbox, `vmin` units, box shadows
- **JavaScript (ES6)** – DOM selection, event listeners, arrays, loops, template literals

## 📂 Project Structure

```
Tic-Tac-Toe-JavaScript-Uzi-Solutions/
├── index.html
├── style.css
└── script.js
```

## 🚀 Getting Started

1. Clone the repository
   ```
   git clone https://github.com/MuhammadUzairKhalid15/Tic-Tac-Toe-JavaScript-Uzi-Solutions.git
   ```
2. Open `index.html` in your browser and start playing.

## 💡 What I Practiced

- Selecting elements with `querySelectorAll` and `getElementById`
- Adding click events to every box with `forEach`
- Keeping track of whose turn it is with a boolean variable
- Storing the winning combinations in an array and checking them in a loop
- Showing and hiding a message with `classList.add()` and `classList.remove()`

## 🔮 Ideas for Next

- Show whose turn it is
- Add a scoreboard
- Highlight the winning line
- Play against the computer

## 📬 Feedback

Feedback and suggestions are always welcome. Feel free to open an issue or reach out on LinkedIn!
