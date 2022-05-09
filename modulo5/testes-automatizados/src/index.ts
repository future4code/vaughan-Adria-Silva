import { User } from "./types";

function performPurchase(user: User, value: number): User | undefined {
    if (value >= user.balance) {
        return {
            name: user.name,
            balance: user.balance - value
        };
    };

    return undefined;
};