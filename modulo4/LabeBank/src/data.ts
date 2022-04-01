export type Client = {
    name: string,
    cpf: string,
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
        cpf: "111.111.111-11",
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
        cpf: "222.222.222-22",
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
        cpf: "333.333.333-33",
        birth: "12/07/1997",
        balance: 50000,
        statment: []
    },

];