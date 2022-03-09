import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import { CallListItem } from "./callListItem";
import { NewContactItemField } from "./newContactItemField"; // Något wierd med denna TODO
import { SideBar } from './sideBar';
import { Accordion, Card } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


interface CallListProps {
  contacts: Contact[],
  refreshCallList: () => void
}
const sideBar = <SideBar />
export class CallList extends React.Component<CallListProps, {}> {
  constructor(props: CallListProps) {
    super(props);

    this.addNewContact = this.addNewContact.bind(this);
  }
  
  tempContact = {
    tempListItems: [
      {
        id: 0,
        name: "Shrek",
        tnumber: "072052888"
      },
      {
        id: 1,
        name: "Donkey",
        tnumber: "072052988"
      },
      {
        id: 2,
        name: "Bagust",
        tnumber: "072052999"
      },
      {
        id: 3,
        name: "Badonga",
        tnumber: "0720529923"
      }
    ]
  };


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
    return <ul><SideBar />
      New contact name
      <NewContactItemField key="new item" addNewContact={this.addNewContact} />

      <Accordion >
        {this.props.contacts.map((item, index) => (
          <AccordionItem eventKey={item.name}>
            <Accordion.Header>{item.name}: {item.name}</Accordion.Header>
            <Accordion.Body>
              {item.name}
            </Accordion.Body>
          </AccordionItem>
        ))}
      </Accordion>

      {this.props.contacts.map((contact: Contact) => (contact.status) ?
        <CallListItem key={contact.id.toString()} contact={contact} handleCheck={() => { }} />
        :
        <CallListItem key={contact.id.toString()} contact={contact}
          handleCheck={() => { this.markContactStatus(contact.id); }} />
      )}

    </ul>
  }
}


