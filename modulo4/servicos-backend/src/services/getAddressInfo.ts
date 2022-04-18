import axios from "axios"
import { Address } from "../types"


export const getAddressInfo = async (cep: number): Promise<Address | null> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        const address: Address = {
            street: result.data.logradouro,
            district: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        };

        return address as Address;

    } catch (error: any) {
        console.log(error);
        return null;
    };
}