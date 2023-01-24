//associa o cabeçalho da tabela
const inputBusca = document.getElementById('inputBusca');

//associa o corpo da tabela
const bodyCsv = document.getElementById('bodyCsv');

//criar uma lista de eventos pra que o console retorne o ==valor digitado no input== Trocar para click no select
inputBusca.addEventListener('keyup', () => {
    //declarar que a variavel expressão é = ao conteudo (value) elemento que tem o id inputBusca --- 
    let expression = inputBusca.value.toLowercase();

    //capturamos as linhas da tabela 
    let lines = bodyCsv.getElementById('lineTable');

    console.log(lines);

    //para cada posicao em linhas faça: 
    for (let position in lines){
        //declara a variavel de conteudo da linha
        //e associa ao conteudo da pagina
        let lineValue = lines[position].innerHTML.toLowercase();

        //
        if(true === lineValue.includes(expression)){
            lines[position].style.display = '';
        }else{
            lines[position].style.display = '';
        }
    }
})
