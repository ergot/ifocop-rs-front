import React from 'react';
// import Axios from "axios";
import request from "superagent"


class LoginFormSignUp extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        messageError: ''
    }


    handleSubmit = (event) =>{
        event.preventDefault()
        let $this = this;

        request
            .post('http://localhost:3000/api/myUsers')
            .send(this.state)
            .end(function(err, res) {

                if(res.statusCode === 200) {
                    console.log('--- inscription valide')
                    $this.setState({messageError:''})
                    return console.log(res)
                } else {
                    console.log('--- inscription non complété')
                    console.log(res.body.error.message)
                    $this.setState({messageError:res.body.error.message})
                }
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-block center">
                    <div className="center">
                        <h4 className="m-b-0"><span className="icon-text">Inscription</span></h4>
                        <p className="text-muted">Création de compte</p>
                        <p className="text-danger">{this.state.messageError}</p>
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