/**
 * Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
    Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

function verificarPalindromo(string){
    if (!string) return 'string inexistente!';

    return string.split('').reverse().join('') === string;
}

function verificarPalindromo2(string){
    if (!string) return 'string inexistente!';

    for(let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(verificarPalindromo2('omo'));

/*
PRIMEIRO CRIA UMA FUNÇÃO QUE RECEBE UMA STRING, PRIMEIRO ARMAZENA A STRING E DEPOIS FAZ O INVERSO, VOU REVERTER E DEPOIS COMPARAR A VERSAO REVERTIDA COM A VERSÃO JÁ PASSADA COMO PARAMETRO

    function solution(string) {

    var reverso = string.split('').reverse('').join('');
    if(string === reverso) {
        return true;
    } else {
        return false;
    }
    }
    solution("aabaa");

    solution("aabaa");                      STRING.SPLIT('') TRANSFORMA EM ARRAY , REVERSE() INVERTE A STRING , JOIN('') TRANSFORMA EM STRING DNV, POR QUE ELA VIROU UM ARRAY POR CAUSA DO SPLIT, DEPOIS RETORNO
*/
