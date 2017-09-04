import React from 'react';
import request from 'superagent';

class HomePostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.value.message,
      dateCreated: this.props.value.dateCreated,
      owner: null,
    };
    this.getUser = this.getUser.bind(this);
    this.getUser();
  }

  getUser() {
    request
      .get(`${sessionStorage.pathApi}/myUsers/${this.props.value.friendId}`)
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- home posts comments / get data user ---');
          this.setState({ owner: `${res.body.firstName} ${res.body.lastName}`, pictureProfile: res.body.pictureProfile });
        } else {
          console.log('--- home posts comments / get data user FAIL ---');
        }
      });
  }

  render() {
    return (

      <div className="box-footer box-comments" style={{ display: 'block' }}>
        <div className="box-comment">
          <img className="img-circle img-sm" src={this.state.pictureProfile} alt="User Image" />
          <div className="comment-text">
            <span className="username">
              {this.state.owner || 'Loading...'}
              <span className="text-muted pull-right">{this.state.dateCreated}</span>
            </span>
            {this.state.message}
          </div>
        </div>
      </div>


    );
  }
}

export default HomePostComment;
