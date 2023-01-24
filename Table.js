//Classe destinada a implementação dos dados obtidos do arquivo csv
export default class
{
    /**
     * @param {HTMLTableElement} root o elemento tabela com os dados do arquivo csv
     */    
    constructor(root)
    {
        //importar na classe main
        this.root = root;
    }

    /**
   * @param {string[][]} data array duplo a ser inserido na lista de linhas
   * @param {string[]}   headerColumns lista os atributos a serem mostrados
   */
    update(data, headerColumns = [])
    {
        this.setHeader(headerColumns);
        this.setBody(data);
        alert("Aguarde! O arquivo está sendo carregado.");
    }

   /**
   * Limpa os dados da tabela, inclusive o cabeçalho
   * função atribuida ao botao limpar --html
   */    
    clear()
    {
        this.root.innerHTML = "";  
    }


    /**
   * configuramos o cabeçalho da tabela, coleta os dados da primeira linha e as insere na DOM.
   *
   * @param {string[]} headerColumns Lista o cabeçalho
   */
  setHeader(headerColumns) 
  {
    this.root.insertAdjacentHTML(
      "afterbegin",
      `
            <thead id= "headCsv">
                <tr>
                    ${headerColumns.map((text) => `<th>${text}</th>`).join("")}
                </tr>
            </thead>
        `
    );
  }


  /**
   * configura o corpo da tabela.
   *
   * @param {string[][]} data array duplo para set da lista recebida do arquivo csv
   * ulizamos a tag map para varredura dos dados
   */
  setBody(data) {
    const rowsHtml = data.map((row) => {
      return `
                <tr id= "lineTable">
                    ${row.map((text) => `<td>${text}</td>`).join("")}
                </tr>
            `;
    });

    console.log(rowsHtml)

    this.root.insertAdjacentHTML(
      "beforeend",
        `
            <tbody id= bodyCsv>
                ${rowsHtml.join("")}
            </tbody>
       `
    );
  }
}
