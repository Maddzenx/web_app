import axios from "axios";
import { useState } from "react";
import { Button, Container, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {

    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:8080/user/register", {
        username: username,
        email: email,
        password: password
      });
      res.data && window.location.replace("/");
    } catch (e: any) {
      setError(true);
    }
  };

  return (
    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <h1 className="LoginTitel">Create new user</h1>
      <Container className="callListContainer" style={{ paddingTop: "60px" }}>

        <InputGroup>

          <form className="registerForm" onSubmit={handleSubmit}>

            <input
              type="text"
              className="registerInput"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              className="registerInput"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="registerInput"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="registerButton" type="submit">
              Register
            </Button>
          </form>

          <Link className="link" to="/">
            Back to Login page
          </Link>

          {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </InputGroup>
      </Container>
    </div>
  );
}
