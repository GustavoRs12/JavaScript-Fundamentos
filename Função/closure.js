// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas á função

// Cotexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'  //função declarada 
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())