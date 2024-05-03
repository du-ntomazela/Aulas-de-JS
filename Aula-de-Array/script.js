/* console.log("Primeira frase")

function printar(){
    console.log("Segunda frase")
}

printar()

console.log("Terceira frase") */

function escolhaDoPC( ){
    const jokeipo = ["pedra", "papel", "tesoura"]
    var numAleatorio = Math.floor(Math.random() * 3)
    return jokeipo[numAleatorio]
    
}

function jogar(escolhaDoJogador) {

    var escolhaPC = escolhaDoPC()
    var resultado = ""

    if (escolhaPC === escolhaDoJogador){
        resultado = "Empate"
        
    }
    else if(escolhaPC === "tesoura" && escolhaDoJogador === "pedra" || escolhaPC === "papel" && escolhaDoJogador === "tesoura" || escolhaPC === "pedra" && escolhaDoJogador === "papel"){
        resultado = "Ganhou"
    }
    else{
        resultado = "Perdeu"
    }
    document.getElementById("resultado").innerText = resultado
}
