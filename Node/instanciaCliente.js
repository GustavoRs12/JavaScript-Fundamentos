const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()// require('./instanciaNova')-> para chamar a função, colocando () chama o objeto factory
const contadorD = require('./instanciaNova')()


contadorA.inc()
contadorA.inc()
console.log(contadorA.valor , contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor , contadorD.valor)
