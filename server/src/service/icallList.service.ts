import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";


export interface ICallListService {
getCallList() : Promise<Array<CallList>>
createCallList(title: string, creator: string, decription: string) : Promise<CallList>
editCallList(id:number, title:string, creator: string, contacts: Array<Contact["id"]>, decription: string) : Promise<CallList>
deleteCallList(id: number) : Promise<Boolean>
addContact(callListId : CallList["id"]) : Promise<CallList>
}
