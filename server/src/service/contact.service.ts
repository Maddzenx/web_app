import { Contact } from "../model/contact.interface";

// In-Memory Store
const contacts : { [key: number]: Contact } = {};


export const getContact = async () : Promise<Array<Contact>> => {
    return Object.values(contacts);
}

export const createContact = async (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) : Promise<Contact> => {
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
 return contacts[id];
}

export const editContact = async (id:number, name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) : Promise<Contact> => {
    contacts[id] = {
       id: id,
       name: name,
       company: company,
       position: position,
       telephoneNumber: telephoneNumber,
       email: email,
       status: 4,  // Fixa senare, kommer sätta till no status varje gång en editar
       comment: comment
    };
    return contacts[id];
   }

export const markSuccess = async (id: number) : Promise<boolean> =>{

    const contact : Contact = contacts[id];
    if (! contact) return false;
    contact.status = 0;
    contacts[id] = contact;
    return true;
}

export const markCallLater = async (id: number) : Promise<boolean> =>{
    const contact : Contact = contacts[id];
    if (! contact) return false;
    contact.status = 1;
    contacts[id] = contact;
    return true;
}

export const markNotInterested = async (id: number) : Promise<boolean> =>{
    const contact : Contact = contacts[id];
    if (! contact) return false;
    contact.status = 2;
    contacts[id] = contact;
    return true;
}

export const markNoAnswer = async (id: number) : Promise<boolean> =>{
    const contact : Contact = contacts[id];
    if (! contact) return false;
    contact.status = 3;
    contacts[id] = contact;
    return true;
}

export const markNoStatus = async (id: number) : Promise<boolean> =>{
    const contact : Contact = contacts[id];
    if (! contact) return false;
    contact.status = 4;
    contacts[id] = contact;
    return true;
}

export const deleteContact = async (id: number) : Promise<boolean> =>{
    const contact : Contact = contacts[id];
    if (! contact) return false;
    delete contacts[id];
    return true;
}