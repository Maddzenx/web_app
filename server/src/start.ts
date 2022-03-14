
import Express from "express";
import * as path from "path";
import { contactRouter } from "./router/contact.router";
import cors from "cors";
import { callListRouter } from "./router/callList.router";
import { userRouter } from "./router/user.router";
//import { userRouter } from "./router/user.router";

const dotenv = require("dotenv");
const mongoose = require("mongoose");

export const app: Express.Express = Express();

dotenv.config();
app.use(Express.json());
app.use(cors());
app.use(Express.static(path.join(__dirname, '../../client/build')));

mongoose
    .connect(process.env.MONGO_URL, {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err: any) => console.log(err));

app.use("/contact", contactRouter());
app.use("/callList", callListRouter());
//app.use("/user", userRouter());
app.use("/user", userRouter());

