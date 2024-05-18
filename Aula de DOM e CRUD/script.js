const btnCriar = document.querySelector("#btn-criar");
const listaFilmes = document.querySelector("#listaFilmes")
const content = document.querySelector("#inputUser")

const filmes = [
    {
        nome: "Carros",
        ano: 2008,
        position: 1,
    },
    {
        nome: "Tropa de elite",
        ano: 2008,
        position: 2
    },
    {
        nome: "Titanic",
        ano: 1997,
        position: 3
    }
]

btnCriar.addEventListener("click", function(infosDoEvento){
    infosDoEvento.preventDefault();
    let novoFilme = document.createElement("li")
    novoFilme.innerText = content.value
    novoFilme.style.marginRight = "10px"


    let btnEditar = document.createElement("button")
    btnEditar.innerHTML = "<span>Editar</span>"
    listaFilmes.append(btnEditar)

    btnEditar.addEventListener("click", function(){
        novoFilme.classList.toggle("esconder")
    })
    

    
    listaFilmes.append(novoFilme)
})

/* InfoDoEvento -  retorna todo o objeto
   InfoDoEvento.target - retorna o target do elemnto de click
   InfoDoElemento. taget.value - retorna o value do click
   
   Document.createElement("TagHTML")

   append() - adiciona um elemnto ao HTML

   innerHTML - Adiciona uma ou mais tags de HTMl com conteudo
   */

   /* 
      Create
        */
       function criarFilme(){
        const filmeNovo = {
            nome: inputDoUser.value
        }
       }
      /*
      Read 
        */
      window.onload = rendenizarNaTela()
      function rendenizarNaTela(){
        filmes.forEach(
            filme => {
                let novoFilme = document.createElement("li")
                novoFilme.innerHTML = `
                <h1>${filme.nome}</h1>
                <h1>${filme.ano}</h1>
                <h1>${filme.position}</h1>
                <botton>Editar</botton>
                `
            }
        )
      }
    /*
      Update

      Delete
      
      */