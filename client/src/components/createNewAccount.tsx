
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class CreateAccountComponent extends React.Component<any, any> {
  constructor(props: any){
    super(props);

    this.state={
        username: {name: 'username', value: '', required: true, error: ''},
        email: {name: 'email', value: '', required: true, error: ''},
        password: {name: 'password', value: '', required: true, error: ''},
        repeatPassword: {name: 'password', value: '', required: true, error: ''},
    }
}
  render(){
    const{username, email, password, repeatPassword} = this.state;
    return (
    <section className="vh-100 bg-image" >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-14 col-md-10 col-lg-8 col-xl-7">
                <div className="card border-radius: 15px;">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create new account</h2>
      
                    <form>
      
                      <div className="form-outline mb-3">
                        <input 
                        className="form-control form-control-lg"
                        name={username.name}
                        value={username.value}
                        onChange= {this.onChange} />
                        <label className="form-label signUpUsernameInput">Username</label>
                      </div>
      
                      <div className="form-outline mb-3">
                        <input 
                        className="form-control form-control-lg"
                        name={email.name}
                        value={email.value}
                        onChange= {this.onChange} />
                        <label className="form-label signUpEmailInput">Email</label>
                      </div>
      
                      <div className="form-outline mb-3">
                        <input 
                        type="password"  
                        className="form-control form-control-lg"
                        name={password.name}
                        value={password.value}
                        onChange= {this.onChange} />
                        <label className="form-label signupPwordInput1">Password</label>
                      </div>
      
                      <div className="form-outline mb-3">
                        <input 
                        type="password" 
                        className="form-control form-control-lg"
                        name={repeatPassword.name}
                        value={repeatPassword.value}
                        onChange= {this.onChange} />
                        <label className="form-label signupPwordInput2">Repeat your password</label>
                      </div>
      
                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                          value=""
                          id="termscheck"
                        />
                        <label className="form-check-label termscheck">
                          I agree to all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>
      
                      <div className="d-flex justify-content-center">
                        
                        <a className="btn btn-success btn-block btn-lg gradient-custom-4 text-white" href="startPage.tsx" role="button">Register</a>
                      </div>
      
      
                    </form>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>   
    );
  }
  onChange = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;

}
}

  
  export default CreateAccountComponent;