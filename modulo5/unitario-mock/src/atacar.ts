import { Personagem } from ".";
import { validarPersonagem } from "./validarPersonagem"


export const atacar = (
    atacante: Personagem,
    defensor: Personagem
) => {

    const validacaoAtacante = validarPersonagem(atacante);
    const validacaoDefensor = validarPersonagem(defensor);

    if (!validacaoAtacante || !validacaoDefensor) {
        throw new Error("Personagem inválido");
    }

    if (atacante.forca > defensor.defesa) {
        defensor.vida -= (atacante.forca - defensor.defesa);
    };
};

export const atacarComInjecaoDeDependencias = (
    atacante: Personagem,
    defensor: Personagem,
    validador: (input: Personagem) => boolean
) => {
    if (!validador(atacante)|| !validador(defensor)) {
        throw new Error("Personagem inválido");
    }

    if (atacante.forca > defensor.defesa) {
        defensor.vida -= (atacante.forca - defensor.defesa);
    };
};



