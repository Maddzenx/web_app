import { Contact } from '../../../server/src/model/contact.interface';
import React from 'react';
import axios from "axios";
import SideBar from './sideBar';
import { NewCallListItemField } from './newCallListItemField';
import { CallList } from '../../../server/src/model/callList.interface';
import { Accordion, Button, FormControl, InputGroup } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import addCallList from './addCallList';

interface DashboardProps {
    callLists: CallList[],
}
const sideBar = <SideBar />
export class Dashboard extends React.Component<DashboardProps, {}> {
    constructor(props: DashboardProps) {
        super(props);

        this.addNewCallList = this.addNewCallList.bind(this);
    }

    private async addNewCallList(id: number, title: string, creator: string, contacts: Array<Contact["id"]>, description?: string) {
        await axios.put("http://localhost:8080/callList", { id: id, title: title, creator: creator, contacts: contacts, description: description });
    }

    override render() {
        return <ul><SideBar />

            <InputGroup className="mb-3">
                <NewCallListItemField key="new item" addNewCallList={function (title: string, description: string): void {
                    throw new Error('Function not implemented.');
                }} />
                <Button>Add Call List</Button>
            </InputGroup>



        </ul>
    }
}