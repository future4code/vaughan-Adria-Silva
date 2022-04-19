import { EnergyClient } from "./EnergyClient";
import { Customer } from "./customer";
import { User } from "./user";
import { Place } from "./place";


// Testes dos exercícios de Herança
// const newUser = new User(
//     `${Date.now()}`, 
//     "teste@teste.com", 
//     "astrodev", 
//     "123456"
// );
// const custumer1 = new Customer(
//     `${Date.now()}`, 
//     "teste@teste.com", 
//     "astrodev", 
//     "123456",
//     "master"
// )
// console.log(custumer1.purchaseTotal)
// console.log(custumer1.getCreditCard())
// console.log(custumer1.introduceYourself());

// Testes de polimorfismo

const comercialClient1 = new EnergyClient(
    "Astrodev",
    21712693,
    100
);
console.log(comercialClient1)
console.log(comercialClient1.calculateBill())

// const myPlace = new Place()