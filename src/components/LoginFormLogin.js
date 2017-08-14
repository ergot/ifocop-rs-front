/* eslint-disable no-undef */
import React from 'react';
import request from 'superagent';

class LoginFormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageForm: undefined,
    };
    this.submit = this.submit.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.moveToHome = this.moveToHome.bind(this);
  }

  moveToHome() {
    this.props.history.push('/home');
  }

  submit() {
    const $this = this;
    request
      .post('http://localhost:3000/api/myUsers/login')
      .send({ password: $this.password.value, email: $this.email.value })
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- log in valide ---');
          console.log(res.body);
          APP.setState({ token: res.body });
          sessionStorage.userId = res.body.userId
          $this.moveToHome();
        } else {
          console.log('--- log in non valide ---');
          console.log(res.body.error.message);
          $this.messageForm.className = 'text-danger';
          $this.setState({ messageForm: res.body.error.message });
        }
      });
  }
  forgotPassword() {
    if (this.email.value === '') {
      this.messageForm.className = 'text-warning';
      this.setState({ messageForm: 'merci de remplir le champ email' });
    } else {
      const $this = this;
      request
        .post('http://localhost:3000/api/myUsers/reset')
        .send({ email: $this.email.value })
        .end((err, res) => {
          if (res.statusCode === 204) {
            console.log('--- password reset valid ---');
            $this.messageForm.className = 'text-success';
            $this.setState({ messageForm: 'Merci de consulter votre adresse email' });
          } else {
            console.log('--- password reset non valide ---');
            $this.messageForm.className = 'text-danger';
            $this.setState({ messageForm: res.body.error.message });
          }
        });
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <div className="center">
            <h4 className="m-b-0"><span className="icon-text">Login</span></h4>
            <p className="text-muted">Connection à votre compte</p>
            <p
              ref={(messageForm) => {
                this.messageForm = messageForm;
              }}
              className=""
            >{this.state.messageForm}
            </p>
          </div>
          <form action="#" method="get">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                ref={(input) => { this.email = input; }}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={(input) => { this.password = input; }}
              />
              <a href="#" className="pull-xs-right">
                <small onClick={this.forgotPassword}>Forgot?</small>
              </a>
              <div className="clearfix" />
            </div>
            <div className="center">
              <a href="#" className="btn  btn-azure" onClick={this.submit}>
                                Login
              </a>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default LoginFormLogin;
