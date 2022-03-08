import { Contact } from "../model/contact.interface";

export interface IContactService {
getContact() : Promise<Array<Contact>>
createContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) : Promise<Contact>
editContact(id:number, name: string, company: string, position: string, telephoneNumber: string, email: string, status: number, comment: string) : Promise<Contact>
changeStatus(id: number, status: number) : Promise<Contact>
deleteContact(id: number) : Promise<Boolean>
}