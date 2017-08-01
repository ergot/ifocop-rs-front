import React from 'react';

class LoginFormSignUp extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-block center">
                    <div className="center">
                        <h4 className="m-b-0"><span className="icon-text">Inscription</span></h4>
                        <p className="text-muted">Création de compte</p>
                    </div>
                    <form action="#" method="get">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full Name"></input>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address"></input>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password"></input>
                        </div>
                        <button type="submit" className="btn btn-azure">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginFormSignUp;