import { Contact } from "./contact.interface";
import { User } from "./user.interface";

export interface CallList {
    id: number;
    title: string;
    creator: string;
    contacts: Array<Contact>;
    description?: string;
}