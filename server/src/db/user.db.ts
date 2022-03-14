import { User } from "../model/user.interface";
import { conn } from "./conn";
import { Schema } from "mongoose";

const mongoose = require("mongoose");

const UserSchema: Schema = new Schema({

    id: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

async function makeUserModel() {
    return (await conn).model<User>("User", UserSchema);
}

export const userModel = makeUserModel();
