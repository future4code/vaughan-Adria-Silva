# Herança
### Exercício 1
#### a)
Não, pois não existe um método público para ler o atributo password.

#### b)
Uma única vez.

### Exercício 2
#### a)
Uma única vez.

#### b)
Uma única vez qunado o construtor-pai da classe User foi chamado pelo super dentro do construtor-filho da classe classe Customer.

### Exercício 3
#### a)
Não, pois password é um atributo privado. A classe filha não tem acesso a ele e não há um método get público na classe mãe User que ofereça que poderia acessá-lo.

### Exercícios 4 e 5
Alteração do código da classe User

## Polimorfismo
### Exercício 1
#### a)
Consegui imprimir todos já que estão setadas como públicas.

### Exercício 2
#### a)
Cannot create an instance of an abstract class - não pode criar instância para classe abstrata

#### b)
Não usar abstract.
Explicado depois: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

### Exercício 3
#### a)
Cannot create an instance of an abstract class - não pode criar instância para classe abstrata

### Exercíci 4
#### a)
A classe possui cpf e todos os métodos e atributos da classe Residence, Place e da interface Client, uma vez que a classe ResidentialClient é filha da classe Residance que é é filha da classe Place, além de ResidentialClient usar a interface Client.

### Exercíci 5
#### a)
Assim como na classe ResidentialClient, CommercialClient possui os mesmos atributos da interface Client e classe Place.

#### b)
O cálculo do valor da conta de luz em calculateBill() e o atributo floorsQuantity, herdado da classe mãe Commerce.

### Exercíci 6
#### a)
IndustrialClient deve ser filha de Industry para ter acesso ao atributo machinesQuantity e ao cep.

#### b)
Client, pôs todo cliente da empresa de energia deve ter um name, registrationNumber, consumedEnergy e o método calculateBill.

#### c)
Para não ser possível alterar o industryNumber.