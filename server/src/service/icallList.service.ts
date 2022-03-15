import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";


export interface ICallListService {
getCallList(username: string) : Promise<Array<CallList>>
getOneCallList(id: number) : Promise<CallList>
createCallList(title: string, decription: string, creator:string) : Promise<CallList>
editCallList(id: number, title:string) : Promise<CallList>
deleteCallList(id: number) : Promise<Boolean>

}
