import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";


export interface ICallListService {
getCallList() : Promise<Array<CallList>>
getOneCallList(id:any) : Promise<CallList>
createCallList(title: string, creator: string, decription: string) : Promise<CallList>
editCallList(id:number, title:string) : Promise<CallList>
deleteCallList(id: string) : Promise<Boolean>
//addContact(callListId : CallList["id"]) : Promise<CallList>
}
