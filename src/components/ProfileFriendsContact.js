import React from 'react';
import request from 'superagent';

class ProfileFriendsContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.sendFriendRequest = this.sendFriendRequest.bind(this);
  }

  sendFriendRequest(event) {
    console.log(event);
    const APP = window.APP.reducer({ type: 'GETSTATE' });

    request
      .post(`${APP.server.url}/friendsLists`)
      .set('Authorization', APP.token.id)
      .send({ receiver: this.state.id, sender: APP.token.userId })
      .end((err, res) => {
          if (res.statusCode === 200) {
              console.log('--- friend request ok')
          } else  {
              console.log('--- friend request error')
          }
      });
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="contact-box center-version">
          <a href="#">
            <img alt="image" className="img-circle" src="img/Friends/woman-1.jpg" />
            <h5 className="m-b-xs"><strong>{this.state.firstName} {this.state.lastName}</strong></h5>

            {/* <div className="font-bold">Graphics designer</div> */}
          </a>
          <div className="contact-box-footer">
            <div className="m-t-xs btn-group">
              <a className="btn btn-xs btn-white" onClick={this.sendFriendRequest} ><i className="fa fa-user-plus" />Frend Request</a>
              <a href="messages1.html" className="btn btn-xs btn-white"><i className="fa fa-envelope" />Send Messages</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFriendsContact;
