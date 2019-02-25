const readLine = require('readline-sync')

function start() {
    const conteudo = {}

    conteudo.procurarTermo = perguntaERetornaTermo()
    conteudo.prefixo = perguntaERetornaPrefixo()

    function perguntaERetornaTermo(){
        return readLine.question('Digite um Tema para Buscar no Wikipedia: ')
    }
    function perguntaERetornaPrefixo(){
        const prefixos = ['Quem e', 'O que e', 'A historia de']
        const selecaoPre = readLine.keyInSelect(prefixos, 'Escolha uma Opçao: ')
        return prefixos[selecaoPre]
    }

    console.log(conteudo)
}

start()

