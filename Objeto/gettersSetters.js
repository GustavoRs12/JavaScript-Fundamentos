const sequencia = {
    _valor: 1, // convenção privada sempre que o _ estiver na frente
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) 
        {this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

