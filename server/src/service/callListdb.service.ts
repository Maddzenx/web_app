import { ICallListService } from "./icallList.service";
import { callListModel } from "../db/callList.db";
import { CallList } from "../model/callList.interface";

class CallListDBService implements ICallListService {
    async getCallList(username: string): Promise<CallList[]> {
        const cm = await callListModel;
        return await cm.find({ creator: username });
    }


    async getOneCallList(id: number): Promise<CallList> {
        const cm = await callListModel;
        const callList = await cm.findOne({ id: id });

        if (callList === null)
            throw new Error("No document with id type");
        else return callList;
    }

    async createCallList(title: string, description: string, creator: string): Promise<CallList> {

        const cm = await callListModel;
        return await cm.create({
            id: new Date().valueOf(),
            title: title,
            creator: creator,
            contacts: [],
            decription: description
        })
    }


    async editCallList(clId: number, clTitle: string): Promise<CallList> {

        const cm = await callListModel;
        await cm.updateOne({ id: clId },
            { title: clTitle });

        const doc = await cm.findOne({ id: clId });
        if (doc === null)
            throw new Error("No document with id " + clId);
        else return doc;
    }

    async deleteCallList(callListId: number): Promise<Boolean> {
        if (callListId < 0) {
            throw new Error("Id can't be negative\n");
        }
        const cm = await callListModel;

        await cm.deleteOne({ id: (callListId) }).exec()

        const doc = await cm.findOne({ id: callListId });

        if (doc == null) {
            return true;
        } else return false;



    }

}

export const callListDBService = new CallListDBService();
