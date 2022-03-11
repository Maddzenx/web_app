import React, { FC, useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from './sideBar';
import { Outlet } from 'react-router-dom';
import { ICallList } from '../interfaces';
import AddCallList from './addCallList';
import styles from '../callList.module.css';

const CallListCards: FC = () => {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [callList, setCallList] = useState<ICallList[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "title") {
            setTitle(event.target.value)
        } else {
            setDescription(event.target.value)
        }
    };

    
    const addCallList = (): void => { //send req to server 
        const newCallList = { callListTitle: title, callListDescription: description };
        setCallList([...callList, newCallList]);
        setTitle("");
        setDescription("");
    }

   const deleteCallList = (callListTitleToDelete: string): void => { //send req to server 
        setCallList(
            callList.filter((title) => {
                return title.callListTitle !== callListTitleToDelete;
            })
        );
    };

  



    return (
        <div className={styles.CallListCard}>
            <SideBar />
            <div className={styles.header}></div>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="Name..." name="title" value={title} onChange={handleChange} />
                <input type="text" placeholder="Description..." name="description" value={description} onChange={handleChange} />
            </div>
            <button onClick={addCallList}>Add Call List</button>
            <div className={styles.callLists}>
                {callList.map((callList: ICallList, key: number) => {
                    return <AddCallList key={key} callList={callList} deleteCallList={deleteCallList} />;
                })}
            </div>
            <Outlet />
        </div>
    );

};
export default CallListCards;


  