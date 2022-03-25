const quantidadeAnagramas = (palavra : string) : number => {
    let quantidadeAnag : number = 1;
    let numerosLetras : number = palavra.length;
    let i :number = numerosLetras;

    if (numerosLetras > 1) {
        while ( i > 1 ) {
            quantidadeAnag = quantidadeAnag * i;
            i--;
        }
    } else {
        return 1;
    }
    return quantidadeAnag;
};

console.log(quantidadeAnagramas("mesa"));