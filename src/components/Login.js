import React from 'react';
import Footer from './Footer';
import LoginNavBar from './LoginNavBar';
import LoginFormLogin from './LoginFormLogin';
import LoginFormSignUp from './LoginFormSignUp';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginNavBar />
        <div className="wrapper">
          <div className="parallax filter-black">
            <div className="parallax-image" />
            <div className="small-info">
              <div className="col-sm-10 col-sm-push-1 col-md-6 col-md-push-3 col-lg-6 col-lg-push-3">
                <div className="card-group animated flipInX">
                  <LoginFormLogin history={this.props.history} />
                  <LoginFormSignUp history={this.props.history} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
