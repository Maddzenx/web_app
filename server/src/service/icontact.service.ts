import { Contact } from "../model/contact.interface";

export interface IContactService {
getContact(callListID: number) : Promise<Array<Contact>>
createContact(callListID: number, name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) : Promise<Contact>
editContact(id: number, name: string, telephoneNumber: string) : Promise<Contact>
changeStatus(id: number, status: number) : Promise<Contact>
deleteContact(id: number) : Promise<Boolean>
}