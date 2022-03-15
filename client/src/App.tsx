import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './Components/dashboard';




export class App extends React.Component {

  override render() {
    return <div>
      <Dashboard />
    </div>
  }
}
