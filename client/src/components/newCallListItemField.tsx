import { useState } from "react";

export function NewCallListItemField(props: { addNewCallList: (title: string, description: string) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return <li>
    <form onSubmit={async (event) => {
      event.preventDefault();
      props.addNewCallList(title, description);
    }}>
      <input type="text" placeholder="Title" required value={title} onChange={(event) => {
        setTitle(event.target.value)
      }}></input>
      <input type="text" placeholder="Description" required value={description} onChange={(event) => {
        setDescription(event.target.value)
      }}></input>
    </form>
  </li>
}