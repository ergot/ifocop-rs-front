import React from 'react';
import request from 'superagent';

class HomeLeftLinks extends React.Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
    this.state = {
      user: {
        firstName: 'Loading',
        lastName: '...',
        profilePicture: 'https://randomuser.me/api/portraits/lego/5.jpg',
      },

    };
    this.getUser(sessionStorage.userId);
  }

  getUser(idUser) {
    request
      .get(`${sessionStorage.pathApi}/myUsers/${idUser}`)
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
    return (
      <div className="col-md-3">
        <div className="profile-nav">
          <div className="widget">
            <div className="widget-body">
              <div className="user-heading round">
                <a href="#">
                  <img src={this.state.user.pictureProfile} alt="" />
                </a>
                <h1>{this.state.user.firstName } {this.state.user.lastName}</h1>
                {/* <p>@username</p> */}
              </div>

              <ul className="nav nav-pills nav-stacked">
                {/* <li className="active"><a href="#"> <i className="fa fa-user" /> News feed</a></li> */}
                <li><a href="#"> <i className="fa fa-reorder" /> All</a></li>
                <li><a href="#"> <i className="fa fa-bullhorn" />Messages public</a></li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" /> Messages Non Lus
                    <span className="label label-info pull-right r-activity">9</span>
                  </a>
                </li>

                <li><a href="#"> <i className="fa fa-rss" /> En cours</a></li>
                <li><a href="#"> <i className="fa fa-archive" /> Archivé</a></li>
                {/*<li><a href="#"> <i className="fa fa-floppy-o" /> Saved</a></li>*/}
              </ul>
            </div>
          </div>

          {/* <div className="widget"> */}
          {/* <div className="widget-body"> */}
          {/* <ul className="nav nav-pills nav-stacked"> */}
          {/* <li><a href="#"> <i className="fa fa-globe" /> Pages</a></li> */}
          {/* <li><a href="#"> <i className="fa fa-gamepad" /> Games</a></li> */}
          {/* <li><a href="#"> <i className="fa fa-puzzle-piece" /> Ads</a></li> */}
          {/* <li><a href="#"> <i className="fa fa-home" /> Markerplace</a></li> */}
          {/* <li><a href="#"> <i className="fa fa-users" /> Groups</a></li> */}
          {/* </ul> */}
          {/* </div> */}
          {/* </div> */}

        </div>
      </div>
    );
  }
}

export default HomeLeftLinks;
