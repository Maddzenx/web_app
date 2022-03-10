import { Contact } from "../model/contact.interface";
import { IContactService } from "./icontact.service";

export class ContactService implements IContactService{
        
        private contacts: { [key: number]: Contact };

        constructor(contacts: { [key: number]: Contact }) {
            this.contacts = contacts;
        }


        getContact : () => Promise<Contact[]> = async () => {
            return Object.values(this.contacts);
        }

        createContact : (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) => Promise<Contact>
        = async (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) => {
            const newContact: Contact = {
                id: new Date().valueOf(),
                name: name,
                company: company,
                position: position,
                telephoneNumber: telephoneNumber,
                email: email,
                comment: comment,
                status: 4 
            }
            this.contacts[newContact.id] = newContact;
                
            return newContact;
        }

        editContact : (id: number, name: string, company: string, position: string, telephoneNumber: string, email: string, status: number, comment: string) => Promise<Contact>
        = async (id: number, name: string, company: string, position: string, telephoneNumber: string, email: string, status: number, comment: string) => {
            
            const contact: Contact = this.contacts[id] = {
                id: id,
                name: name,
                company: company,
                position: position,
                telephoneNumber: telephoneNumber,
                email: email,
                status: status,  
                comment: comment
                };
                return contact;
        }

        changeStatus : (id: number, status: number) => Promise<Contact> = async (id: number, status: number) => {
            const contact: Contact = this.contacts[id];
            contact.status = status;
                return contact;
        }

        deleteContact : (id: number) => Promise<Boolean> = async (id: number) => {
            const contact : Contact = this.contacts[id];
            if (! contact) return false;
            delete this.contacts[id];
            return true;
        }
        
    }

    export function makeContactService(): ContactService {
        return new ContactService({});
    }

   