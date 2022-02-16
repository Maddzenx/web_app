// edit
// create
// delete 

import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";
import { User } from "../model/user.interface";

// In-Memory Store
const callLists : { [key: number]: CallList } = {};
const contacts : { [key: number]: Contact } = {}; 
const users : { [key: number]: User } = {}; 


export const createUser = async (username: string, email: string, password: string, callLists: Array<CallList>) : Promise<User> => {
    const id = new Date().valueOf();
    users[id] = {
        username: username,
        email: email,
        password: password,
        callLists: callLists
 };
    return users[id];
}

export const editUser = async (id: number, username: string, email: string, password: string, callLists: Array<CallList>) : Promise<User> => {
    users[id] = {
        username: username,
        email: email,
        password: password,
        callLists: callLists
    };
    return users[id];
   }

export const deleteUser = async (id: number) : Promise<boolean> =>{
    const user : User = users[id];
    if (!user) return false;

    delete users[id];

    return true;
}


