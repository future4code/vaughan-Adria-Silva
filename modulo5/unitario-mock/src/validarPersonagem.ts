import { Personagem } from ".";

export const validarPersonagem = (input: Personagem): boolean => {
    if (!input.nome || !input.vida || !input.defesa || !input.forca) {
        return false;
    }

    if (input.vida <= 0 || input.forca <= 0 || input.defesa <= 0) {
        return false;
    }

    return true;
};