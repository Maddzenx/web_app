import { Contact } from "./contact.interface";


export interface CallList {
    id: number;
    title: string;
    creator: string;
    contacts: Array<Contact>;
    description?: string;
}