import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import SideBar from './sideBar';
import { NewCallListItemField } from './newCallListItemField';
import { CallList } from '../../../server/src/model/callList.interface';
import { Button, Card, Container, InputGroup } from 'react-bootstrap';

interface DashboardProps {
    callLists: CallList[],
}

const sideBar = <SideBar />

export class Dashboard extends React.Component<DashboardProps, {}> {
    constructor(props: DashboardProps) {
        super(props);

        this.addNewCallList = this.addNewCallList.bind(this);
    }

    private async addNewCallList(title: string, description?: string) {
        await axios.put("http://localhost:8080/callList", { title: title, description: description });
    }

    deleteContact = (index: number): void => {
        //IContactService.deletContact(id)
        alert('You clicked me!');
        this.tList = this.tList.slice(index,1)
      }

    tempCl = {
        tempListItems: [
            {
                title: "aa",
                decription: "bb"
            }, {
                title: "cc",
                decription: "dd"
            }, {
                title: "ee",
                decription: "ff"
            }, {
                title: "gg",
                decription: "hh"
            }, {
                title: "ii",
                decription: "jj"
            },
        ]
    };
    tList = this.tempCl.tempListItems

    //byt ut paddingTop
    override render() {
        return <Container>
            <SideBar />
            <InputGroup className="mb-3" style={{ paddingTop: "60px" }}>
                <NewCallListItemField key="new item" addNewCallList={this.addNewCallList} />
                <Button>Add</Button>
            </InputGroup>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>test</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">this is a test text</Card.Subtitle>
                    <Card.Link href="/callListPage">Go to Call List</Card.Link>
                    <Button variant="outline-danger" size="sm" style={{ float: 'right' }}
                        onClick={() => {
                            //this.deleteContact(index);
                        }}
                    >
                        X
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    }
}