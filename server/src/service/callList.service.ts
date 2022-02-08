import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";
import { User } from "../model/user.interface";

// In-Memory Store
const callLists : { [key: number]: CallList } = {};
const contacts : { [key: number]: Contact } = {}; 


export const getCallList = async () : Promise<Array<CallList>> => {
    return Object.values(callLists);
}

export const createCallList = async (creator: User, contacts: Array<Contact>, decription: string) : Promise<CallList> => {
    const id = new Date().valueOf();
    callLists[id] = {
        id: id,
        creator: creator,
        contacts: contacts,
        decription: decription
 };
    return callLists[id];
}

export const editCallList = async (id:number, creator: User, contacts: Array<Contact>, decription: string) : Promise<CallList> => {
    callLists[id] = {
        id: id,
        creator: creator,
        contacts: contacts,
        decription: decription
    };
    return callLists[id];
   }

export const deleteCallList = async (id: number) : Promise<boolean> =>{
    const callList : CallList = callLists[id];
    if (! callList) return false;
    delete callLists[id];
    return true;
}

export const addContact = async (callListId: number, name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) : Promise<boolean> => {
    
    const callList : CallList = callLists[callListId];
    if (!callList) return false;
    
    const id = new Date().valueOf();

    contacts[id] = {
       id: id,
       name: name,
       company: company,
       position: position,
       telephoneNumber: telephoneNumber,
       email: email,
       status: 4,
       comment: comment
    };

    callList.contacts.push(contacts[id]);
    
    return true;
   }
   

//TODO
//add contact to call list