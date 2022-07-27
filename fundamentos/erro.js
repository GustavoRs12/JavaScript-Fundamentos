function tratarErroELancar(erro) {
    //throw new Error('...')
    throw true
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGrintando(obj)