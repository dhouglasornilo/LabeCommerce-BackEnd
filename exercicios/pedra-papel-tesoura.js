const escolha = ["pedra", "papel", "tesoura"];

const escolhaDoJogador = process.argv[2];

if (escolha.includes(escolhaDoJogador)) {
    jogar(escolhaDoJogador);
} else {
    console.log(
    "Escolha inválida. Por favor, escolha entre 'pedra', 'papel' ou 'tesoura'."
    );
}

function jogar(escolhaDoJogador) {
  const escolhaDoComputador = escolha[Math.floor(Math.random() * escolha.length)];

    console.log(`Você escolheu: ${escolhaDoJogador}`);
    console.log(`O computador escolheu: ${escolhaDoComputador}`);

    if (escolhaDoJogador === escolhaDoComputador) {
    console.log("Empate! Jogue novamente para desempatar!");
    } else if (
    (escolhaDoJogador === "pedra" && escolhaDoComputador === "tesoura") ||
    (escolhaDoJogador === "papel" && escolhaDoComputador === "pedra") ||
    (escolhaDoJogador === "tesoura" && escolhaDoComputador === "papel")
    ) {
    console.log("Parabéns, você ganhou!");
    } else {
    console.log("Droga, infelizmente você perdeu!");
    }
}

