import { User } from "../model/user.interface";

export interface IUserService {
    getUser() : Promise<User[]>
    createUser(username: string, email: string, password: string) : Promise<User>
    logInUser(username: string, password: string) : Promise<User>
    
}