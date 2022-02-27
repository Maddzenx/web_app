import { useOutletContext, useParams } from "react-router-dom"
import { Contact } from "../../../server/src/model/contact.interface";

export function ContactView() {
    const params = useParams();
    const contacts : Contact[] = useOutletContext();

    if (! params.contactId) {
        return <p>Error - no contactId</p>
    }
    const thisContact = contacts.find((c : Contact) => c.id == parseInt(params.contactId as string, 10));

    if (! thisContact) return <p>No such contact!</p>
    return <p>This is contact ID {params.contactId}. Its name is {thisContact.name}.</p>
}