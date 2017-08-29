import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileFriends from './ProfileFriends';
import request from 'superagent';

class SearchFriend extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: '', results: [] };
  }

  handleSubmit(event) {
    event.preventDefault();

    request
      .get(`${process.env.REACT_APP_URL_API}/myUsers/`)
      .set('Authorization', sessionStorage.token)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- submit search friend  ---');
          const results = [];

          res.body.map((user) => {
            const regex = new RegExp(this.state.value, 'g');

            if ((user.firstName.search(regex) > -1) || (user.lastName.search(regex) > -1)) {
              return results.push(user);
            }
          });

          this.setState({ results });
        } else {
          console.log('--- submit search friend ERROR ---');
        }
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container page-content">

          <div className="row">
            <form role="form" onSubmit={this.handleSubmit}>
              <span className="input-icon ">
                <input className="form-control input-xl" type="text" placeholder="Press Enter or search by firsName, lastName" onChange={event => this.setState({ value: event.target.value })} />
                <i className="glyphicon glyphicon-search  circular" />
              </span>
            </form>
          </div>

          <p />

          <div className="row">
            <ProfileFriends friends={this.state.results}  />
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchFriend;
