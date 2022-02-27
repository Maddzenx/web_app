import { useState } from "react";

export function NewContactItemField(props: { addNewContact: (name: string) => void }) { 
    const [name, setName] = useState("");
  
    return <li>
      <form onSubmit={async (event) => {
        event.preventDefault();
        props.addNewContact(name);
      }}>
        <input type="text" value={name} onChange={(event) => {
        setName(event.target.value)
      }}></input>
     </form>
     </li>
  }
