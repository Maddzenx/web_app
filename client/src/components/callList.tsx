import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import { Accordion, Card } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { ICallListService } from "../../../server/src/service/icallList.service";
import SideBar from './sideBar';
import { NewContactItemField } from './newContactItemField';
import { CallListItem } from './callListItem';



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
  private async addNewContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string ) {
    await axios.put("http://localhost:8080/contact", { name: name, company: company, position: position , telephoneNumber: telephoneNumber, email: email, comment: comment});
    this.props.refreshCallList();
  }

  override render() {
    return <ul><SideBar />
      New contact 
      <NewContactItemField key="new item" addNewContact={this.addNewContact} />

      <Accordion >
        {this.props.contacts.map((item, index) => (
          <AccordionItem eventKey={item.name}>
            <Accordion.Header>{item.name}: {item.name}</Accordion.Header>
            <Accordion.Body>
              {item.name}
              {item.comment}
              {item.company}
              {item.email}
              {item.position}
              {item.status}
              {item.telephoneNumber}
              {item.id}
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


