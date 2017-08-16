import React from 'react';
import request from 'superagent';

class HomePostStateForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setIdUser = this.setIdUser.bind(this);
    this.state = {
      value: 'Whats in your mind today?',
      userId: null,
    };
  }

  componentDidMount() {
    this.setIdUser();
  }

  setIdUser() {
    if (sessionStorage.wallIdUser === 'null') {
      this.setState({ userId: sessionStorage.userId });
    } else {
      this.setState({ userId: sessionStorage.wallIdUser });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    request
      .post(`${process.env.REACT_APP_URL_API}/myUsers/${this.state.userId}/walls`)
      .set('Authorization', sessionStorage.token)
      .send({ message: this.state.value, dateCreated: new Date(), friendId: sessionStorage.userId })
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- post wall profile ---');
        } else {
          console.log('--- post wall profile FAIL ---');
        }
      });
  }


  render() {
    return (
      <div className="box profile-info n-border-top">
        <form>
          <textarea className="form-control input-lg p-text-area" rows="2" placeholder={this.state.value} onChange={this.handleChange} />
        </form>
        <div className="box-footer box-form">
          <button type="button" className="btn btn-azure pull-right" onClick={this.handleSubmit}>Post</button>
          <ul className="nav nav-pills">
            <li><a href="#"><i className="fa fa-map-marker" /></a></li>
            <li><a href="#"><i className="fa fa-camera" /></a></li>
            <li><a href="#"><i className=" fa fa-film" /></a></li>
            <li><a href="#"><i className="fa fa-microphone" /></a></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default HomePostStateForm;
