function startSurprise() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("birthday").classList.remove("hidden");

    createBalloons();
    createConfetti();
}


function createBalloons() {

    const emojis = ["🎈", "🎈", "🎈", "🎈", "🎈"];

    emojis.forEach((emoji, index) => {

        const balloon = document.createElement("div");

        balloon.className = "balloon";
        balloon.innerHTML = emoji;

        balloon.style.left = (10 + index * 20) + "%";
        balloon.style.animationDelay = (index * 0.5) + "s";

        document.getElementById("balloons").appendChild(balloon);
    });
}


function createConfetti() {

    const emojis = ["🎉", "✨", "💖", "🎊", "⭐"];

    for (let i = 0; i < 35; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 3 + "s";

        document.getElementById("confetti").appendChild(piece);
    }
}