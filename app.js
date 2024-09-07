function pesquisar() {
  
    // Busca os dados dos personagens e exibe no console (para debug)
    console.log(personagensVanDerLinde);
  
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
       section.innerHTML = "<p>Nada foi Encontrado !</p>"
       alert("Você precisa digitar o nome de um personagem")
       return
    }
  
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let nome = "";
    let descricao = "";
  
    // Itera sobre cada personagem da lista
    for (let dado of personagensVanDerLinde) {

        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if ( nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
       
        // Constrói o HTML para cada personagem, utilizando template literal
        resultados += `
        <div class="item-resultado">
          <img src="${dado.imagem}" alt="${dado.nome}">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.video} target="_blank">Saiba mais sobre o Personagem</a>
        </div>
      `;
        }
    }
  
    // Insere os resultados formatados na seção HTML
    section.innerHTML = resultados;
}
