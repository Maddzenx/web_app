import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";
import { User } from "../model/user.interface";

// In-Memory Store
const callLists : { [key: number]: CallList } = {};
const contacts : { [key: number]: Contact } = {}; 


export const getCallList = async () : Promise<Array<CallList>> => {
    return Object.values(callLists);
}

export const createCallList = async (creator: string, contacts: Array<Contact["id"]>, decription: string) : Promise<CallList> => {
    const id = new Date().valueOf();
    callLists[id] = {
        id: id,
        creator: creator,
        contacts: [],
        decription: decription
 };
    return callLists[id];
}

export const editCallList = async (id:number, creator: string, contacts: Array<Contact["id"]>, decription: string) : Promise<CallList> => {
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

export const addContact = async (contactId : Contact["id"], callListId : CallList["id"]) : Promise<boolean> => {
    
    const contact : Contact = contacts[contactId];
    if (contact) return false; //om contact redan är i list --> return false

    callLists[callListId].contacts.push(contactId);
    
    return true;
}