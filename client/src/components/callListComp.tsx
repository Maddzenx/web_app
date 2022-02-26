import axios, { AxiosResponse } from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import { CallList } from "../../../server/src/model/callList.interface";
import { Contact } from "../../../server/src/model/contact.interface";

interface CallListProps () {
    initialContacts : Contact[], 
    refreshCallList: () => void 
}

export class CallListComp extends React.Component<{}, { callLists: CallList[] }>{
    constructor(props: {}) {
        super(props);
        this.addNewCallList = this.addNewCallList.bind(this);
       
    }

    override render(){
        return <ul>
          {this.state.callLists.map((callList: CallList) => {
            return <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{callList.title}</Card.Title>
                <Card.Text> {callList.decription}</Card.Text>
              </Card.Body>
            </Card>;
          })}
        </ul>
      }
      
    
    override async componentDidMount(){
        //const res : AxiosResponse<CallList[]> = await axios.get<CallList[]>("https://localhost:8080/callList");
        //setTimeout(()=> {
        //  this.setState({ callLists : res.data });
        this.props.refreshCallList();
    }

    private async addNewCallList(title: string, contacts: Array < Contact["id"] >, description: string) {
        await axios.put("http://localhost:8080/callList", { title: title, contacts: [], description: description });
        this.props.refreshCallList();
      }
}


