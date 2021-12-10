const ranking = document.querySelector("#ranking");
const highScores = JSON.parse(localStorage.getItem("highScores"));

ranking.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("");

