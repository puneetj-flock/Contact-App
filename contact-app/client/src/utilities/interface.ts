export interface ContactInterface {
    id: number,
    userId:number,
    name: string,
    contact: string,
    email: string,
    address: string,
    score: number
}
export interface UserInterface {
    name? : string, 
    email : string, 
    password : string
}