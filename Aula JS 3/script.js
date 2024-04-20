// operador Tenário:
//(Condicional) ? True:False

function confirm(){
    var qtd = parseInt(document.getElementById('Quantidade').value);

    if (qtd > 7) {
        var resultado = 15 * qtd;
        result.innerText = `O valor de sua compra é de ${resultado}`;
    }
    else {
        var resultado = 22 * qtd;
        result.innerText = `O valor de sua compra é de ${resultado}`;
    }
}

function confirmVelo() {
    var velo = parseInt(document.getElementById('v1').value);

    if (velo > 60) {
        multa = (velo - 60) * 100;
        valormulta.innerText = `O valor da mula é de ${multa}`;
    }
    else {
        valormulta.innerText = `Está dentro da velocidade permitida`;
    }
}

function confirmCargo() {
    var cargo = (document.getElementById('cargo').value);

    switch (cargo){
        case 'jr':
            salario.innerText = `salário 3000`;
        break
        case 'pleno':
            salario.innerText = `salário Pleno`;
        break
        case 'senior':
            salario.innerText = `salário Senior`;
        break
        case 'techlead':
            salario.innerText = `salário TechLead`;
        break
        case 'diretor':
            salario.innerText = `salário Diretor`;
        break
    }
}