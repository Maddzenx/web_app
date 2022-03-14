import { Contact } from '../../../server/src/model/contact.interface';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { ICallListService } from "../../../server/src/service/icallList.service";
import SideBar from './sideBar';
import { NewContactItemField } from './newContactItemField';
import { CallListItem } from './callListItem';
import { IContactService } from '../../../server/src/service/icontact.service'
import '../App.css';
import { useLocation } from 'react-router';
import { CallList } from '../../../server/src/model/callList.interface';



const sideBar = <SideBar />
export default function InsideCallList() {
 const location = useLocation();
 const id = Number(location.pathname.split("/")[2]);
 const [currentCallList, setCallList] = useState<CallList>();
 const [currentContacts, setContacts] = useState<Contact[]>();

  
  useEffect(()=>{
    const getCallList = async () => {

      const res: AxiosResponse<CallList> = await axios.get<CallList>("http://localhost:8080/callList/getOne/"+id);
      setCallList(res.data);
    }
    const getContacts = async () => {

      const  res: AxiosResponse<Contact[]> = await axios.get<Contact[]>(`http://localhost:8080/contact/${id}`);
      setContacts(res.data);
    }
    getContacts();
    getCallList();
  }, [id]);
  
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
  const addNewContact = async (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string)=>{
    
    await axios.post("http://localhost:8080/contact", {callListID: id, name: name, company: company, position: position, telephoneNumber: telephoneNumber, email: email, comment: comment });
  }
  const handleDelete = async ()=>{

  }

  const handleUpdate = async ()=>{
    
  }

  return(
     <ul><SideBar />
        
      <Container style={{ paddingTop: "60px" }}>
      ID:{id}
      CurrentCallList: {currentCallList?.title}
      <NewContactItemField key="new item" addNewContact={addNewContact} />

      <Accordion >
          {currentContacts?.map((item, index) => (
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
  );

}



