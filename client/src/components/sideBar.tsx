import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { IoIosContact, IoIosLogOut } from "react-icons/io";
import { Button, Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import '../App.css';
import { Outlet } from 'react-router-dom';


export function SideBar() {
  return (

    <Container fluid>
      <>
        <Navbar bg="dark" variant="dark" expand="sm"  fixed="top">
          <Container fluid>
            <Navbar.Brand>Name</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="dashboard">Dashboard</Nav.Link> 
              <Nav.Link href="callListPage">Profile</Nav.Link>
              <Nav.Link href="#pricing">Sign Out</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <Outlet />
    </Container>

  );
}

export default SideBar;