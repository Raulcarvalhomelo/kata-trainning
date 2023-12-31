// function rps(p1, p2){
    
//     return p1 === p2 ? "Draw" : (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") ? "Player 1 won!" : "Player 2 won!"
// }


function rps(p1, p2) {
    const opcoes = ["rock", "paper", "scissors"];

    if (p1 == p2) {
        return "Draw";
    }

    if (opcoes.indexOf(p1) !== -1 && opcoes.indexOf(p2)!== -1) {
        return (opcoes.indexOf(p1) + 1) % 3 === opcoes.indexOf(p2) ? "Player 2 won!" : "Player 1 won!";
    } else {
        return "Escolha inválida! Por favor, escolha entre rock, paper ou scissors.";
    }
}
console.log(rps("rock", "scissors"))
console.log(rps("scissors", "scissors"))
console.log(rps("paper", "scissors"))
console.log(rps("paper", "rock"))
