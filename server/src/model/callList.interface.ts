import { Contact } from "./contact.interface";
import { User } from "./user.interface";

export interface CallList {
    id: number;
    creator: string;
    contacts: Array<Contact["id"]>;
    decription: string;
}