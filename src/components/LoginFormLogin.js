import React from 'react';

class LoginFormLogin extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="center">
                        <h4 className="m-b-0"><span className="icon-text">Login</span></h4>
                        <p className="text-muted">Connection à votre compte</p>
                    </div>
                    <form action="#" method="get">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address"></input>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"></input>
                            <a href="#" className="pull-xs-right">
                                <small>Forgot?</small>
                            </a>
                            <div className="clearfix"></div>
                        </div>
                        <div className="center">
                            <a href="#" className="btn  btn-azure">
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