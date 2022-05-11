

describe("Testar função atacar com Mock", () => {
    test("Personagens válidos", () => {
        const mockPersonagemValido = jest.fn(() => {
            return true;
        });
    });

    test("Personagens inválidos", () => {
        const mockPersonagemInvalido = jest.fn(() => {
            return false
        });
    });
    
});