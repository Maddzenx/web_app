import {Schema, Model} from "mongoose";
import {CallList} from "../src/model/callList.interface";
import {Contact, Status} from "../src/model/contact.interface";
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

});





export const taskModel = conn.model<CallList>("Contact", contactSchema);

