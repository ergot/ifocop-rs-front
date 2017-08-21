import React from 'react';
import request from 'superagent';
import PropTypes from 'prop-types';
import HomePostStateForm from './HomePostStateForm';
import HomePosts from './HomePosts';

class HomeCenterPosts extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.refreshPosts = this.refreshPosts.bind(this);
    this.state = { posts: null };
    this.getPosts();
  }

  getPosts() {
    if (this.props.path === 'profile') {
      request
        .get(`${process.env.REACT_APP_URL_API}/myUsers/${this.props.idUser}/walls`)
        .set('Authorization', sessionStorage.token)
        .query({ filter: { order: 'dateCreated DESC' } })
        .end((err, res) => {
          if (res.statusCode === 200) {
            console.log('--- home center posts valide ---');
            this.setState({ posts: res.body });
          } else {
            console.log('--- home center posts error ---');
          }
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ posts: null }, () => {
      this.getPosts();
    });
  }

  refreshPosts() {
    this.setState({ posts: null }, () => {
      this.getPosts();
    });
  }


  render() {
    const colmd = `col-md-${this.props.colmd}`;

    const renderHomePosts = [];
    if (this.state.posts !== null) {
      this.state.posts.map((post) => {
        renderHomePosts.push(<HomePosts key={post.id} value={post} />);
      });
    }

    return (
    // ici pour profile page md-12
    // ici pour la home md-9
    // <div className="col-md-9">
      <div className={colmd}>
        <div className="row">
          {/* <!-- left posts--> */}
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                {/* <!-- post state form --> */}
                <HomePostStateForm idUser={this.props.idUser} refreshPosts={this.refreshPosts} />
                {/* <!--   posts --> */}
                {/* <HomePosts /> */}

                {renderHomePosts}
                {/* <HomePosts /> */}

              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
HomeCenterPosts.propTypes = {
  colmd: PropTypes.number.isRequired,
  idUser: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default HomeCenterPosts;
