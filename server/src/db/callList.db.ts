import { Schema } from "mongoose";
import { CallList } from "../model/callList.interface";
import { conn } from "./conn";


const callListSchema: Schema = new Schema({

   id: {

      type: Number,

      required: true,

      unique: true

   },

   title: {

      type: String,

      required: true

   },

   creator: {

      type: String,

      required: false

   },

   description: {

      type: String,

      required: false

   },

   contacts: {

      type: Array,

      required: true

   }

})

async function makeCallListModel() {
   return (await conn).model<CallList>("CallList", callListSchema);
}

export const callListModel = makeCallListModel();


