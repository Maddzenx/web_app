/**

 * Required External Modules

 */



 import express from "express";

import { contactRouter } from "./router/contact.router";

//import { callListRouter } from "./router/callList.router";


 
 
 /**
 
  * App Variables
 
  */
 
 
 
 
 export const app = express();
 
 
 
 /**
 
  * App Configuration
 
  */
 
 
 
 app.use(express.json());

 app.use("/contact", contactRouter);
 //app.use("/callList", callListRouter);