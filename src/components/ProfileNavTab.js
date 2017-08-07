import React from 'react';


class ProfileNavTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="nav nav-pills nav-pills-custom-minimal custom-minimal-bottom profile-tabs">
        <li role="presentation" className="active"><a href="#timeline" aria-controls="timeline" role="tab" data-toggle="tab" aria-expanded="true">Timeline</a></li>
        <li role="presentation" className=""><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false">About</a></li>
        <li role="presentation" className=""><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false">Friends</a></li>
        {/*<li role="presentation" className=""><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab" aria-expanded="false">Photos</a></li>*/}
      </ul>

    );
  }
}

export default ProfileNavTab;
