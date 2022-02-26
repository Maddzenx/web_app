import { useState } from "react";

export function NewItemField(props: {addNewCallList: (title: string) => void }) {
    const [title, setTitle] = useState("");
  
    return <li>
      <form onSubmit={async (event) => {
        event.preventDefault();
        props.addNewCallList(title);
      }}>
        <input type="text" value={title} onChange={(event) => {
        setTitle(event.target.value)
      }}></input>
      </form>
    </li>
  }