

// EXERCÍCIO 1
// A) O construtor serve para construir uma instância a partir dos 
// atributos recebidos e toda classe possui um construtor, mesmo que 
// não seja colocado no código. Para chamá-lo, é necessário criar uma 
// nova instância.

// B) A mensagem "Chamando o construtor da classe User" foi impressa no 
// terminal apenas 1 vez.

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
// };

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number, transactions: Transaction[]) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions
    };

    public getCpf (): string {
        return this.cpf;
    };

    public setCpf (newCpf: string): void {
        this.cpf = newCpf;
    };

    public getName (): string {
        return this.name;
    };

    public setName (newName: string): void {
        this.name = newName;
    };

    public getAge (): number {
        return this.age;
    };

    public setAge (newAge: number): void {
        this.age = newAge;
    };

    public getBalance (): number {
        return this.balance;
    };

    public setBalance (newBalance: number): void {
        this.balance = newBalance;
    };

    public getTransactions (): string {
        return this.cpf;
    }

    public setTransaction (newTransaction: Transaction): void {
        const transactionHistory = this.transactions;
        this.transactions = [
            ...transactionHistory,
            newTransaction
        ];
    };
};

// const minhaConta: UserAccount = new UserAccount("123456789-00", "Ádria", 26, []);

// C) O acesso à atributos privados se dão por meio de métodos getters e
// setters estabelecidos como público.

// EXERCÍCIO 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    };

    public getDescription (): string {
        return this.description;
    };

    public setDescription (newDescription: string): void {
        this.description = newDescription;
    };

    public getValue (): number {
        return this.value;
    };

    public setValue (newValue: number): void {
        this.value = newValue;
    };

    public getDate (): string {
        return this.date;
    };

    public setDate (newDate: string): void {
        this.date = newDate;
    };
};

const meuExtrato: Transaction = new Transaction("depósito", 3000, "18/04/2022");
const minhaConta: UserAccount = new UserAccount("123456789-00", "Ádria", 26, [meuExtrato]);

const meuExtrato2: Transaction = new Transaction("depósito", 5000, "18/04/2022");
minhaConta.setTransaction(meuExtrato2);
console.log(minhaConta);

// EXERCÍCIO 3

class Bank {
    private accounts: UserAccount[] = [];

    public getAccounts (): UserAccount[] {
        return this.accounts;
    }

    public setAccounts (newAccount: UserAccount): void {
        const allAccounts = this.accounts;
        this.accounts = [
            ...allAccounts,
            newAccount
        ];
    };
}