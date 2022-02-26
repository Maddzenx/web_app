import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import {IoIosContact, IoIosLogOut} from "react-icons/io";
import {Button, Row, Col, Container} from 'react-bootstrap';
import './App.css';
import { Contact } from '../../server/src/model/contact.interface';
import { Status } from '../../server/src/model/contact.interface';
import { CallList } from '../../server/src/model/callList.interface';


export interface IState{
  contact:{
    id: number;
    name: string;
    company: string;
    position: string;
    telephoneNumber: string;
    email: string;
    status: Status;
    comment: string;
  }[]

  callList:{
    id: number;
    title: string;
    creator: string;
    contacts: Array<Contact["id"]>;
    decription?: string;
  }[]

  user: {
    username: string; /**unique**/
    email: string;
    password: string;
    callLists: Array<CallList>;
    /**team: Team; **/
  }

}

function App() {

  return (
  <Container fluid>
    <Row className="sideBar" sm={4}>
      <Button className="profileBtn" variant="primary">
          <IoIosContact/>
      </Button>
      <Button className="SignOunBtn fixed-bottom" variant="primary">
          <IoIosLogOut/>
      </Button>
    </Row>
  </Container>
  );
}

export default App;
