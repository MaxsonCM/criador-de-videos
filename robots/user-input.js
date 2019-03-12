const readLine = require('readline-sync')

function robot(content) {
    
    content.searchTerm = perguntaERetornaTermo()
    content.prefix = perguntaERetornaPrefixo()
    
    function perguntaERetornaTermo(){
        return readLine.question('Type a Wikipedia search term: ')
    }
    function perguntaERetornaPrefixo(){
        const prefixos = ['Who is', 'What is', 'The history of']
        const selecaoPre = readLine.keyInSelect(prefixos, 'Choose one option: ')
        return prefixos[selecaoPre]
    }

}

module.exports = robot