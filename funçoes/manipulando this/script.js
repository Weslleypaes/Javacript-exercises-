const pessoa = {
    nome: 'Weslley',
    sobrenome: 'Paes',
    idade: 21,
    tipagem: 'humano',
    endereco: 'Engenheiro Pedreira',
};
const pessoa2 = {
    nome: 'Márcia',
    sobrenome: 'Souza',
    idade: 47,
    tipagem: 'humano',
    endereco: 'Engenheiro Pedreira',
};
const pessoa3 = {
    nome: 'Maria',
    sobrenome: 'Souza',
    idade: 66,
    tipagem: 'humano',
    endereco: 'Japeri',
};
const pessoa4 = {
    nome: 'Daniel',
    sobrenome: 'Generoso',
    idade: 52,
    tipagem:'humano',
    endereco: 'Austin',
}
const pessoa5 = {
    nome: 'Kawan',
    sobrenome: 'Generoso',
    idade: 12,
    tipagem: 'humano',
    endereco: 'Austin',
}
const animal = {
    nome: 'Tico',
    sobrenome: 'Paes',
    idade: 1,
    tipagem: 'ave',
    endereco: 'Engenheiro Pedreira',
}


function calculaIdade(anos) {
	return `É um ${this.tipagem}, mora em ${this.endereco}, tem ${this.idade} anos e seu nome é ${this.nome} ${this.sobrenome}.
    Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos !`;
}
console.log(calculaIdade.apply(animal, [ 10 ] ));