import React from 'react';


class ProfileFriendsContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="contact-box center-version">
          <a href="#">
            <img alt="image" className="img-circle" src="img/Friends/woman-1.jpg" />
            <h3 className="m-b-xs"><strong>John Doe</strong></h3>

            <div className="font-bold">Graphics designer</div>
          </a>
          <div className="contact-box-footer">
            <div className="m-t-xs btn-group">
              <a href="messages1.html" className="btn btn-xs btn-white"><i className="fa fa-envelope" />Send Messages</a>
              <a className="btn btn-xs btn-white"><i className="fa fa-user-plus" /> Follow</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFriendsContact;
