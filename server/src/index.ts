import { app } from "./start";
import * as cors from "cors";

/**

 * App Variables

 */



const PORT : number = 8080;



/**

 * Server Activation

 */



app.listen(PORT, () => {

 console.log(`listening on port ${PORT}`);

});