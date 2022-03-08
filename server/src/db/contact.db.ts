import {Schema, Model, connect} from "mongoose";
import {CallList} from "../model/callList.interface";
import {Contact, Status} from "../model/contact.interface";
import { conn } from "./conn";

export async function connectToContactDB() : Promise<Model<Contact>> {
   
    const db = conn;
    const contactSchema : Schema = new Schema({

        id : {

        type : Number,

        required : true,

        unique: true

        },

        name : {

        type : String,

        required : true

        },

        company : {

            type : String,
        
            required : false
        
        },
        
        position : {

            type : String,
            
            required : false
            
        },

        telephoneNumber : {

            type : String,
            
            required : false
            
        },

        email : {

            type : String,
            
            required : false
            
        },

        status : {

            type : Status,
            
            required : true
            
        },

        comment : {

            type : String,
            
            required : false
            
        },

})
    return db.model<Contact>("Contact", contactSchema);
    
}


