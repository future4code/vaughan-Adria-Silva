// import app from "./app"

import { getAddressInfo } from "./services/getAddressInfo";


const main = async () => {
    try {
        const address = await getAddressInfo(60510196);
        console.log(address);
    } catch (error: any) {
        console.log(error)
    };
};

main();
