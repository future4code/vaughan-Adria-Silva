import { Request, Response } from "express";
import { allUsers, allUsersAndPurchases} from "../data/migrations";
import { UserAndPurchases } from "../types";



export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        // const usersList: User[] = await allUsers();
        const rawUsersList = await allUsersAndPurchases();

        const usersList = rawUsersList.map((user: UserAndPurchases) => {
            if (!user.product_id) {
                const usersInfo = {
                    user_id: user.user_id,
                    user_name: user.user_name,
                    email: user.email,
                    password: user.password,
                    purchases: []
                };
                return usersInfo;
            };
            const purchasesInfo = [
                {
                    product_id: user.product_id,
                    product_name: user.product_name,
                    image_url: user.image_url,
                    price: user.price,
                    quantity: user.quantity,
                    total_price: user.total_price
                }
            ];
            const usersInfo = {
                user_id: user.user_id,
                user_name: user.user_name,
                email: user.email,
                password: user.password,
                purchases: purchasesInfo
            };
            return usersInfo;
        });
        
        for (let i: number = 0; i < usersList.length; i++) {
                if (i + 1 < usersList.length && usersList[i].user_id === usersList[i + 1].user_id) {
                    usersList[i].purchases.push(usersList[i + 1].purchases[0]);
                    usersList.splice(i + 1, 1);
                    i -= 1;
                };
        };


        res.status(200).send({usersList});
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    };
};