import {Schema, Model} from "mongoose";
import {CallList} from "../src/model/callList.interface";
import {Contact} from "../src/model/contact.interface";
import { conn } from "./conn";


const callListSchema : Schema = new Schema({

 id : {

 type : Number,

 required : true,

 unique: true

 },

 title : {

 type : String,

 required : true

 },

 creator : {

    type : String,
   
    required : true
   
 },

 description : {

    type : String,
       
    required : false
       
},

 contacts : {

 type : Array, // ev fixa till detta men de funkade inte med array of contacts typ

 required : true

 }

});





export const taskModel = conn.model<CallList>("CallList", callListSchema);

