import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/authentication";

export class Authenticator {
    public generateToken(
        payload: authenticationData
    ): string {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        );
    };

    getTokenData(
        token: string
    ): authenticationData {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData;
    };
};