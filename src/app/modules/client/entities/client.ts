export class Client {

    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private age: number
    ) { }

    getId(): string {
        return this.id;
    }

    setId(value: string): void {
        this.id = value;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(value: string): void {
        this.firstName = value;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(value: string): void {
        this.lastName = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(value: number): void {
        this.age = value;
    }

}
