import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendsInputSearch from './FriendsInputSearch';
import request from 'superagent';
import ProfileFriends from './ProfileFriends';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.getAllFriends = this.getAllFriends.bind(this);
    this.getAllFriends();
    this.findFriends = this.findFriends.bind(this);
    this.state = { friends: [] };
  }

  getAllFriends() {
    const APP = window.APP.reducer({ type: 'GETSTATE' });
    request
      .get(`${APP.server.url}/friendsLists/getFriendship`)
      .query({ idUser: APP.token.userId, isConfirmed: true })
      .set('Authorization', APP.token.id)
      .end((err, res) => {
        console.log(res.body);
        if (res.statusCode === 200) {
          console.log('--- submit friends  ---');
          const listOfFriends = [];
          let idFriend = null;

          res.body.friendship.map((friendship) => {
            // eslint-disable-next-line max-len
            friendship.sender === APP.token.userId ? idFriend = friendship.receiver : idFriend = friendship.sender;
            console.log(idFriend);
            request.get(`${APP.server.url}/myUsers/${idFriend}`)
              .set('Authorization', APP.token.id)
              .end((err, res) => {
                if (res.statusCode === 200) {
                  console.log('--- submit friends / user ---');
                  this.setState({ friends: [...this.state.friends, res.body] });
                } else {
                  console.log('--- submit friends / user ERROR ---');
                }
              });
          });
        } else {
          console.log('--- submit friends ERROR ---');
        }
      });
  }

  findFriends(value) {
    if (value === '') {
      this.getAllFriends();
    }
    const results = [];
    this.state.friends.map((user) => {
      const regex = new RegExp(this.state.value, 'g');

      if (user.name.search(regex) > -1) {
        return results.push(user);
      }

      if (user.firstName.search(regex) > -1) {
        return results.push(user);
      }
    });
    res.body.map((user) => {
      const regex = new RegExp(this.state.value, 'g');

      if (user.email.search(regex) > -1) {
        return results.push(user);
      }
    });
    this.setState({ friends: results });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">
            <FriendsInputSearch />
          </div>
          <p />
          <div className="row">
            <ProfileFriends friends={this.state.friends} findFriends={this.findFriends} />
          </div>

        </div>
        <Footer />
      </div>

    );
  }
}

export default Friends;
