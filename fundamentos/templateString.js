const nome = 'Rebeca';
const concateanacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`
console.log(concateanacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
