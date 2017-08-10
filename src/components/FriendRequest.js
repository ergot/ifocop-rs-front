import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendRequestTableTr from './FriendRequestTableTr';
import request from 'superagent';


class FriendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.getFriendship = this.getFriendship.bind(this);
    this.deleteFriendShip = this.deleteFriendShip.bind(this);
    this.state = { friendship: [] };
    this.getFriendship();
  }

  deleteFriendShip(id) {
    const newState = [];
    this.state.friendship.map((element) => {
      if (element._id !== id) {
        newState.push(element);
      }
    });
    this.setState({ friendship: newState });
  }

  getFriendship() {
    const APP = window.APP.reducer({ type: 'GETSTATE' });

    request
      .get(`${APP.server.url}/friendsLists/getFriendship`)
      .set('Authorization', APP.token.id)
      .query({ idUser: APP.token.userId, isConfirmed:false})
      .end((err, res) => {
        console.log(res.body);
        if (res.statusCode === 200) {
          console.log('--- get friend request  ---');
          this.setState({ friendship: res.body.friendship });
        } else {
          console.log('--- get friend request error ---');
        }
      });
  }

  render() {
    const renderFriendRequest = [];

    if (this.state.friendship === undefined || this.state.friendship.length === 0) {
      console.log('friend request pas de FR / chargement des td');
    } else {
      this.state.friendship.forEach((element) => {
        renderFriendRequest.push(<FriendRequestTableTr key={element._id} value={element} deleteFriendShip={this.deleteFriendShip} />);
      });
    }

    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">

            {/* debut de la list */}
            <div className="col">
              <div className="widget">
                <div className="table-responsive">

                  <table className="table user-list">

                    <thead>
                      <tr>
                        <th><span>User</span></th>
                        <th><span>Origin de la request</span></th>
                        <th className="text-center"><span>Status</span></th>
                        <th><span>Email</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderFriendRequest}
                    </tbody>


                  </table>
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

export default FriendRequest;
