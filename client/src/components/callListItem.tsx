import { Contact } from "../../../server/src/model/contact.interface";

import { Link } from "react-router-dom";


export function CallListItem(props:{
   contact : Contact
   handleCheck: () => void
  }) {
      return <li>
        <Link to={`/contact/${props.contact.id}`}>{props.contact.name}</Link>
    </li>

  }