// import app from "./app"

import { createTable } from "./data/migration";
import { getAddressInfo } from "./services/getAddressInfo";


const main = async () => {
    try {
        await createTable();
        const address = await getAddressInfo(60510196);
        console.log(address);
    } catch (error: any) {
        console.log(error)
    };
};

main();
