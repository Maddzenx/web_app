import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { ICallListService } from "../../../server/src/service/icallList.service";
import SideBar from './sideBar';
import { NewContactItemField } from './newContactItemField';
import { CallListItem } from './callListItem';
import { IContactService } from '../../../server/src/service/icontact.service'
import '../App.css';

interface InsideCallListProps {
  contacts: Contact[],
  refreshCallList: () => void

}

const sideBar = <SideBar />
export class InsideCallList extends React.Component<InsideCallListProps, {}> {
  constructor(props: InsideCallListProps) {
    super(props);
    
    this.addNewContact = this.addNewContact.bind(this);
  }




  private async addNewContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) {
    await axios.post("http://localhost:8080/contact", { name: name, company: company, position: position, telephoneNumber: telephoneNumber, email: email, comment: comment });
    this.props.refreshCallList();
  }

  deleteContact = (index: number): void => {
    //IContactService.deletContact(id)
    alert('You clicked me!');
    //this.tList = this.tList.slice(index, 1)
  }

  override render() {
    return <ul><SideBar />

      <Container style={{ paddingTop: "60px" }}>

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
      </Container>



    </ul>
  }

}



