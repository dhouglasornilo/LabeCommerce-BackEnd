function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const randomNumber = getRandomNumber(0, 5)
console.log(randomNumber)

const parOuImparJogador = process.argv[2]
const numeroEscolhidoJogador = process.argv[3]

// Sempre que quiser converter algum valor em number coloca -0 após o valor.
const result = numeroEscolhidoJogador-0 + randomNumber

if (parOuImparJogador === "par"){
    if (result % 2 === 0){
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${result}. Você ganhou!`)
    }else{
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${result}. Você perdeu!`)
    }
} else {
    if (result % 2 !== 0){
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${result}. Você ganhou!`)
    }else{
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${result}. Você perdeu!`)
    }
}

/* se o result === par && jogador === par || se result === impar && jogador === impar = win, else = lose */

// fazer com ternário também.