let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset-btn');
let msgContainer = document.querySelector('.msg-container')
let newGame = document.querySelector('#new-btn');
let message = document.querySelector('#msg');

let turnO = true; // true for O's turn, false for X's turn
let moveCount = 0;

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () => {
    turnO = true;
    moveCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = '#b0413e';
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = '#0a642f';
            turnO = true;
        }
        box.disabled = true;

        moveCount++;

        checkWinner();
    })
});


const disableBoxes = () => {
    for(let box of boxes) {
    box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation the winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes();
};

const showDraw = () => {
    msg.innerText = "Both Are Equal! Let's Play Again."
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=> {
    let winnerFound = false;
    for(let pattern of winPatterns){
           pos1Val = boxes[pattern[0]].innerText,
           pos2Val = boxes[pattern[1]].innerText,
           pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "")
                if(pos1Val == pos2Val && pos2Val == pos3Val){
                    showWinner(pos1Val)
                    winnerFound = true;
                    return;
                }
    }

    if(!winnerFound && moveCount ==9){
        showDraw();
    }
}


 resetBtn.addEventListener("click", resetGame);
 newGame.addEventListener("click", resetGame);