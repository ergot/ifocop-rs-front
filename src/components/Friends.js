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

    request
      .get(`${process.env.REACT_APP_URL_API}/friendsLists/getFriendship`)
      .query({ idUser: sessionStorage.userId, isConfirmed: true })
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        console.log(res.body);
        if (res.statusCode === 200) {
          console.log('--- submit friends  ---');
          const listOfFriends = [];
          let idFriend = null;

          res.body.friendship.map((friendship) => {
            // eslint-disable-next-line max-len
            friendship.sender === sessionStorage.userId ? idFriend = friendship.receiver : idFriend = friendship.sender;
            console.log(idFriend);
            request.get(`${process.env.REACT_APP_URL_API}/myUsers/${idFriend}`)
              .set('Authorization', sessionStorage.token)
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
    console.log(value);

    if (value === '') {
      this.setState({ friends: [] });
      this.getAllFriends();
    } else {
      const results = [];
      this.state.friends.map((user) => {
        const regex = new RegExp(value, 'g');

        if (user.lastName.search(regex) > -1) {
          return results.push(user);
        }

        if (user.firstName.search(regex) > -1) {
          return results.push(user);
        }
      });

      this.setState({ friends: results });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">
            <FriendsInputSearch findFriends={this.findFriends} />
          </div>
          <p />
          <div className="row">
            <ProfileFriends friends={this.state.friends} />
          </div>

        </div>
        <Footer />
      </div>

    );
  }
}

export default Friends;
