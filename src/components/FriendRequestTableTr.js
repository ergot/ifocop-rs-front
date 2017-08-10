import React from 'react';
import request from 'superagent';


class FriendRequestTableTr extends React.Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
    this.state = {
      value: this.props.value,
      receiver: '',
    };

    if (this.state.receiver === '') {
      this.getUser(this.state.value.receiver);
    }

  }

  getUser(id) {
    const APP = window.APP.reducer({ type: 'GETSTATE' });

    request
      .get(`${APP.server.url}/myUsers/${id}`)
      .set('Authorization', APP.token.id)
      .end((err, res) => {
        console.log(res.body);
        if (res.statusCode === 200) {
          console.log('--- get friend request table tr ---');
          this.setState({ receiver: res.body });
        } else {
          console.log('--- get friend request table tr error ---');
        }
      });
  }

  render() {
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
          <a href="#" className="user-link">{this.state.receiver.firstName} {this.state.receiver.lastName}</a>
          <span className="user-subhead">Member</span>
        </td>
        <td>
            2013/08/08
        </td>
        <td className="text-center">
          {renderStatus}
        </td>
        <td>
          <a href="#">{this.state.receiver.email}</a>
        </td>
        <td style={{ width: '20%' }}>
          <a href="#" className="table-link success">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x" />
              <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="#" className="table-link">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x" />
              <i className="fa fa-pencil fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="#" className="table-link danger">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x" />
              <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
            </span>
          </a>
        </td>
      </tr>

    );
  }
}

export default FriendRequestTableTr;
