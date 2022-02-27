import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Contact } from '../../server/src/model/contact.interface';
import axios, { AxiosResponse } from 'axios';
import CallList from "./components/callList";
import { PleaseWait } from './components/pleaseWait';

export class App extends React.Component<{}, {receivedContacts: boolean, contacts : Contact[]}> {
  state = {receivedContacts : false, contacts : []};

  override async componentDidMount() {
    this.refreshCallList();
  
  }

  private async refreshCallList() {
    const res: AxiosResponse<Contact[]> = await axios.get<Contact[]>("http://localhost/8080/callList");
    this.setState({ receivedContacts : true, contacts: res.data });
}

  override render() {
    if (this.state.receivedContacts) return <CallList contacts = {this.state.contacts}
      refreshCallList={() => this.refreshCallList()} />
    else return <PleaseWait />
  }

}
