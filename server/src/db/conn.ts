import mongoose from "mongoose";
import { Connection, createConnection } from "mongoose";


export const conn  = createConnection("mongodb+srv://grupp6:PJGsnpXmCv4srwXN@cluster0.zk56d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.createConnection("mongodb+srv://grupp6:PJGsnpXmCv4srwXN@cluster0.zk56d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
  