import { Client } from "./client";
import { Commerce } from "./commerce";

export class CommercialClient  extends Commerce implements Client{
    constructor (
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number, 
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj (): string {
        return this.cnpj
    }

    calculateBill(): number {
        return 0.75 * 0.7 * this.consumedEnergy
    }
}