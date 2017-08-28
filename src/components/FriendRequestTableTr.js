import React from 'react';
import request from 'superagent';
import NotificationSystem from 'react-notification-system';


class FriendRequestTableTr extends React.Component {
  constructor(props) {
    super(props);
    this.getUserRender = this.getUserRender.bind(this);
    this.deleteFr = this.deleteFr.bind(this);
    this.valideFr = this.valideFr.bind(this);
    this._notificationSystem = null;

    this.state = {
      value: this.props.value,
      userRender: '',
      originRender: '',
    };

    if (this.state.userRender === '') {
      this.getUserRender();
    }
  }

  // Determine le profil en fonction du profil connecter
  getUserRender() {
    let id = null;

    // le connecté fait une demande
    if (sessionStorage.userId === this.state.value.sender) {
      id = this.state.value.receiver;
      this.state.originRender = 'moi';
    }

    // le connecte recoit une demande
    if (sessionStorage.userId === this.state.value.receiver) {
      id = this.state.value.sender;
      this.state.originRender = 'lui';
    }


    request
      .get(`${process.env.REACT_APP_URL_API}/myUsers/${id}`)
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        console.log(res.body);
        if (res.statusCode === 200) {
          console.log('--- get friend request table tr ---');
          this.setState({ userRender: res.body });
        } else {
          console.log('--- get friend request table tr error ---');
        }
      });
  }

  valideFr() {
    request
      .patch(`${process.env.REACT_APP_URL_API}/friendsLists/${this.state.value._id}`)
      .set('Authorization', sessionStorage.token)
      .send({ isConfirmed: true })
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- fr request validé ---');
          this.props.deleteFriendShip(this.state.value._id);
        } else {
          console.log('--- fr request validé error ---');
        }
      });
  }

  deleteFr() {
    request
      .delete(`${process.env.REACT_APP_URL_API}/friendsLists/${this.state.value._id}`)
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- delete friend request table tr ---');

          this.props.deleteFriendShip(this.state.value._id);
        } else {
          console.log('--- delete friend request table tr error ---');
          this._notificationSystem.addNotification({
            message: 'erreur dans le suppression de la friend request',
            level: 'warning',
          });
        }
      });
  }
  render() {
    // definition du status
    let renderStatus = null;
    if (this.state.value.isConfirmed === false) {
      renderStatus = <span className="label label-warning">Pending</span>;
    } else {
      renderStatus = <span className="label label-success">Confirmed</span>;
    }

    return (
      <tr>
        <td>
          <img src="img/Friends/guy-2.jpg" alt="" />
          <a href="#" className="user-link">{this.state.userRender.firstName} {this.state.userRender.lastName}</a>
          <span className="user-subhead">Member</span>
        </td>
        <td>
          {this.state.originRender}
        </td>
        <td className="text-center">
          {renderStatus}
        </td>
        <td>
          <a href="#">{this.state.userRender.email}</a>
        </td>
        <td style={{ width: '20%' }}>
          <a href="#" className="table-link success" onClick={this.valideFr}>
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x" />
              <i className="fa fa-check fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="#" className="table-link">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x" />
              <i className="fa fa-pencil fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="#" className="table-link danger" onClick={this.deleteFr}>
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x" />
              <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
              <NotificationSystem ref={(notif) => { this._notificationSystem = notif; }} />
            </span>
          </a>
        </td>
      </tr>

    );
  }
}

export default FriendRequestTableTr;
