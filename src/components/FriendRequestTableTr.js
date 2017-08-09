import React from 'react';



class FriendRequestTableTr extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          <img src="img/Friends/guy-2.jpg" alt="" />
          <a href="#" className="user-link">John Doe</a>
          <span className="user-subhead">Admin</span>
        </td>
        <td>
            2013/08/08
        </td>
        <td className="text-center">
          <span className="label label-default">Inactive</span>
        </td>
        <td>
          <a href="#">milaku@nis.com</a>
        </td>
        <td style={{width: '20%'}}>
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
