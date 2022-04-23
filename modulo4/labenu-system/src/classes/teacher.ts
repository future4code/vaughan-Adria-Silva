import { User } from "./user";

export class Teacher extends User {
    constructor (
        id:string,
        name: string,
        email: string,
        birthDate: string,
        classId: string,
        private specialties: string[]
    ) {
        super(id, name, email, birthDate, classId)
    }

    public getSpecialties (): string[] {
        return this.specialties
    }

    public setSpecialties (hobby: string): void {
        this.specialties.push(hobby)
    }
} 