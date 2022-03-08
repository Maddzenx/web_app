import { Contact } from "../model/contact.interface";
import { IContactService } from "./icontact.service";
import { Model } from "mongoose";
import { connectToContactDB } from "../db/contact.db";

class ContactDBService implements IContactService {
    private contactModel : Model<Contact>

    constructor(contactModel : Model<Contact>) {
        this.contactModel = contactModel;
    }
    async getContact(): Promise<Contact[]> {
        return await this.contactModel.find();
    }

    async createContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string): Promise<Contact> {
        return await this.contactModel.create({
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
        await this.contactModel.updateOne({id: id},
            {name: name, 
            company: company,
            position: position,
            telephoneNumber: telephoneNumber, 
            email: email, 
            comment: comment
        });

        const doc = await this.contactModel.findOne({id: id});
        if (doc === null)
            throw new Error("No document with id " + id);
        else return doc;
    }
    
    async changeStatus(id: number, status: number): Promise<Contact> {
        await this.contactModel.updateOne({id: id},
            { status: status
        });

        const doc = await this.contactModel.findOne({id: id});
        if (doc === null)
            throw new Error("No document with id " + id);
        else return doc;
    }

    async deleteContact(contactId: number): Promise<Boolean> {
        this.contactModel.findByIdAndDelete(contactId);
        return true;
    }
}

export async function contactDBService() : Promise<IContactService> {
    return new ContactDBService(await connectToContactDB());
}