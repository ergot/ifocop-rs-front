import React from 'react';
import request from 'superagent';

class HomePostCommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getUser();
    this.state = {
      parentId: this.props.parentId,
      message: '',
      user: { pictureProfile: '' },
    };
  }
  handleInput(event) {
    this.setState({ message: event.target.value });
  }

  handleResponse(event) {
    event.preventDefault();
    this.submitComment();
  }

  getUser() {
    request
      .get(`${sessionStorage.pathApi}/myUsers/${sessionStorage.userId}`)
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- home posts comment input / get data user ---');
          this.setState({ user: res.body });
        } else {
          console.log('--- home posts comment input / get data user FAIL ---');
        }
      });
  }

  submitComment() {
    request
      .post(`${process.env.REACT_APP_URL_API}/myUsers/${this.props.userId}/walls`)
      .set('Authorization', sessionStorage.token)
      .send({ message: this.state.message, dateCreated: new Date(), friendId: sessionStorage.userId, parentId: `pre${this.state.parentId}` })
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- post wall profile comment ---');
          this.props.refreshPosts();
        } else {
          console.log('--- post wall profile comment FAIL ---');
        }
      });
  }

  render() {
    return (


      <div className="box-footer" style={{ display: 'block' }}>
        <form onSubmit={this.handleResponse}>
          <img className="img-responsive img-circle img-sm" src={this.state.user.pictureProfile} alt="Alt Text" />
          <div className="img-push">
            <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" onChange={this.handleInput} />
          </div>
        </form>
      </div>

    );
  }
}

export default HomePostCommentInput;
