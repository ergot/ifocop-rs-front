import React from 'react';
import ProfileFriendsContact from './ProfileFriendsContact';


class ProfileFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderFriendContact = [];
    if (this.props.friends.length === 0) {
      //renderFriendContact.push(<p>pas de friend</p>);
    } else {
      this.props.friends.forEach((friend, index) => {
        renderFriendContact.push(<ProfileFriendsContact key={friend.id} user={friend} />);
      });
    }

    return (
      <div role="tabpanel" className="tab-pane" id="messages">
        <div className="row">

          {renderFriendContact}
          {/* <ProfileFriendsContact /> */}

        </div>
      </div>
    );
  }
}

export default ProfileFriends;
