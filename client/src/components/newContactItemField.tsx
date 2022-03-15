import { useState } from "react";
import { Button } from "react-bootstrap";

export function NewContactItemField(props: { addNewContact: (name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string,) => void }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");


  return <li>
    <form onSubmit={async (event) => {
      event.preventDefault();
      props.addNewContact(name, company, position, telephoneNumber, email, comment);
    }}>
       
      <input type="text" value={name} placeholder="Name" onChange={(event) => {
        setName(event.target.value)
      }}></input>
      
      <input type="text" value={company} placeholder="Company" onChange={(event) => {
        setCompany(event.target.value)
      }}></input>
      
      <input type="text" value={position} placeholder="Position" onChange={(event) => {
        setPosition(event.target.value)
      }}></input>
      
      <input type="text" value={telephoneNumber} placeholder="Phone number" onChange={(event) => {
        setTelephoneNumber(event.target.value)
      }}></input>
      
      <input type="email" value={email} placeholder="Email" onChange={(event) => {
        setEmail(event.target.value)
      }}></input>
      
      <input type="text" value={comment} placeholder="Comment" onChange={(event) => {
        setComment(event.target.value)
      }}></input>
      
      <Button size="sm" type="submit">save</Button>




    </form>
  </li>
}
