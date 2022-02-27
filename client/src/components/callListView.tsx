import { useOutletContext, useParams } from "react-router-dom"
import { CallList } from "../../../server/src/model/callList.interface";

export function CallListView() {
    const params = useParams();
    const callLists :  CallList[] = useOutletContext();

    if (! params.callListId) {
        return <p>Error - no callListId</p>
    }
    const thisCallList = callLists.find((cl : CallList) => cl.id == parseInt(params.callListId as string, 10));

    if (! thisCallList) return <p>No such call list!</p>
    return <p>This is call list ID {params.callListId}. Its name is {thisCallList.title}.</p>
}