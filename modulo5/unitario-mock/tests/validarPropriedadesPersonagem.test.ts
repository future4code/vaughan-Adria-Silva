import { validarPersonagem } from "../src/validarPersonagem"


describe("Verificar propriedades inválidas", () => {
    test("personagem com o nome vazio", () => {
        const result = validarPersonagem({
            nome: "",
            vida: 1000,
            defesa: 500,
            forca: 500
        });

        expect(result).toBe(false);
    });

    test("personagem com a vida igual a zero", () => {
        const result = validarPersonagem({
            nome: "Pikachu",
            vida: 0,
            defesa: 500,
            forca: 500
        });

        expect(result).toBe(false);
    });

    test("personagem com a força igual a zero", () => {
        const result = validarPersonagem({
            nome: "Pikachu",
            vida: 1000,
            defesa: 500,
            forca: 0
        });

        expect(result).toBe(false);
    });

    test("personagem com a defesa igual a zero", () => {
        const result = validarPersonagem({
            nome: "Pikachu",
            vida: 1000,
            defesa: 0,
            forca: 500
        });

        expect(result).toBe(false);
    });

    test("personagem com vida/força/defesa com um valor negativo", () => {
        const result = validarPersonagem({
            nome: "Pikachu",
            vida: 1000,
            defesa: -30,
            forca: 500
        });

        expect(result).toBe(false);
    });
    
    test("personagem com as informações validas", () => {
        const result = validarPersonagem({
            nome: "Pikachu",
            vida: 1000,
            defesa: 500,
            forca: 500
        });

        expect(result).toBe(true);
    });
})