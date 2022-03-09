import { useState } from "react";

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
      Name: 
      <input type="text" value={name} onChange={(event) => {
        setName(event.target.value)
      }}></input>
      Company:
      <input type="text" value={company} onChange={(event) => {
        setCompany(event.target.value)
      }}></input>
      Position:
      <input type="text" value={position} onChange={(event) => {
        setPosition(event.target.value)
      }}></input>
      Phone number:
      <input type="text" value={telephoneNumber} onChange={(event) => {
        setTelephoneNumber(event.target.value)
      }}></input>
      Email:
      <input type="text" value={email} onChange={(event) => {
        setEmail(event.target.value)
      }}></input>
      Comment:
      <input type="text" value={comment} onChange={(event) => {
        setComment(event.target.value)
      }}></input>




    </form>
  </li>
}
