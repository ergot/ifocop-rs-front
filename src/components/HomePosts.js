import React from 'react';
import request from 'superagent';
import HomePostCommentInput from './HomePostCommentInput';
import HomePostComment from './HomePostComment';

class HomePosts extends React.Component {
  constructor(props) {
    super(props);
    this.getOwnerPost = this.getOwnerPost.bind(this);
    this.getComments = this.getComments.bind(this);
    this.setPrefixeTtitle = this.setPrefixeTtitle.bind(this);
    this.state = {
      firstName: null,
      lastName: null,
      pictureProfile: null,
      dateCreated: this.props.value.dateCreated,
      message: this.props.value.message,
      id: this.props.value.id,
      comments: null,
      title: null,
    };
    this.getOwnerPost();
    this.getComments();
  }

  setPrefixeTtitle() {
    if (this.props.path === 'home') {
      if (this.props.value.friendId === this.props.value.myUserId) {
        return this.setState({ title: `${this.state.firstName} ${this.state.lastName} ` });
      }

      let userId = sessionStorage.userId;
      if (sessionStorage.userId === this.props.value.friendId) {
        userId = this.props.value.myUserId;
      }

      request
        .get(`${process.env.REACT_APP_URL_API}/myUsers/${userId} `)
        .set('Authorization', sessionStorage.token)
        .end((err, res) => {
          if (res.statusCode === 200) {
            console.log('--- home posts / user valide ---');
            this.setState({ title: `${this.state.firstName} ${this.state.lastName} > ${res.body.firstName} ${res.body.lastName}` });
          } else {
            console.log('--- home posts / user error ---');
          }
        });
    }
  }

  getComments() {
    request
      .get(`${process.env.REACT_APP_URL_API}/myUsers/${this.props.value.friendId}/walls`)
      .set('Authorization', sessionStorage.token)
      .query({ filter: { where: { parentId: `pre${this.state.id}` } } })
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- home posts / get comments ---');
          this.setState({ comments: res.body });
        } else {
          console.log('--- home posts / get comments error ---');
        }
      });
  }

  getOwnerPost() {
    request
      .get(`${process.env.REACT_APP_URL_API}/myUsers/${this.props.value.friendId} `)
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- home posts / owner valide ---');
          this.setState({ firstName: res.body.firstName, lastName: res.body.lastName, pictureProfile: res.body.pictureProfile });
          this.setPrefixeTtitle();
        } else {
          console.log('--- home posts / owner error ---');
        }
      });
  }

  render() {
    const renderHomePostComments = [];
    if (this.state.comments !== null) {
      this.state.comments.map((comment) => {
        renderHomePostComments.push(<HomePostComment key={comment.id} value={comment} />);
      });
    }

    const title = this.state.title || `${this.state.firstName} ${this.state.lastName}`;

    return (
      <div className="box box-widget">
        <div className="box-header with-border">
          <div className="user-block">
            <img className="img-circle" src={this.state.pictureProfile} alt="User Image" />
            <span className="username"><a href="#">{title}</a></span>
            <span className="description">Shared publicly : {this.state.dateCreated}</span>
          </div>
        </div>

        <div className="box-body" style={{ display: 'block' }}>
          {/* <img className="img-responsive show-in-modal" src="/img/Post/young-couple-in-love.jpg" alt="Photo" /> */}
          <blockquote>
            <p>{this.state.message}</p>
          </blockquote>

          <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" /> Share</button>
          <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up" /> Like</button>
          <span className="pull-right text-muted">127 likes - 3 comments</span>
        </div>

        {renderHomePostComments}

        <HomePostCommentInput parentId={this.props.value.id} userId={this.props.value.friendId} refreshPosts={this.getComments} />

      </div>

    );
  }
}

export default HomePosts;
