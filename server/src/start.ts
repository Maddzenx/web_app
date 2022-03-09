
 import Express from "express";
 import * as path from "path";
 import { makeContactRouter } from "./router/contact.router";
 import cors from "cors";
 import { makeCallListRouter } from "./router/callList.router";
 //import { userRouter } from "./router/user.router";

 
 export const app : Express.Express = Express();
 


 app.use(Express.json());
 app.use(cors());
 app.use(Express.static(path.join(__dirname, '../../client/build')));


 app.use("/contact", makeContactRouter);
 app.use("/callList", makeCallListRouter);
 //app.use("/user", userRouter);

