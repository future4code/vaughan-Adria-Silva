import { Place } from "./place";

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    }
}