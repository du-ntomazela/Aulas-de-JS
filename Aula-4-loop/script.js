function calcular() {
    var num = parseInt(document.getElementById("numero").value);
    while (num > 0) {
        txt = `O numero é ${num}`;
        console.log(txt);
        num--;
    }
}

for(i=0; i<10; i+=2){
    txt1 = `Valor de (i) dentro do for: ${i}`;
    console.log(txt1);
}

function calcular2(){
    var valor = parseInt(document.getElementById("numero2").value);
    

    for(cont = 1; cont <= 10; cont++){
        multi = `${valor} X ${cont} = ${valor*cont}`
        console.log(multi)
        
    }

}

function calcular3(){
    var numero1 = parseInt(document.getElementById("numero3").value);
    soma = 0
    for(conteiner=numero1; conteiner>1; conteiner--){
        if(numero1%conteiner === 0 ){
            console.log(conteiner);
            soma++;
        }
    }
    console.log(`O numero ${numero1} tem ${soma} divisores cujo o produto é = 0`)
}