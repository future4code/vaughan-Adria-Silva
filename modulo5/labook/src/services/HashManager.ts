import * as bcryptjs from 'bcryptjs';

export class HashManager {
    public async createHash(text: string): Promise<string> {
        const cost = Number(process.env.BCRYPT_COST)
        const salt = await bcryptjs.genSalt(cost);
        
        return bcryptjs.hash(text, salt);
    };

    public async compareHash(text: string, hash:string): Promise<boolean> {
        
        return bcryptjs.compare(text, hash);
    };
};