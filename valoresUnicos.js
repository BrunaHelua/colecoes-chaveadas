const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    //se apenas pedir para retornar mySet, dados serão retornados em formato ~Set~
    //return mySet;
    //em um array vazio, colocar argumento rest(?não ficou claro na aula se era spread ou set, professora falou no segundo final da aula) [...mySet], os valores do myArray passam pelo set, são organizados e é retornado o array dos valores selecionados pelo mySet
    return [...mySet]
}

console.log(valoresUnicos(myArray));
