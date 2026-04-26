import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {

    async encryptPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltOrRounds);
        return hashPassword;
    }

    async decodePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}