import { Stats } from "fs";
import { Contact } from "../model/contact.interface";

export interface IContactService {
    getContact() : Promise<Array<Contact>>
    createContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) : Promise<Contact>
    editContact(id:number, name: string, company: string, position: string, telephoneNumber: string, email: string, status: number, comment: string) :  Promise<Contact>
    markSuccess(id: number) : Promise<boolean>
    markCallLater(id: number) : Promise<boolean>
    markNotInterested(id: number) : Promise<boolean> 
    markNoAnswer(id: number) : Promise<boolean> 
    markNoStatus(id: number) : Promise<boolean>
    deleteContact(id: number) : Promise<boolean> 
}

export class ContactService implements IContactService {
    private contacts : { [key : number] : Contact };

    constructor(contacts : { [key : number] : Contact }) {
        this.contacts = contacts;
    }


    // In-Memory Store
    //const contacts : { [key: number]: Contact } = {};

    getContact = async () : Promise<Array<Contact>> => {
        return Object.values(this.contacts);
    }

    createContact = async (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) : Promise<Contact> => {
    const id = new Date().valueOf();
    this.contacts[id] = {
        id: id,
        name: name,
        company: company,
        position: position,
        telephoneNumber: telephoneNumber,
        email: email,
        status: 4,
        comment: comment
    };
    return this.contacts[id];
    }

    editContact = async (id:number, name: string, company: string, position: string, telephoneNumber: string, email: string, status: number, comment: string) : Promise<Contact> => {
        this.contacts[id] = {
        id: id,
        name: name,
        company: company,
        position: position,
        telephoneNumber: telephoneNumber,
        email: email,
        status: status,  
        comment: comment
        };
        return this.contacts[id];
    }

    markSuccess = async (id: number) : Promise<boolean> =>{

        const contact : Contact = this.contacts[id];
        if (! contact) return false;
        contact.status = 0;
        this.contacts[id] = contact;
        return true;
    }

    markCallLater = async (id: number) : Promise<boolean> =>{
        const contact : Contact = this.contacts[id];
        if (! contact) return false;
        contact.status = 1;
        this.contacts[id] = contact;
        return true;
    }

    markNotInterested = async (id: number) : Promise<boolean> =>{
        const contact : Contact = this.contacts[id];
        if (! contact) return false;
        contact.status = 2;
        this.contacts[id] = contact;
        return true;
    }

    markNoAnswer = async (id: number) : Promise<boolean> =>{
        const contact : Contact = this.contacts[id];
        if (! contact) return false;
        contact.status = 3;
        this.contacts[id] = contact;
        return true;
    }

    markNoStatus = async (id: number) : Promise<boolean> =>{
        const contact : Contact = this.contacts[id];
        if (! contact) return false;
        contact.status = 4;
        this.contacts[id] = contact;
        return true;
    }

    deleteContact = async (id: number) : Promise<boolean> =>{
        const contact : Contact = this.contacts[id];
        if (! contact) return false;
        delete this.contacts[id];
        return true;
    }

}

export function getContact(): Contact[] | PromiseLike<Contact[]> {
    throw new Error("Function not implemented.");
}


export function createContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string): Contact | PromiseLike<Contact> {
    throw new Error("Function not implemented.");
}


export function editContact(id: number, name: string, company: string, position: string, telephoneNumber: string, email: string, status: number, comment: string): Contact | PromiseLike<Contact> {
    throw new Error("Function not implemented.");
}


export function deleteContact(id: number): boolean | PromiseLike<boolean> {
    throw new Error("Function not implemented.");
}


export function markSuccess(id: number): boolean | PromiseLike<boolean> {
    throw new Error("Function not implemented.");
}


export function markCallLater(id: number): boolean | PromiseLike<boolean> {
    throw new Error("Function not implemented.");
}


export function markNotInterested(id: number): boolean | PromiseLike<boolean> {
    throw new Error("Function not implemented.");
}


export function markNoAnswer(id: number): boolean | PromiseLike<boolean> {
    throw new Error("Function not implemented.");
}


export function markNoStatus(id: number): boolean | PromiseLike<boolean> {
    throw new Error("Function not implemented.");
}
