import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Contact } from '../../server/src/model/contact.interface';
import { CallList } from '../../server/src/model/callList.interface';
import axios, { AxiosResponse } from 'axios';
import { PleaseWait } from './Components/pleaseWait';

import { Outlet, useLocation } from 'react-router-dom';
import Dashboard from './Components/dashboard';



export class App extends React.Component { 
  
  override render() {
    return <div>
      <Dashboard/>
    </div>
  }
}
