import { ICallListService } from "./icallList.service";
import { callListModel } from "../db/callList.db";
import { Contact } from "../model/contact.interface";
import { CallList } from "../model/callList.interface";

class CallListDBService implements ICallListService {
    async getCallList(): Promise<CallList[]> {
        const cm = await callListModel;
        return await cm.find();
    }

    async createCallList(title: string, creator: string, description: string): Promise<CallList> {
        if (! title) {
            throw new Error("Missing title\n");
        }
        const cm = await callListModel;
        return await cm.create({
            id : new Date().valueOf(),
            title: title, 
            creator: creator,
            contacts: [],
            decription: description
        })
    }

    async editCallList(clId: number, clTitle: string, clCreator: string, clContacts: Array<Contact["id"]>, clDescription: string): Promise<CallList> {
        if (clId < 0) {
            throw new Error("Id can't be negative\n");
        }
        if (!clTitle) {
            throw new Error("Missing title\n");
        }
        if (!clCreator) {
            throw new Error("Missing creator\n");
        }
        const cm = await callListModel;
        await cm.updateOne( {id: clId},
            {title: clTitle, 
            creator: clCreator,
            contacts: clContacts,
            decription: clDescription});

        const doc = await cm.findOne({id: clId});
        if (doc === null)
            throw new Error("No document with id " + clId);
        else return doc;
    }

    async deleteCallList(callListId: number): Promise<Boolean> {
        if (callListId < 0) {
            throw new Error("Id can't be negative\n");
        }
        const cm = await callListModel;
        await cm.findByIdAndDelete(callListId);

        const doc = await cm.findOne({id: callListId});

        if(doc == null){
            return true;
        } else return false;
    }

    async addContact(callListId: number): Promise<CallList> {
        const contactId = new Date().valueOf();
        const cm = await callListModel;
        await cm.updateOne({id: callListId}, 
            {$push: {contacts: contactId }});

            const doc = await cm.findOne({id: callListId});
            
            if (doc === null)
                throw new Error("No document with id " + callListId);
            else return doc;
    }
}

export const callListDBService = new CallListDBService();
