import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import SideBar from './sideBar';
import { NewCallListItemField } from './newCallListItemField';
import { CallList } from '../../../server/src/model/callList.interface';
import { Button, Card, Container, InputGroup, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';



const sideBar = <SideBar />



export default function Dashboard() {
    const location = useLocation();
    const username = location.pathname.split("/")[2];
    const [currentCallLists, setCallList] = useState<CallList[]>();



    useEffect(() => {



        getCallList();
    }, [username]);
    const getCallList = async () => {

        const res: AxiosResponse<CallList[]> = await axios.get<CallList[]>(`http://localhost:8080/callList/getAll/${username}`);
        setCallList(res.data);
    }





    const addNewCallList = async (title: string, description: string) => {

        await axios.post("http://localhost:8080/callList", { title: title, description: description, username: username });
        getCallList();

    }
    const deleteCallList = async (i: CallList) => {
        const id = i.id;

        await axios.delete(`http://localhost:8080/callList/${id}`).then(() => { getCallList() }
        );

    }


    const updateCallList = async (i: CallList) => {

        const newTitle = prompt("Enter new title: ");
        const id = i.id;
        axios.put("http://localhost:8080/callList", { id: id, title: newTitle }).then(() => { getCallList() }
        );

    }

    return (
        <ul><Container>
            <SideBar />
            <Container className="newCallListInputGroup">
                <InputGroup className="newCallListInput">
                    <NewCallListItemField addNewCallList={addNewCallList} />
                </InputGroup>
            </Container>
            <Container className="callListContainer" style={{ paddingTop: "60px" }}>
                <Row xs={1} md={2}  >
                    {currentCallLists?.map((item, index) => (
                        <Card className="callListCard" style={{ width: '18rem' }} key={index}>
                            <Card.Img variant="top" src="/telephone.png" />
                            <Card.Body>
                                <Card.Title>
                                    {item.description}
                                    <Link to={`/callList/${item.id}`} className="dark" style={{ textDecoration: 'none' }}  >
                                        {item.title}
                                    </Link></Card.Title>
                                <Card.Subtitle className="callListCardText">
                                    {item.description}
                                    {item.creator}
                                </Card.Subtitle>

                                <Button className="callListDeleteBtn" variant="outline-danger" size="sm" style={{ float: 'right' }}
                                    onClick={() => {
                                        deleteCallList(item);


                                    }}
                                >
                                    X
                                </Button>

                                <Button className="callListUpdateBtn" variant="outline-primary" size="sm" style={{ float: 'right' }}
                                    onClick={() => {
                                        updateCallList(item);

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

        </ul>
    );

}
