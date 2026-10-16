document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let state = Array(9).fill(null);
    let player = 'X';

    squares.forEach(function (square, index) {
        square.classList.add("square");
        square.addEventListener('click', function () {
            state[index] = player;
            square.textContent = player;
            square.classList.add(player);
            player = player === 'X' ? 'O' : 'X';

            square.addEventListener('mouseover', function () {
            square.classList.add('hover');
            });
            
            square.addEventListener('mouseout', function () {
            square.classList.remove('hover');
            });

        });
    });
});



