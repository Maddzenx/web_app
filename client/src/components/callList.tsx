import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import { CallListItem } from "./callListItem";
import { NewContactItemField } from "./newContactItemField"; // Något wierd med denna TODO

interface CallListProps {
    contacts : Contact[],
    refreshCallList : () => void
}

export  class CallList extends React.Component<CallListProps, {}> {
    constructor(props: CallListProps){
    super(props);

    this.addNewContact = this.addNewContact.bind(this);
    }

    private async markContactStatus(id: number) {
        // TODO Extract hostname
        await axios.put<never>("http://localhost:8080/contact/" + id,
          { done: true } //Lägg till status
        );
        this.props.refreshCallList();
      }
      private async addNewContact(name: string) {
        await axios.put("http://localhost:8080/contact", { name: name });
        this.props.refreshCallList();
      }
      override render() {
        return <ul>
        {this.props.contacts.map((contact: Contact) => (contact.status) ?
          <CallListItem key={contact.id.toString()} contact={contact} handleCheck={() => { }} />
          :
          <CallListItem key={contact.id.toString()} contact={contact}
            handleCheck={() => { this.markContactStatus(contact.id); }} />
        )}
        <NewContactItemField key="new item" addNewContact={this.addNewContact} />
      </ul>
      }
    }


