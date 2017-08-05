import React from 'react';
import Header from './template/Header';
import Footer from './Footer';
import ProfileBigPicture from './ProfileBigPicture';
import ProfileNavTab from './ProfileNavTab';
import ProfileTimeLine from './ProfileTimeLine';
import ProfileAbout from './ProfileAbout';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {/* profile big picture */}
              <div className="row">
                <div className="col-md-12">
                  <ProfileBigPicture />
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
