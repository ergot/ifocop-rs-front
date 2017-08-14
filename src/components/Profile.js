import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileBigPicture from './ProfileBigPicture';
import ProfileNavTab from './ProfileNavTab';
import ProfileTimeLine from './ProfileTimeLine';
import ProfileAbout from './ProfileAbout';
import ProfileFriends from './ProfileFriends';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getIdUser = this.getIdUser.bind(this);
  }

  getIdUser(props) {
    let idUser = null;
    if (props.match.params.idUser === undefined) {
      idUser = window.sessionStorage.userId;
    } else {
      idUser = props.match.params.idUser;
    }

    return idUser;
  }


  render() {
    const idUser = this.getIdUser(this.props);
    console.log(idUser);
    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {/* profile big picture */}
              <div className="row">
                <div className="col-md-12">
                  <ProfileBigPicture idUser={idUser} />
                </div>
              </div>
              {/* page content */}
              <div className="row" >
                {/* nav tab */}
                <ProfileNavTab />
                {/* Tab panes */}
                <div className="tab-content">
                  {/* timeline */}
                  <ProfileTimeLine />
                  {/* about */}
                  <ProfileAbout />
                  {/* friends */}
                  <ProfileFriends />
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

export default Profile;
