let currentPlayer = 'X';
let playerXName = '';
let playerOName = '';
const board = ['', '', '', '', '', '', '', '', ''];

function startGame() {
    playerXName = prompt("Enter Player X's name:");
    playerOName = prompt("Enter Player O's name:");
    resetBoard();
    updateTurnMessage();
}

function makeMove(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            resetBoard();
        } else if (board.every(cell => cell !== '')) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateTurnMessage();
        }
    }
}

function updateTurnMessage() {
    const turnMessage = document.getElementById('turn-message');
    turnMessage.innerText = `It's ${currentPlayer === 'X' ? playerXName : playerOName}'s turn`;
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetBoard() {
    board.fill('');
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    currentPlayer = 'X';
    updateTurnMessage();
}
