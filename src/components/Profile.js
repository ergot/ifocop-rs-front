import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileBigPicture from './ProfileBigPicture';
import ProfileNavTab from './ProfileNavTab';
import ProfileTimeLine from './ProfileTimeLine';
import ProfileAbout from './ProfileAbout';
import ProfileFriends from './ProfileFriends';
import ProfileTimeLineWidget from './ProfileTimeLineWidget';
import ProfileTimeLineWidgetFriends from './ProfileTimeLineWidgetFriends';
import ProfileTimeLinePosts from './ProfileTimeLinePosts';
import HomeCenterPosts from './HomeCenterPosts';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let idUser = null;
    if (this.props.match.params.idUser === undefined) {
      idUser = sessionStorage.userId;
    } else {
      idUser = this.props.match.params.idUser;
    }

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
                  {/* <ProfileTimeLine idUser={idUser} /> */}
                  <div className="tab-pane active" role="tabpanel" id="timeline">
                    <div className="row">
                      {/* colon left widget */}
                      <div className="col-md-5">
                        <ProfileTimeLineWidget />
                        <ProfileTimeLineWidgetFriends />
                      </div>
                      {/* colon right post line */}
                      <div className="col-md-7">
                        {/* <ProfileTimeLinePosts /> */}
                        <div className="row">
                          <HomeCenterPosts colmd={12} idUser={idUser} path="profile" />
                        </div>
                      </div>

                    </div>

                  </div>
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
