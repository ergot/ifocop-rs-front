import React from 'react';
import Header from './template/Header';
import Footer from './Footer';
import HomeLeftLinks from './HomeLeftLinks';
import HomeCenterPosts from './HomeCenterPosts';
import ProfileBigPicture from './ProfileBigPicture';

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
              <div className="row">
                <div className="col-md-12">
                  <ProfileBigPicture />
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
