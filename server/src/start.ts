
 import Express from "express";
 import * as path from "path";
 import { contactRouter } from "./router/contact.router";
 import cors from "cors";
 import { callListRouter} from "./router/callList.router";
 //import { userRouter } from "./router/user.router";

 
 export const app : Express.Express = Express();
 


 app.use(Express.json());
 app.use(cors());
 app.use(Express.static(path.join(__dirname, '../../client/build')));


 app.use("/contact", contactRouter());
 app.use("/callList", callListRouter());
 //app.use("/user", userRouter);

