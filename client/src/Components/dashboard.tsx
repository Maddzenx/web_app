import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import SideBar from './sideBar';
import { NewCallListItemField } from './newCallListItemField';
import { CallList } from '../../../server/src/model/callList.interface';
import { Button, Card, Container, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

interface DashboardProps {
    callLists: CallList[],
    refreshCallLists: () => void
}

const sideBar = <SideBar />



export class Dashboard extends React.Component<DashboardProps, {}> {
    constructor(props: DashboardProps) {
        super(props);

        this.addNewCallList = this.addNewCallList.bind(this);
    }

    private async addNewCallList(title: string, description?: string) {
        await axios.post("http://localhost:8080/callList", { title: title, description: description });
        this.props.refreshCallLists();
    }

    private deleteCallList = (i: CallList) => {
        const id = i.id;
        axios.delete(`http://localhost:8080/callList/${id}`).then(() => { this.props.refreshCallLists(); }
        );

    }

    private updateCallList = (i: CallList) => {
        const newTitle = prompt("Enter new title: ");
        const id = i.id;
        axios.put("http://localhost:8080/callList", { id: id, title: newTitle }).then(() => { this.props.refreshCallLists(); }
        );
    }

    
    override render() {
        return <Container>
            <SideBar />
        <Container className="newCallListInputGroup">
            <InputGroup className="newCallListInput">
                <NewCallListItemField addNewCallList={this.addNewCallList} />
            </InputGroup>
        </Container>
        <Container className="callListContainer" style={{paddingTop: "60px"}}>
            <Row xs={1} md={2}  >
                {this.props.callLists.map((item, index) => (
                    <Card className= "callListCard" style={{ width: '18rem' }} key={index}>
                        <Card.Img variant="top" src="/telephone.png" />
                        <Card.Body>
                            <Card.Title>
                            <Link to={`/callList/${item.id}`} className="dark" style={{ textDecoration: 'none' }}  >
                            {item.title}
                            </Link></Card.Title>
                            <Card.Subtitle className = "callListCardText">
                                {item.description}
                                {item.creator}
                            </Card.Subtitle>
                            
                            <Button className = "callListDeleteBtn" variant="outline-danger" size="sm" style={{ float: 'right' }}
                                onClick={() => {
                                    this.deleteCallList(item);
                                    

                                }}
                            >
                                X
                            </Button>
                           
                            <Button className = "callListUpdateBtn" variant="outline-primary" size="sm" style={{ float: 'right' }}
                                onClick={() => {
                                    this.updateCallList(item);

                                }}
                            >
                                Edit
                            </Button>
                        </Card.Body>
                    </Card>
                )
                )}
            </Row>
        </Container>


        </Container>
    }
}