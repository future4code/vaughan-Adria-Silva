import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../Types/User";

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

    public getTokenData(
        token: string
    ): AuthenticationData {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData;
    };
};