import {Schema} from "mongoose";
import {Contact, Status} from "../model/contact.interface";
import { conn } from "./conn";

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

async function makeContactModel() {
    return (await conn).model<Contact>("Contact", contactSchema);   
}

export const contactModel = makeContactModel();
