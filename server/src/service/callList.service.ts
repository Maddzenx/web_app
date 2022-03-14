import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";
import { ICallListService } from "./icallList.service";

export class CallListService implements ICallListService{
    
    private callLists: { [key: number]: CallList };

    constructor(callLists: { [key: number]: CallList }) {
        this.callLists = callLists;
    }
    getOneCallList(id: any): Promise<CallList> {
        throw new Error("Method not implemented.");
    }

    getCallList : () => Promise<Array<CallList>> = async () => {
        return Object.values(this.callLists);
    }  

    createCallList : (title: string, creator: string, description: string) => Promise<CallList> = 
    async (title: string, creator: string, description: string) => {
        if (! title) {
            throw new Error("Missing title\n");
        }
        const newCallList: CallList = {
            id: new Date().valueOf(),
            title: title,
            creator: "bambi",
            contacts: [],
            description: description
        }
        this.callLists[newCallList.id] = newCallList;
            
        return newCallList;
    }
    
    editCallList : (id:number, title: string, ) => Promise<CallList> = 
    async (id:number, title: string)  => {
            
            if (id < 0) {
                throw new Error("Id can't be negative\n");
            }
            if (! title) {
                throw new Error("Missing title\n");
            }
            
        const callList: CallList = this.callLists[id];
            callList.title = title;
            
        
        return callList;
    }
    

    deleteCallList : (id: string) => Promise<Boolean> = async (id: string) => {
       /* if (id < 0) {
            throw new Error("Id can't be negative\n");
        }
        const callList : CallList = this.callLists[id];
        if (! callList) return false;
        delete this.callLists[id];*/
        return true;
    }  

    addContact : (callListId: number) => Promise<CallList> = 
    async (callListId: number) => {

        if (callListId < 0) {
            throw new Error("CallList id can't be negative\n");
        }
        const contactId = new Date().valueOf();
        const callList : CallList = this.callLists[callListId];
        
        if (callList.contacts[contactId] == null){
             
            callList.contacts.push(contactId);
            return callList;

        } else {
            throw new Error("Contact already exists!");
        }
 
    } 
       
}
export function makeCallListService(): CallListService {
    return new CallListService({});
}