const cells = document .querySelectorAll('.cell');
const resetButton = document.querySelector('#reset-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cellsforEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

function handleCellClick() {
    const cellIndex = parseInt(this.id);
    if (gameBoard[cellIndex] !== '') {
        return;
    }
    gameBoard[cellIndex] = currentPlayer;
    this.textContent = currentPlayer;
    if (checkForWin()) {
        alert(`${currentPlayer} wins!`);
        resetGame();
    } else if (checkForDraw()) {
        alert(`Draw!`);
        resetGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
     

}

function checkForWin() {
    for (let i = 0; i < winCombos.length; i++) {
        const [a, b, c] = winCombos[i];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        } 

    }
    return false;
}

function checkForDraw() {
    return !gameBoard.includes('');
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
}