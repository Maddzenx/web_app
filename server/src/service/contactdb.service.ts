import { Contact } from "../model/contact.interface";
import { IContactService } from "./icontact.service";
import { contactModel } from "../db/contact.db";


class ContactDBService implements IContactService {
    
    async getContact(callListID: number): Promise<Contact[]> {  // lägg till callListID attribute på contact i create osv, skicka in callList id när denna callas och skicka tiibaka array med contacts som tillhör den callListen
        const cm = await contactModel;
        return await cm.find({callListID:callListID});
    }

    async createContact(callListID: number, name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string): Promise<Contact> {
        const cm = await contactModel;
        return await cm.create({
            id: new Date().valueOf(),
            callListID: callListID,
            name: name, 
            company: company, 
            position: position, 
            telephoneNumber: telephoneNumber, 
            email: email, 
            comment: comment,
            status: 4
        }
        );
    }

    async editContact(id: number, name: string, telephoneNumber: string): Promise<Contact> {
        const cm = await contactModel;
        await cm.updateOne({id: id},
            {name: name, 
            
            
            telephoneNumber: telephoneNumber, 
            
        });

        const doc = await cm.findOne({id: id});
        if (doc === null)
            throw new Error("No document with id " + id);
        else return doc;
    }
    
   /* async changeStatus(id: number, status: number): Promise<Contact> {
        const cm = await contactModel;
        await cm.updateOne({id: id},
            { status: status
        });

        const doc = await cm.findOne({id: id});
        if (doc === null)
            throw new Error("No document with id " + id);
        else return doc;
    }*/

    async deleteContact(contactId: number): Promise<Boolean> {
        const cm = await contactModel;
        
        await cm.deleteOne({ id: (contactId) }).exec() 
        
        const doc = await cm.findOne({id: contactId});

        if(doc == null){
            return true;
        } else return false;
        
    }
}

export const contactDBService = new ContactDBService();