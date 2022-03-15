import { useState } from "react";
import { Button } from "react-bootstrap";
import '../App.css';

export function LoginItemField(props: { newLogin: (username: string, password: string) => void }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return <form onSubmit={async (event) => {
      event.preventDefault();
      props.newLogin(username, password);
    }}>
      <h1 className= "LoginTitel">Log in</h1>
      <input className = "loginUsernameField" type="text" placeholder="username" required value={username} onChange={(event) => {
        setUserName(event.target.value)
      }}></input>
      <input className = "loginPasswordField" type="text" placeholder="password" required value={password} onChange={(event) => {
        setPassword(event.target.value)
      }}></input>
      <Button className="loginButton" size="sm" type="submit">Login</Button>
    </form>
  
}