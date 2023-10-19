const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const winner = document.getElementById("winner");

document.addEventListener("keydown", function (event) {
    if (event.key === "0") {
        movePlayer(player1, 60);
    }
    if (event.key === " ") {
        movePlayer(player2, 60);
    }
});

function movePlayer(player, distance) {
    const currentPosition = parseInt(player.style.left) || 0;
    player.style.left = currentPosition + distance + "px";
    
    if (currentPosition + distance >= window.innerWidth - 50) {
        declareWinner(player);
    }
}

function declareWinner(player) {
    winner.textContent = "Player " + (player.id === "player1" ? "1" : "2") + " venceu!";
    document.removeEventListener("keydown", function (event) {});
}