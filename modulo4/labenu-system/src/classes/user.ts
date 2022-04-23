export abstract class User {
    private id:string; 
    
    constructor (
        id:string,
        private name: string,
        private email: string,
        private birthDate: string,
        private classId: string
    ) {
        this.id = `${(Math.random()*Math.pow(10, 10)).toFixed}`;
    }

    public getId (): string {
        return this.id
    }

    public getName (): string {
        return this.name
    }

    public setName (name: string): void {
        this.name = name
    }

    public getEmail (): string {
        return this.email
    }

    public setEmail (email: string): void {
        this.email = email
    }

    public getBirthDate (): string {
        return this.birthDate
    }

    public setBirthDate (birthDate: string): void {
        this.birthDate = birthDate
    }

    public getClassId (): string {
        return this.classId
    }
} 