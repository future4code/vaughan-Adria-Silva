import { Personagem } from "../src";
import { atacar, atacarComInjecaoDeDependencias } from "../src/atacar";


describe("Testar função atacar com Mock", () => {
    test("Personagens válidos", () => {
        const mockPersonagemValido = jest.fn(() => {
            return true;
        });

        const atacante: Personagem = {
            nome: "Pikachu",
            vida: 1500,
            defesa: 500,
            forca: 500
        };

        const defensor: Personagem = {
            nome: "Meowth",
            vida: 1500,
            defesa: 300,
            forca: 500
        };

        const result: Personagem = atacarComInjecaoDeDependencias(
            atacante,
            defensor,
            mockPersonagemValido
        );

        expect(result.vida).toBe(1300);
        expect(mockPersonagemValido).toHaveBeenCalled();
        expect(mockPersonagemValido).toHaveBeenCalledTimes(2);
        expect(mockPersonagemValido).toHaveReturnedTimes(2);
    });

    test("Personagens inválidos", () => {
        const mockPersonagemInvalido = jest.fn(() => {
            return false
        });

        try {
            const atacante: Personagem = {
                nome: "Pikachu",
                vida: 1500,
                defesa: 500,
                forca: 500
            };

            const defensor: Personagem = {
                nome: "Meowth",
                vida: 1500,
                defesa: -300,
                forca: 500
            };

            atacarComInjecaoDeDependencias(
                atacante,
                defensor,
                mockPersonagemInvalido
            );
        } catch (error: any) {
            expect(error.message).toBe("Personagem inválido");
            expect(mockPersonagemInvalido).toHaveBeenCalled();
            expect(mockPersonagemInvalido).toHaveBeenCalledTimes(1);
            expect(mockPersonagemInvalido).toHaveReturnedTimes(1);
        };
    });

});