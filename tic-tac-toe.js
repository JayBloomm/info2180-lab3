const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');
    const defaultMessage = status.textContent;
    let state = Array(9).fill(null);
    let player = 'X';
    let gameOver = false;

    function checkWinner() {
        for (const [a, b, c] of winningCombos) {
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    squares.forEach(function (square, index) {
        square.classList.add("square");

        square.addEventListener('click', function () {
            if (gameOver || state[index] !== null) {
                return;
            }

            state[index] = player;
            square.textContent = player;
            square.classList.add(player);

            const winner = checkWinner();
            if (winner) {
                status.textContent = 'Congratulations! ' + winner + ' is the Winner!';
                status.classList.add('you-won');
                gameOver = true;
                return;
            }

            player = player === 'X' ? 'O' : 'X';
        });

        square.addEventListener('mouseover', function () {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', function () {
            square.classList.remove('hover');
        });
    });

    newGameBtn.addEventListener('click', function () {
        state = Array(9).fill(null);
        player = 'X';
        gameOver = false;

        squares.forEach(function (square) {
            square.textContent = '';
            square.classList.remove('X', 'O', 'hover');
        });

        status.textContent = defaultMessage;
        status.classList.remove('you-won');
    });
});