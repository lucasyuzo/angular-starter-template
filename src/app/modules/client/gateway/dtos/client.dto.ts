export class ClientDTO {

    static isInstanceValid(instance: any): boolean {
        return (
            'firstName' in instance &&
            'lastName' in instance &&
            'age' in instance
        );
    }

    readonly firstName!: string;
    readonly lastName!: string;
    readonly age!: number;
}
