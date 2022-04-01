export type Client = {
    name: string,
    cpf: number,
    birth: string,
    balance: number,
    statment: Transaction[]
};

export type Transaction = {
    value: number,
    date: string,
    description: OPERATION
};

export enum OPERATION {
    PAGAMENTO = "pagamento",
    TRANSFERENCIA = "transferencia",
    ADICIONAR = "adicionar"
};

export const dataBank: Client[]= [
    {
        name: "Flavio Motta",
        cpf: 11111111111,
        birth: "24/02/2000",
        balance: 10000,
        statment: [
            {
                value: 150,
                date: "15/03/2022",
                description: OPERATION.PAGAMENTO
            },
            {
                value: 500,
                date: "01/04/2022",
                description: OPERATION.TRANSFERENCIA
            }
        ]
    },
    {
        name: "Izabella Brandao",
        cpf: 22222222222,
        birth: "01/04/2004",
        balance: 100000,
        statment: [
            {
                value: 5000,
                date: "01/04/2022",
                description: OPERATION.ADICIONAR
            },
            {
                value: 90.99,
                date: "01/03/2022",
                description: OPERATION.PAGAMENTO
            },
            {
                value: 500,
                date: "08/02/2022",
                description: OPERATION.TRANSFERENCIA
            },
            {
                value: 150,
                date: "20/02/2022",
                description: OPERATION.PAGAMENTO
            }
        ]
    },
    {
        name: "Pauleany Prince",
        cpf: 33333333333,
        birth: "12/07/1997",
        balance: 50000,
        statment: []
    },

];