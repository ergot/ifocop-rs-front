import React from 'react';
import request from 'superagent';


class ProfileBigPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: props.idUser,
      user: undefined,
    };
    this.getUser = this.getUser.bind(this);
    this.getUser();
  }

  getUser() {
    request
      .get(`${sessionStorage.pathApi}/myUsers/${this.state.idUser}`)
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- profil big picture / get data user ---');
          this.setState({ user: res.body });
        } else {
          console.log('--- profil big picture / get data user FAIL ---');
        }
      });
  }

  render() {
    const firstName = this.state.user ? this.state.user.firstName : 'firstName';
    const lastName = this.state.user ? this.state.user.lastName : 'lastName';
    const pseudo = this.state.user ? this.state.user.pseudo : 'pseudo';

    return (
      <div className="bg-picture" style={{ backgroundImage: "url('/img/Cover/cover.jpg')" }}>
        <span className="bg-picture-overlay" /> {/* <!-- overlay --> */}
        {/* <!-- meta --> */}
        <div className="box-layout meta bottom">
          <div className="col-md-6 clearfix">
            <span className="img-wrapper pull-left m-r-15">
              <img src="/img/Friends/guy-3.jpg" alt="" style={{ width: '64px' }} className="br-radius" />
            </span>
            <div className="media-body">
              <h3 className="text-white mb-2 m-t-10 ellipsis">{firstName} {lastName}</h3>
              <h5 className="text-white" >{pseudo}</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pull-right">
              <div className="dropdown">

                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                  <li><a href="#">Poke</a></li>
                  <li><a href="#">Private message</a></li>
                  <li className="divider" />
                  <li><a href="#">Unfollow</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div> {/* <!--/ meta --> */}
      </div>
    );
  }
}

export default ProfileBigPicture;
