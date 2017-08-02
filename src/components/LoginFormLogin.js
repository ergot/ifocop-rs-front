import React from 'react';
import request from "superagent";

class LoginFormLogin extends React.Component {
    state = {
        messageForm: undefined
    };

    submit = () => {
        let $this = this;

        request
            .post('http://localhost:3000/api/myUsers/login')
            .send({password:this.password.value, email:this.email.value})
            .end(function(err, res) {
                console.log(err)
                console.log(res.body)
                if(res.statusCode === 200) {
                    console.log('--- log in valide ---');
                    console.log(res.body)
                } else {
                    console.log('--- log in non valide ---');
                    console.log(res.body.error.message)
                    $this.messageForm.className = 'text-danger';
                    $this.setState({messageForm:res.body.error.message});
                }
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="center">
                        <h4 className="m-b-0"><span className="icon-text">Login</span></h4>
                        <p className="text-muted">Connection à votre compte</p>
                        <p  ref={ (messageForm)=> {
                            this.messageForm  = messageForm
                        }} className="">{this.state.messageForm}
                        </p>
                    </div>
                    <form action="#" method="get">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address"
                            ref={(input)=>{this.email = input}}></input>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"
                                   ref={(input)=>{this.password = input}}></input>
                            <a href="#" className="pull-xs-right">
                                <small>Forgot?</small>
                            </a>
                            <div className="clearfix"></div>
                        </div>
                        <div className="center">
                            <a href="#" className="btn  btn-azure" onClick={this.submit}>
                                Login
                            </a>
                        </div>
                    </form>


                </div>
            </div>


        )
    }
}

export default LoginFormLogin;