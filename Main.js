import TableCsv from "./tableCsv.js";

//associa a tabela a DOM do navegador e utilizamos o seletor de requisição;
//(csvRoot) é o id da tabela contida na pagina indx.html;
const tableRoot = document.querySelector("#csvRoot");

//relaciona o arquivo escolhido pelo usuario e será utilizado nas funções
const csvFileInput = document.querySelector("#csvFileInput")

// adicionar um botao para limpar a área
const clear = document.getElementById("clear")
  
//instancia de um novo objeto TableCsv -- importamos na linha 1
//tableRoot como parametro
const tableCsv = new TableCsv(tableRoot);

// declaramos que o arquivo está no index 0 para ser selecionado
// utilizamos a biblioteca Papa Parse para setar quais delimitar por ',', pular linhas vazias - sim
// completa com a atribuição do resultado com a função update, como parametro colocamos data no indice 1 (ignora a primeira linha do arquivo)
//copia e coloca no indice 0
csvFileInput.addEventListener("change", (e) => {
    Papa.parse(csvFileInput.files[0], {
      delimiter: ",",
      skipEmptyLines: true,
      trimEmptyCells: true,
      complete: (results) => {
            tableCsv.update(results.data.slice(1), results.data[0]);
      }
    });
  });

  //-- FIM  TRATATIVA TABLE --
