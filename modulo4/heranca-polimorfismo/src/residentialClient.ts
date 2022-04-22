import { Client } from "./client";
import { Residence } from "./residence";

export class ResidentialClient extends Residence implements Client{
    private cpf: string
    public name: string
    public registrationNumber: number
    public consumedEnergy: number

    
    constructor (
        cpf: string,
        residentsQuantity: number,
        cep: string,
        name: string,
        registrationNumber: number,
        consumedEnergy: number
    ) {
        super(residentsQuantity, cep)
        this.cpf = cpf
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
    }

    public getCpf (): string {
        return this.cpf
    }

    public calculateBill(): number {
        return 0.75 * this.consumedEnergy
    }
}