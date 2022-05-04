import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/user";

export class Authenticator {
    public generateToken(
        payload: AuthenticationData
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
    ): AuthenticationData {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData;
    };
};