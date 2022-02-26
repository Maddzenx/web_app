import { Contact } from "../../../server/src/model/contact.interface";

export function CallListItem(props:{
    id: number;
    title: string;
    creator: string;
    contacts: Array<Contact["id"]>;
    decription?: string;
  }) {
      return <li>
        {props.title} {props.contacts} {props.decription}
      </li>
  }