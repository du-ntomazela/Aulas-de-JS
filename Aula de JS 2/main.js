var resultado = document.getElementById('resultado')

function somar () {
    
    //Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    //Processamento

    var soma = numero1 + numero2
    
    //Saida
    console.log(soma)
    resultado.innerText = `O resultado da soma é: ${soma}`


}

function subtrair () {
    
    //Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    //Processamento

    var sub = numero1 - numero2
    
    //Saida
    console.log(sub)
    resultado.innerText = `O resultado da subtração é: ${sub}`
}

function multi () {
    
    //Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    //Processamento

    var multi = numero1 * numero2
    
    //Saida
    console.log(multi)
    resultado.innerText = `O resultado da multiplicação é: ${multi}`
}

function dividir () {
    
    //Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    //Processamento

    var divi = numero1 / numero2
    
    //Saida
    console.log(divi)
    resultado.innerText = `O resultado da divisão é: ${divi}`
}