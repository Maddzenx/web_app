import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import {IoIosContact, IoIosLogOut} from "react-icons/io";
import {Button, Row, Col, Container} from "react-bootstrap";
import '././src/App.css';

export function SideBar() {
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
  
  export default SideBar;