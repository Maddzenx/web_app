import { Contact } from "./contact.interface";
import { User } from "./user.interface";

export interface CallList {
    id: number;
    creator: User;
    contacts: Contact;
    decription: string;
}