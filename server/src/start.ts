/**

 * Required External Modules

 */

 import express from "express";

 import { contactRouter } from "./router/contact.router";
 import cors from "cors";


//import { callListRouter } from "./router/callList.router";

 
 /**
 
  * App Variables
 
  */
 
 
 export const app = express();
 
 
 /**
 
  * App Configuration
 
  */


 app.use(express.json());
 app.use(cors());


 app.use("/contact", contactRouter);
 //app.use("/callList", callListRouter);
