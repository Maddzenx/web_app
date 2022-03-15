import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { ICallListService } from "../../../server/src/service/icallList.service";
import SideBar from './sideBar';
import { NewContactItemField } from './newContactItemField';
import { CallListItem } from './callListItem';
import {IContactService} from '../../../server/src/service/icontact.service'
import '../App.css';

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
   tList = this.tempContact.tempListItems



  private async addNewContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) {
    await axios.post("http://localhost:8080/contact", { name: name, company: company, position: position, telephoneNumber: telephoneNumber, email: email, comment: comment });
    this.props.refreshCallList();
  }

   deleteContact = (index: number): void => {
    //IContactService.deletContact(id)
    alert('You clicked me!');
    this.tList = this.tList.slice(index,1)
  }

  override render() {
    return <ul><SideBar />
      
      <Container style={{paddingTop: "60px"}}>

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
      Test Accordion
      <Accordion >
        {this.tList.map((item, index) => (
          <AccordionItem eventKey={item.name}>
            <Accordion.Header>{item.name}: {item.tnumber}  </Accordion.Header>
            <Accordion.Body>
              {item.name}
              {item.tnumber}
              {item.id}
              <Button variant="outline-danger" size="sm" style={{float: 'right'}}
                onClick={() => {
                  this.deleteContact(index);
                }}
              >
                X
              </Button>

            </Accordion.Body>
          </AccordionItem>
        ))}
      </Accordion>
      </Container>



    </ul>
  }

}



