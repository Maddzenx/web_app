import { ICallListService } from "./icallList.service";
import { Model } from "mongoose";
import { connectToCallListDB } from "../db/callList.db";
import { Contact } from "../model/contact.interface";
import { CallList } from "../model/callList.interface";



class CallListDBService implements ICallListService {
    private callListModel : Model<CallList>

    constructor(callListModel : Model<CallList>) {
        this.callListModel = callListModel;
    }

    async getCallList(): Promise<CallList[]> {
        return await this.callListModel.find();
    }

    async createCallList(title: string, creator: string, contacts: Array<Contact["id"]>, description: string): Promise<CallList> {
        return await this.callListModel.create({
            id : new Date().valueOf(),
            title: title, 
            creator: creator,
            contacts: contacts, //should be an empty array of contacts
            decription: description
        })
    }
    async editCallList(clId: number, clTitle: string, clCreator: string, clContacts: Array<Contact["id"]>, clDescription: string): Promise<CallList> {
        await this.callListModel.updateOne( {id: clId},
            {title: clTitle, 
            creator: clCreator,
            contacts: clContacts,
            decription: clDescription});

        const doc = await this.callListModel.findOne({id: clId});
        if (doc === null)
            throw new Error("No document with id " + clId);
        else return doc;
    }

    //if statement
    async deleteCallList(callListId: number): Promise<Boolean> {

        await this.callListModel.findByIdAndDelete(callListId);

        const doc = await this.callListModel.findOne({id: callListId});

        if(doc == null){
            return true;
        } else return false;
    }

    //måste fixas
    async addContact(callListId: number): Promise<CallList> {
        const contactId = new Date().valueOf();
        
        await this.callListModel.updateOne({id: callListId}, 
            {$push: {contacts: contactId }});

            const doc = await this.callListModel.findOne({id: callListId});
            
            if (doc === null)
                throw new Error("No document with id " + callListId);
            else return doc;
    }


}

export async function callListDBService() : Promise<ICallListService> {
    return new CallListDBService(await connectToCallListDB());
}