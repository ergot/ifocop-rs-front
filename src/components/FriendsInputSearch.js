import React from 'react';
import request from 'superagent';

class FriendsInputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: ''}
  }

  handleSubmit(event) {
    event.preventDefault();
      this.props.findFriends(this.state.value)
  }

  render() {
    return (
      <div className="row">
        <form role="form" onSubmit={this.handleSubmit}>
          <span className="input-icon ">
            <input className="form-control input-xl" type="text" placeholder="Press Enter" onChange={event => this.setState({ value: event.target.value })} />
            <i className="glyphicon glyphicon-search  circular" />
          </span>
        </form>
      </div>

    );
  }
}

export default FriendsInputSearch;
