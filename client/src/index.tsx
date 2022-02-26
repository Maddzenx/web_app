import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CallList} from '../../server/src/model/callList.interface'
import axios, { AxiosResponse } from "axios";
import {Button, Row, Col, Container, Card} from 'react-bootstrap';

class CallListComp extends React.Component<{},{callLists: CallList[]}>{
  constructor(props:{}){
    super(props);
    this.state = {callLists : [
      {id: 0, title: "Call List 0", creator: "Madztor", contacts: [], decription: "My first call list"},
      {id: 1, title: "Call List 1", creator: "Sageztor", contacts: [], decription: "My second call list"}
    ]
  };
}


override async componentDidMount(){
  const res : AxiosResponse<CallList[]> = await axios.get<CallList[]>("https://localhost:8080/callList");
  setTimeout(()=> {
    this.setState({ callLists : res.data });

  }, 5000)
}


override render(){
 return <ul>
   {this.state.callLists.map((callList: CallList) => {
     return <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{callList.title}</Card.Title>
        <Card.Text> {callList.decription}</Card.Text>
      </Card.Body>
    </Card>;
  })}
   </ul>
}
} 

const rootElement = <CallListComp/>

ReactDOM.render(rootElement, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
