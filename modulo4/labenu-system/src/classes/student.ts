import { User } from "./user";

export class Student extends User {
    constructor (
        id:string,
        name: string,
        email: string,
        birthDate: string,
        classId: string,
        private hobbies: string[],
    ) {
        super(id, name, email, birthDate, classId)
    }

    public getHobbies (): string[] {
        return this.hobbies
    }

    public setHobbies (hobby: string): void {
        this.hobbies.push(hobby)
    }
} 