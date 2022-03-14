import { ICallListService } from "./icallList.service";
import { callListModel } from "../db/callList.db";
import { Contact } from "../model/contact.interface";
import { CallList } from "../model/callList.interface";

class CallListDBService implements ICallListService {
    async getCallList(): Promise<CallList[]> {
        const cm = await callListModel;
        return await cm.find();
    }

    async getOneCallList(cID: number): Promise<CallList>{
        const cm = await callListModel;
        //return await cm.findById(cID) // måste ev lösas med _id ist isf måste jag skicka med objectID
        const callList = await cm.findOne({id: cID});
        if (callList === null)
            throw new Error("No document with id " + cID);
        else return callList;
    }

    async createCallList(title: string, creator: string, description: string): Promise<CallList> {
        const cm = await callListModel;
        return await cm.create({
            id : new Date().valueOf(),
            title: title, 
            creator: "bambi",
            contacts: [],
            decription: description
        })
    }

    async editCallList(clId: number, clTitle: string): Promise<CallList> {
        const cm = await callListModel;
        await cm.updateOne( {id: clId},
            {title: clTitle });

        const doc = await cm.findOne({id: clId});
        if (doc === null)
            throw new Error("No document with id " + clId);
        else return doc;
    }
   
    async deleteCallList(callListId: number): Promise<Boolean> {
        const cm = await callListModel;
        
        await cm.findOneAndDelete({ id: (callListId) }).exec() 
        
        const doc = await cm.findOne({id: callListId});

        if(doc == null){
            return true;
        } else return false;
        
    }
    /*
    //måste fixas
    async addContact(callListId: number): Promise<CallList> {
        const contactId = new Date().valueOf();
        const cm = await callListModel;
        await cm.updateOne({id: callListId}, 
            {$push: {contacts: contactId }});

            const doc = await cm.findOne({id: callListId});
            
            if (doc === null)
                throw new Error("No document with id " + callListId);
            else return doc;
    }*/
}

export const callListDBService = new CallListDBService();
