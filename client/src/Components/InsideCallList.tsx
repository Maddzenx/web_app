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



const sideBar = <SideBar />
export default function InsideCallList() {
 

  /*
  private async addNewContact(name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) {
    await axios.post("http://localhost:8080/contact", { name: name, company: company, position: position, telephoneNumber: telephoneNumber, email: email, comment: comment });
    this.props.refreshCallList();
  }
  */

  /*
  deleteContact = (index: number): void => {
    //IContactService.deletContact(id)
    alert('You clicked me!');
    //this.tList = this.tList.slice(index, 1)
  }
  */

  return(
     <ul><SideBar />
        
      <Container style={{ paddingTop: "60px" }}>

      <NewContactItemField key="new item" addNewContact={function (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string): void {
          throw new Error('Function not implemented.');
        } } />
      
      </Container>

      
    </ul>
  );

}



