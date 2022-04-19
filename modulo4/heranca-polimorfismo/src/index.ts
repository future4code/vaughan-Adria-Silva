import { Customer } from "./customer";
import { User } from "./user";

// const newUser = new User(
//     `${Date.now()}`, 
//     "teste@teste.com", 
//     "astrodev", 
//     "123456"
// );

const custumer1 = new Customer(
    `${Date.now()}`, 
    "teste@teste.com", 
    "astrodev", 
    "123456",
    "master"
)

console.log(custumer1.purchaseTotal)
console.log(custumer1.getCreditCard())
console.log(custumer1.introduceYourself());
