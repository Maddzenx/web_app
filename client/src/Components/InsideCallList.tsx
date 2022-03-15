import { Contact } from '../../../server/src/model/contact.interface';
import React, { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { Accordion, Button, Card, Container, Row } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import SideBar from './sideBar';
import { NewContactItemField } from './newContactItemField';
import '../App.css';
import { useLocation } from 'react-router';
import { CallList } from '../../../server/src/model/callList.interface';




const sideBar = <SideBar />
export default function InsideCallList() {
  const location = useLocation();


  const id = Number(location.pathname.split("/")[2]);
  const [currentCallList, setCallList] = useState<CallList>();
  const [currentContacts, setContacts] = useState<Contact[]>();


  useEffect(() => {


    getContacts();
    getCallList();
  }, [id]);
  const getCallList = async () => {

    const res: AxiosResponse<CallList> = await axios.get<CallList>("http://localhost:8080/callList/getOne/" + id);
    setCallList(res.data);
  }
  const getContacts = async () => {

    const res: AxiosResponse<Contact[]> = await axios.get<Contact[]>(`http://localhost:8080/contact/${id}`);
    setContacts(res.data);
  }

  const addNewContact = async (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string) => {

    await axios.post("http://localhost:8080/contact", { callListID: id, name: name, company: company, position: position, telephoneNumber: telephoneNumber, email: email, comment: comment }).then(() => {
      getContacts()
    });
  }
  const deleteContact = async (contact: Contact) => {
    const id = contact.id;

    axios.delete(`http://localhost:8080/contact/${id}`).then(() => { getContacts() }
    );

  }

  const updateContact = async (contact: Contact) => {

    const newContactName = prompt("Enter new Contact name: ");
    const newTelephonenumber = prompt("Enter new TelephoneNumber: ");
    const id = contact.id;
    axios.put("http://localhost:8080/contact", { id: id, newContactName: newContactName, newTelephonenumber: newTelephonenumber }).then(() => { getContacts() }
    );

  }

  return (
    <ul><SideBar />

      <Container style={{ paddingTop: "60px" }}>
        ID:{id}
        CurrentCallList: {currentCallList?.title}
        <NewContactItemField key="new item" addNewContact={addNewContact} />

        <Accordion >
          {currentContacts?.map((item, index) => (
            <AccordionItem eventKey={item.name}>
              <Accordion.Header>{item.name}: {item.name}<Button variant="outline-danger" size="sm" style={{ float: 'right' }}
                onClick={() => {
                  deleteContact(item);


                }}
              >
                X
              </Button>

                <Button variant="outline-primary" size="sm" style={{ float: 'right' }}
                  onClick={() => {
                    updateContact(item);

                  }}
                >
                  Edit
                </Button></Accordion.Header>
              <Accordion.Body>
                <Row xs={1} md={2}  >
                  Name: {item.name}
                  Comment: {item.comment}
                  Company: {item.company}
                  Email: {item.email}
                  Position: {item.position}
                  Status: {item.status}
                  Number: {item.telephoneNumber}

                </Row>
              </Accordion.Body>
            </AccordionItem>
          ))}
        </Accordion>

      </Container>


    </ul>
  );

}



