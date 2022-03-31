enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type InfoFilme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

const infosFilmeEscolhido = (nome : string, ano : number, genero : GENERO,
pontuacao? : number) : InfoFilme=> {

    if (!pontuacao) {
        const filme : InfoFilme = {
            nome: nome,
            ano: ano,
            genero: genero
        }
        return filme;
    } else{
        const filme : InfoFilme = {
            nome: nome,
            ano: ano,
            genero: genero,
            pontuacao: pontuacao
        }
        return filme;
    };
};

console.log(infosFilmeEscolhido("Duna", 2021, GENERO.ACAO, 74));
console.log(infosFilmeEscolhido("Duna", 2021, GENERO.ACAO));