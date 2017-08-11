import React from 'react';
import request from 'superagent';
import NotificationSystem from 'react-notification-system';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class ProfileFriendsContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.sendFriendRequest = this.sendFriendRequest.bind(this);
    this._notificationSystem = null;
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
          console.log('--- friend request ok');
          this._notificationSystem.addNotification({
            message: 'La friend request est envoyé',
            level: 'success',
          });
        } else {
          console.log('--- friend request error');
          this._notificationSystem.addNotification({
            message: 'Un problème dans la friend request',
            level: 'error',
            position: 'br',
          });
        }
      });
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="contact-box center-version">
          {/*<Link to='/profile' params={{idUser: this.state.id}}>*/}
          <Link to={{ pathname: `/profile/${this.state.id}` }} >
            <img alt="image" className="img-circle" src="/img/Friends/woman-1.jpg" />
            <h5 className="m-b-xs"><strong>{this.state.firstName} {this.state.lastName}</strong></h5>
          </Link>
          {/*<a href="#">*/}
            {/*<img alt="image" className="img-circle" src="/img/Friends/woman-1.jpg" />*/}
            {/*<h5 className="m-b-xs"><strong>{this.state.firstName} {this.state.lastName}</strong></h5>*/}

            {/*/!* <div className="font-bold">Graphics designer</div> *!/*/}
          {/*</a>*/}
          <div className="contact-box-footer">
            <div className="m-t-xs btn-group">
              <a className="btn btn-xs btn-white" onClick={this.sendFriendRequest} ><i className="fa fa-user-plus" />Frend Request</a>
              <a href="messages1.html" className="btn btn-xs btn-white"><i className="fa fa-envelope" />Send Messages</a>
              {/* <NotificationSystem ref="notificationSystem" /> */}
              <NotificationSystem ref={(notif) => { this._notificationSystem = notif; }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFriendsContact;
