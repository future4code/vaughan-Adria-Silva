import { User } from "./user";

export class Student extends User {
    constructor (
        name: string,
        email: string,
        birthDate: string,
        classId: string,
        private hobbies: string[],
    ) {
        super(name, email, birthDate, classId)
    }

    public getHobbies (): string[] {
        return this.hobbies
    }

    public setHobbies (hobby: string): void {
        this.hobbies.push(hobby)
    }
} 