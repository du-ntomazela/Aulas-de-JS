const lista = ["Fulano", "Ciclano", "Beltrano"]
/* 
//Adiciona um item ao final da lista
lista.push("Tomaz")

// Remove o ultimo elemento da lista
lista.pop()

//Adiciona um elemnto ao começo da lista
lista.unshift("Luiz")

//Remove o primeiro elemnto e posiciona umnovo
lista.shift("Hebert")

//troca um elemnto de uma lista
lista[1] = "Caio"

console.log(lista) */
/* 
for(i=0; i<=10; i++) {
    console.log(i)
}

lista.forEach(function rodarArray(elemento){
    console.log(`Olá ${elemento.toLowerCase()}`)
})

//Arrow function

lista.forEach(elemento => {
    console.log(`Olá ${elemento.toLowerCase()}`)
})
    
//Arrow function em uma linha

lista.forEach(elemento => console.log(`Olá ${elemento.toLowerCase()}`))
    
 */

// Criando um nova lista em cima de uma exitente e multiplicando os elemntos da lista original por 2

/* const list2 = [1, 2, 3];

const ModifiedList2 = []

list2.map(element => {
    ModifiedList2.push(element * 2) 
})

console.log(ModifiedList2) */


// Colocando todos elementos da lista em UpperCase
/* const list2 = ["oi", "tudo bem", "com vc?"];

const ModifiedList2 = []

list2.map(element => {
    ModifiedList2.push(element.toUpperCase()) 
})

console.log(ModifiedList2)  */

//Filtrando elemntos de um array

/* const filmes = [
    {
        nome : "Guardioes das Galaxias",
        ano : 1977
    },
    {
        nome : "Carros 2",
        ano : 2000
    }
]

const FilmesFiltrados = filmes.filter(filme => filme.ano > 1990)

console.log(FilmesFiltrados) */