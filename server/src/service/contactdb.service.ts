import { Contact } from "../model/contact.interface";
import { IContactService } from "./icontact.service";
import { contactModel } from "../db/contact.db";


class ContactDBService implements IContactService {
    
    async getContact(): Promise<Contact[]> {
        const cm = await contactModel;
        return await cm.find();
    }

    async createContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string): Promise<Contact> {
        const cm = await contactModel;
        return await cm.create({
            name: name, 
            company: company, 
            position: position, 
            telephoneNumber: telephoneNumber, 
            email: email, 
            comment: comment
        }
        );
    }

    async editContact(id: number, name: string, company: string, position: string, telephoneNumber: string, email: string, status: number, comment: string): Promise<Contact> {
        const cm = await contactModel;
        await cm.updateOne({id: id},
            {name: name, 
            company: company,
            position: position,
            telephoneNumber: telephoneNumber, 
            email: email, 
            comment: comment
        });

        const doc = await cm.findOne({id: id});
        if (doc === null)
            throw new Error("No document with id " + id);
        else return doc;
    }
    
    async changeStatus(id: number, status: number): Promise<Contact> {
        const cm = await contactModel;
        await cm.updateOne({id: id},
            { status: status
        });

        const doc = await cm.findOne({id: id});
        if (doc === null)
            throw new Error("No document with id " + id);
        else return doc;
    }

    async deleteContact(contactId: number): Promise<Boolean> {
        const cm = await contactModel;
        cm.findByIdAndDelete(contactId);
        return true;
    }
}

export const contactDBService = new ContactDBService();