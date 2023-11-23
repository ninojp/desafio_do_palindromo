// FORMA DECLARATIVA DE ESCRVER A FUNÇÃO "Function Declaration"
// let palavraInserida = "radar";
// function palavraPalindromo(){
//     let palavraDividida = palavraInserida.split("");
//     console.log(palavraDividida)
//     let letrasInvertidas = palavraDividida.reverse();
//     console.log(letrasInvertidas)
//     let palavraInvertida = letrasInvertidas.join("");
//     console.log(palavraInvertida)
//     if(palavraInserida == palavraInvertida){
//         console.log(`A Palavra "${palavraInserida}" é um palíndromo, pois é Igual a "${palavraInvertida}"`);
//     }else{
//         console.log(`A Palavra "${palavraInserida}" NÃO é um palíndromo, pois é Diferente de "${palavraInvertida}"`)
//     }
// }
// palavraPalindromo();

//===============================================================
// FUNÇÃO ANÔNIMA "Function Expression"
// let palavraInserida = "esse";
// const palavraPalindromo = function() {
//     let palavraDividida = palavraInserida.split("");
//     let letrasInvertidas = palavraDividida.reverse();
//     let palavraInvertida = letrasInvertidas.join("");
//     if(palavraInserida == palavraInvertida){
//         console.log(`A Palavra "${palavraInserida}" é um palíndromo\nPois é Igual a sua inversão: "${palavraInvertida}"`);
//     }else{
//         console.log(`A Palavra "${palavraInserida}" NÃO é um palíndromo\nPois é Diferente de sua inversão: "${palavraInvertida}"`)
//     }
// }
// palavraPalindromo();

//===============================================================
// FUNÇÃO EM SETA "Arrow Function", passando PARÂMETRO
// let palavraInserida = "tipo";
const palavraPalindromo = (palavraInserida) => {
    let palavraDividida = palavraInserida.split("");
    let letrasInvertidas = palavraDividida.reverse();
    let palavraInvertida = letrasInvertidas.join("");
    if(palavraInserida == palavraInvertida){
        console.log(`A Palavra: "${palavraInserida}" é um palíndromo\nPois é Igual a sua inversão: "${palavraInvertida}"`);
    }else{
        console.log(`A Palavra "${palavraInserida}" NÃO é um palíndromo\nPois é Diferente de sua inversão: "${palavraInvertida}"`)
    }
};
palavraPalindromo("teste");
