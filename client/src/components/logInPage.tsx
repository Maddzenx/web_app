import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';
import {  Container, InputGroup } from 'react-bootstrap';
import { LoginItemField } from './loginItemField';
import { Link } from 'react-router-dom';



class LogInPageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onLogIn = this.onLogIn.bind(this);


    }


    private async onLogIn(username: string, password: string) {

        try {
            const res = await axios.post("http://localhost:8080/user/login", {
                username: username,
                password: password
            });

            res.data && window.location.replace(`/dashboard/${username}`);
        } catch (e: any) {
            prompt("There was a log in error, either wrong password or wrong username, have you tried creating a user?");
        }

    }







    render() {


        return (
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="/telephone.png" alt="Phone Image" className="img-fluid"></img>
                        </div>
                        <div
                            className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">


                            <div className="form-outline mb-4">
                                <Container className="newCallListInputGroup">
                                    <InputGroup className="newCallListInput">
                                        <LoginItemField newLogin={this.onLogIn} />
                                        <Link to={"/register"} className="dark" style={{ textDecoration: 'none' }}  >
                                            Register new account
                                        </Link>
                                    </InputGroup>

                                </Container>



                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }




}

export default LogInPageComponent;