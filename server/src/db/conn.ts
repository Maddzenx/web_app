import { Connection, createConnection } from "mongoose";



export const conn : Promise<Connection> = Promise.resolve(createConnection("mongodb+srv://grupp6:PJGsnpXmCv4srwXN@cluster0.zk56d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"));
