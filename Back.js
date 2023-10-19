const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const winner = document.getElementById("winner");
const chegada = document.getElementById("chegada");

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
    const maxWidth = window.innerWidth - player.offsetWidth; // Define a posição máxima
    
    if (currentPosition + distance < maxWidth) {
        player.style.left = currentPosition + distance + "px";
    } else {
        player.style.left = maxWidth + "px"; // Define a posição máxima se o limite for atingido
        declareWinner(player);
    }
}

function declareWinner(player) {
    winner.textContent = "Player " + (player.id === "player1" ? "1" : "2") + " venceu!";
    document.removeEventListener("keydown", function (event) {});
}