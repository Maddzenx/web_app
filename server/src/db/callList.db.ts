import {Schema, Model, connect} from "mongoose";
import {Contact} from "../model/contact.interface";
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

})

async function makeCallListModel() {
   return (await conn).model<Contact>("CallList", callListSchema);   
}

export const contactModel = makeCallListModel();


