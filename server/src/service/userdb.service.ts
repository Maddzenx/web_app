import { IUserService } from "./iuser.service";
import { userModel } from "../db/user.db";
import { User } from "../model/user.interface";

class UserDBService implements IUserService {

    async getUser(): Promise<User[]> {
        const us = await userModel;
        return await us.find();
    }

    async createUser(username: string, email: string, password: string): Promise<User> {
        if (!username) {
            throw new Error("Missing username\n");
        }
        if (!email) {
            throw new Error("Missing email\n");
        }
        if (!password) {
            throw new Error("Missing password\n");
        }
        const us = await userModel;
        return await us.create({
            id: new Date().valueOf(),
            username: username,
            email: email,
            password: password
        })
    }

    async logInUser(email: string, password: string): Promise<User> {

        if (!email) {
            throw new Error("Missing email\n");
        }
        if (!password) {
            throw new Error("Missing password\n");
        }
        const us = await userModel;
        const doc = await us.findOne({ email: email, password: password });

        if (doc === null)
            throw new Error("No account with email " + email);
        else return doc;
    }



    async editUser(id: number, username: string, email: string, password: string): Promise<User> {
        const us = await userModel;
        await us.updateOne({ id: id },
            {
                username: username,
                email: email,
                password: password
            });

        const doc = await us.findOne({ id: id });
        if (doc === null)
            throw new Error("No document with id " + id);
        else return doc;
    }

    async deleteUser(id: number): Promise<Boolean> {
        if (id < 0) {
            throw new Error("Id can't be negative\n");
        }
        const us = await userModel;
        await us.findByIdAndDelete(id);

        const doc = await us.findOne({ id: id });

        if (doc == null) {
            return true;
        } else return false;
    }
}

export const userDBService = new UserDBService();