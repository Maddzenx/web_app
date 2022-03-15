import { useState } from "react";
import { Button } from "react-bootstrap";
import '../App.css';

export function NewCallListItemField(props: { addNewCallList: (title: string, description: string) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return <form onSubmit={async (event) => {
    event.preventDefault();
    props.addNewCallList(title, description);
  }}>
    <h1 className="addNewCallListTitle">Create new Call List</h1>
    <input className="newCallListTitleInput" type="text" placeholder="Title" required value={title} onChange={(event) => {
      setTitle(event.target.value)
    }}></input>
    <input className="newCallListDescriptionInput" type="text" placeholder="Description" required value={description} onChange={(event) => {
      setDescription(event.target.value)
    }}></input>
    <Button className="saveCallListBtn" size="sm" type="submit">save</Button>
  </form>

}