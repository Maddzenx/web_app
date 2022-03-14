import { User } from "../model/user.interface";

export interface IUserService {
    getUser() : Promise<User[]>
    createUser(username: string, email: string, password: string) : Promise<User>
    logInUser(email: string, password: string) : Promise<User>
    editUser(id: number, username: string, email: string, password: string) : Promise<User>
    deleteUser(id: number) : Promise<Boolean>    
}