import { CallList } from "./callList.interface";
/**import { Team } from "./team.interface";**/

export interface User {
    username: string; /**unique**/
    email: string;
    password: string;
    callLists: Array<CallList>;
    /**team: Team; **/
}