import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Contact } from '../../server/src/model/contact.interface';
import axios, { AxiosResponse } from 'axios';
import { PleaseWait } from './Components/pleaseWait';
import { InsideCallList } from './Components/InsideCallList';
import { Outlet } from 'react-router-dom';

export class App extends React.Component<{}, { receivedContacts: boolean, contacts: Contact[] }> {
  state = { receivedContacts: true, contacts: [] };

  override async componentDidMount() {
    this.refreshCallList();
  }

  private async refreshCallList() {
    const res: AxiosResponse<Contact[]> = await axios.get<Contact[]>("");
    this.setState({ receivedContacts: true, contacts: res.data });
  }

  override render() {
    if (this.state.receivedContacts) return <div><InsideCallList contacts = {this.state.contacts} 
      refreshCallList={() => this.refreshCallList()}
    />
    <Outlet context={this.state.contacts} />
    </div>
    else return <PleaseWait />
  }

}
