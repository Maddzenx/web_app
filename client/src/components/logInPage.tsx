import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onChange, validateForm } from './utils';

class LogInPageComponent extends React.Component<any, any> {
    constructor(props: any){
        super(props);

        this.state={
            email: {name: 'email', value: '', required: true, error: ''},
            password: {name: 'password', value: '', required: true, error: ''},
            rememberMe: {name: 'rememberMe', value: false, required: false, error: ''},
        }
    }

    render(){
        const{email, password, rememberMe} = this.state;

        return (
        <section className="vh-100">
            <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="/telephone.png" alt="Phone Image"className="img-fluid"></img>
                </div>
                <div 
                className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h1>Log in</h1>
                <form onSubmit={this.onSubmit} >
                    <div className="form-outline mb-4">
                    <input 
                    className={email.error.length>0 ? "form-control is-invalid":(email.value.length>0?"form-control is-valid" : "form-control")} 
                    type="email"
                    name={email.name}
                    value={email.value}
                    onChange= {this.onChange}/>
                    <label className="form-label">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                    <input 
                     className={password.error.length>0 ? "form-control is-invalid":(password.value.length>0?"form-control is-valid" : "form-control")} 
                     type="password"
                     name={password.name}
                     value={password.value}
                     onChange= {this.onChange} />
                    <label className="form-label">Password</label>
                    </div>
                    <div className="form-outline mb-4">
                    <div className="row">
                        <div className="col">
                        <div className="form-check">
                            <input 
                            className="form-check-input" 
                            name={rememberMe.name}
                            checked={rememberMe.value}
                            onChange= {this.onChange}
                            type="checkbox"  
                             />
                            <label className="form-check-label checkBoxRememberMe">Remember me</label>
                        </div>
                        <a href="#">Forgot password?</a>
                        </div>
                        <div className="col">
                        <div className="row">
                            <a className="btn btn-success rounded-pill" href="dashboard.html" role="button">Sign in</a>
                            <a href="signUp.html">Create a new account</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </section>
        );
    }

    onChange = (e: any) => {
        const name = e.target.name;
        let value = e.target.value;

        if(name === this.state.rememberMe.name){
            value = e.target.checked;
        }
        onChange(this, name, value)

    }

    onSubmit = (e: any) => {
        e.preventDefault();

        if(validateForm(this)){
            const {email, password, rememberMe} = this.state;
            const model = {
               email: email.value,
               password: password.value,
               rememberMe: rememberMe.value     
            }
            console.log(model);
        }
    }
}
  
  export default LogInPageComponent;