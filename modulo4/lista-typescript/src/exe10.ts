const validacaoCpf = (cpf : string) : boolean => {
    const arrayCpf : string[] = cpf.split("");
    arrayCpf.splice(3, 1)
    arrayCpf.splice(6, 1)
    arrayCpf.splice(9, 1)

    let somaDV1 : number = 0;
    let somaDV2 : number = 0;

    let sequencia : number = 10
    for (let i : number = 0; i < arrayCpf.length - 2; i++) {
        somaDV1 +=  Number(arrayCpf[i]) * sequencia;
        sequencia--;   
    }

    let DV1 : number = 0;
    let subtracaoDV1 : number = 11 - (somaDV1 % 11);
    if (subtracaoDV1 < 10) {DV1 = subtracaoDV1};
    

    sequencia = 11;
    for (let i : number = 0; i < arrayCpf.length - 1; i++) {
        somaDV2 +=  Number(arrayCpf[i]) * sequencia;
        sequencia--;   
    }

    let DV2 : number = 0;
    let subtracaoDV2 : number = 11 - (somaDV2 % 11);
    if (subtracaoDV2 < 10) {DV2 = subtracaoDV2};

    if (
        Number(arrayCpf[arrayCpf.length -1]) === DV2 
        && Number(arrayCpf[arrayCpf.length -2]) === DV1 
    ) {
        return true;
    }else {
        return false;
    }
};

console.log(validacaoCpf("051.350.583-03"));