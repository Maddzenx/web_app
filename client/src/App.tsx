import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Contact } from '../../server/src/model/contact.interface';
import { CallList } from '../../server/src/model/callList.interface';
import axios, { AxiosResponse } from 'axios';
import { PleaseWait } from './Components/pleaseWait';

import { Outlet } from 'react-router-dom';
import { Dashboard } from './Components/dashboard';

export class App extends React.Component<{}, { receivedCallLists: boolean, callLists: CallList[] }> {
  state = { receivedCallLists: true, callLists: [] };

  override async componentDidMount() {
    this.refreshCallLists();
  }

  private async refreshCallLists() {
    const res: AxiosResponse<CallList[]> = await axios.get<CallList[]>("http://localhost:8080/callList/getAll");
    this.setState({ receivedCallLists: true, callLists: res.data });
  }

  override render() {
    
    if (this.state.receivedCallLists) return <div><Dashboard callLists = {this.state.callLists} 
      refreshCallLists={() => this.refreshCallLists()}
    />
    <Outlet context={this.state.callLists} />
    </div>
    else return <PleaseWait />
  }

}
