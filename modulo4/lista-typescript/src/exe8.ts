const renovarCarteira = (nascimento : string, emissao : string) : boolean => {
    const agora : number = Date.now();

    const cincoAnos : number = new Date(1975, 0, 1).getTime();
    const dezAnos : number = new Date(1980, 0, 1).getTime();
    const quinzeAnos : number = new Date(1985, 0, 1).getTime();
    const vinteAnos : number = new Date(1990, 0, 1).getTime();
    const cinquentaAnos : number = new Date(2020, 0, 1).getTime();

    const splitNascimento = nascimento.split("/");
    const splitEmissao = emissao.split("/");
    
    const nascimentoTimeStamp : number = new Date(Number(splitNascimento[2]), Number(splitNascimento[1]) -1, Number(splitNascimento[0])).getTime(); 
    const emissaoTimeStamp : number = new Date(Number(splitEmissao[2]), Number(splitEmissao[1]) -1, Number(splitEmissao[0])).getTime();
    
    const idadeTimeStamp : number = agora - nascimentoTimeStamp;
    const carteiraTimeStamp : number = agora - emissaoTimeStamp;
    
    if (idadeTimeStamp <= vinteAnos && carteiraTimeStamp >= cincoAnos) {
        return true;
    } else if (idadeTimeStamp > vinteAnos && idadeTimeStamp <= cinquentaAnos && carteiraTimeStamp >= dezAnos) {
        return true;
    } else if (idadeTimeStamp > cinquentaAnos && carteiraTimeStamp > quinzeAnos) {
        return true;
    } else {
        return false
    }
};

console.log(renovarCarteira("28/12/1995", "07/01/2021"));