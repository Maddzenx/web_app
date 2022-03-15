import { CallList } from "./callList.interface";


export interface User {
    username: string; 
    email: string;
    password: string;
    callLists?: Array<CallList>;
    
}