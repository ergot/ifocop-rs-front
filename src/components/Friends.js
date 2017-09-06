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

  getAllFriends(searchName = null) {
    request
      .get(`${process.env.REACT_APP_URL_API}/friendsLists/getFriendship`)
      .query({ idUser: sessionStorage.userId, isConfirmed: true })
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- submit friends  ---');
          const listOfFriends = [];
          let idFriend = null;

          res.body.friendship.map((friendship) => {
            // eslint-disable-next-line max-len
            friendship.sender === sessionStorage.userId ? idFriend = friendship.receiver : idFriend = friendship.sender;
            request.get(`${process.env.REACT_APP_URL_API}/myUsers/${idFriend}`)
              .set('Authorization', sessionStorage.token)
              .end((err, res) => {
                if (res.statusCode === 200) {
                  console.log('--- submit friends / user ---');
                  if (searchName === null) {
                    this.setState({ friends: [...this.state.friends, res.body] });
                  } else {
                    const regex = new RegExp(searchName, 'g');
                    if (res.body.lastName.search(regex) > -1) {
                      return this.setState({ friends: [...this.state.friends, res.body] });
                    }

                    if (res.body.firstName.search(regex) > -1) {
                      return this.setState({ friends: [...this.state.friends, res.body] });
                    }
                  }
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
      this.setState({ friends: [] });
      this.getAllFriends();
    } else {
      this.setState({ friends: [] });
      this.getAllFriends(value);
    }
  }

  render() {
    let renderFriends = null;
    if (this.state.friends.length === 0) {
      renderFriends = <p>pas de résultats</p>;
    } else {
      renderFriends = <ProfileFriends friends={this.state.friends} />;
    }

    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">
            <FriendsInputSearch findFriends={this.findFriends} />
          </div>
          <p />
          <div className="row">
            {renderFriends}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Friends;
