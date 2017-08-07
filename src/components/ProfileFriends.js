import React from 'react';
import ProfileFriendsContact from './ProfileFriendsContact';


class ProfileFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane" id="messages">
        <div className="row">
          <ProfileFriendsContact />
          <ProfileFriendsContact />
          <ProfileFriendsContact />
          <ProfileFriendsContact />
          <ProfileFriendsContact />
          <ProfileFriendsContact />
          <ProfileFriendsContact />
        </div>
      </div>
    );
  }
}

export default ProfileFriends;
