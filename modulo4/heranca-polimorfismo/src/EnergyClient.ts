import { Client } from "./client"

export class EnergyClient implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number

    ) {}

    public calculateBill(): number {
        return 2
    }
}