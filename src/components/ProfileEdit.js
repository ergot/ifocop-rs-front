import React from 'react';
import Header from './Header';
import Footer from "./Footer";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div>
            <Header/>
            <div className="container page-content">


            </div>
            <Footer/>
          </div>

      );
  }
}

export default ProfileEdit;
