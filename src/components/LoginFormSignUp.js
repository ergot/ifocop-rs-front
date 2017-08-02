import React from 'react';
// import Axios from "axios";
import request from "superagent";


class LoginFormSignUp extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        messageForm: ''
    };


    handleSubmit = (event) =>{
        event.preventDefault();
        let $this = this;

        request
            .post('http://localhost:3000/api/myUsers')
            .send(this.state)
            .end(function(err, res) {

                if(res.statusCode === 200) {
                    console.log('--- inscription valide ---');
                    $this.setState({messageForm: 'Consulter votre email pour valider le compte'})
                    $this.messageForm.className = 'text-success';
                    $this.setState({name:''});
                    console.log(res)
                } else {
                    console.log('--- inscription non valide ---');
                    $this.messageForm.className = 'text-danger';
                    $this.setState({messageForm:res.body.error.message});
                    console.log(res.body.error.message)
                }
            });
    };

    render() {
        return (
            <div className="card">
                <div className="card-block center">
                    <div className="center">
                        <h4 className="m-b-0"><span className="icon-text">Inscription</span></h4>
                        <p className="text-muted">Création de compte</p>
                        <p  ref={ (messageForm)=> {
                                    this.messageForm  = messageForm
                                }}
                            className="">{this.state.messageForm}
                            </p>
                    </div>
                    <form action="#" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full Name"
                                   onChange={ (event)=> this.setState({name:event.target.value})}>
                            </input>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address"
                                   onChange={ (event)=> this.setState({email:event.target.value})}
                            ></input>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"
                                   onChange={ (event)=> this.setState({password:event.target.value})}
                            ></input>
                        </div>

                        <button type="submit" className="btn btn-azure">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginFormSignUp;