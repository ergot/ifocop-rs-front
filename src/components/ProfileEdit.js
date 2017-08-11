import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileEditInput from './ProfileEditInput';
import request from 'superagent';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.updateStateParent = this.updateStateParent.bind(this);
    this.getDataUser = this.getDataUser.bind(this);
    this.getDataUser();
  }


  getDataUser() {
    console.log('--- component did mount ---');
    const APP = window.APP.reducer({ type: 'GETSTATE' });
    request
      .get(`${APP.server.url}/myUsers/${APP.token.userId}`)
      .set('Authorization', APP.token.id)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- get data user ---');
          this.inputLastName.handleChange({ target: { value: res.body.lastName } });
          this.inputFirstName.handleChange({ target: { value: res.body.firstName } });
          this.inputPseudo.handleChange({ target: { value: res.body.pseudo } });
          this.inputCoordinates.handleChange({ target: { value: res.body.coordinates } });
          this.inputAge.handleChange({ target: { value: res.body.age } });
          this.inputPresentation.handleChange({ target: { value: res.body.presentation } });
          this.inputPicture.handleChange({ target: { value: res.body.picture } });
        } else {
          console.log('--- get data user FAIL ---');
        }
      });
  }

  submitForm() {
    console.log('--- submit profile edit ---');
    const APP = window.APP.reducer({ type: 'GETSTATE' });

    request
      .patch(`${APP.server.url}/myUsers/${APP.token.userId}`)
      .set('Authorization', APP.token.id)
      .send(this.state)
      .end((err, res) => {
        console.log(res.body);
        if (res.statusCode === 200) {
          console.log('--- edit profil valid ---');
        } else {
          console.log('--- edit profil NON valid ---');
        }
      });
  }

  updateStateParent(label, value) {
    const temp = {};
    temp[label] = value;
    this.setState(temp);
  }


  render() {
    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">
            <div className="tab-content profile-page">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <form className="form-horizontal">
                    <ProfileEditInput label="Nom" updateStateParent={this.updateStateParent} id="lastName" ref={(input) => { this.inputLastName = input; }} />
                    <ProfileEditInput label="Prénom" updateStateParent={this.updateStateParent} id="firstName" ref={(input) => { this.inputFirstName = input; }} />
                    <ProfileEditInput label="Pseudo" updateStateParent={this.updateStateParent} id="pseudo" ref={(input) => { this.inputPseudo = input; }} />
                    {/* <ProfileEditInput label="Mail" updateStateParent={this.updateStateParent} id="email"/> */}
                    <ProfileEditInput label="Coordonnées" updateStateParent={this.updateStateParent} id="coordinates" ref={(input) => { this.inputCoordinates = input; }} />
                    <ProfileEditInput label="Age" updateStateParent={this.updateStateParent} id="age" ref={(input) => { this.inputAge = input; }} />
                    <ProfileEditInput label="Présentation" updateStateParent={this.updateStateParent} id="presentation" ref={(input) => { this.inputPresentation = input; }} />
                    <ProfileEditInput label="Photo" updateStateParent={this.updateStateParent} id="picture" ref={(input) => { this.inputPicture = input; }} />
                  </form>
                  <p className="text-center">
                    <a href="#" className="btn btn-custom-primary" onClick={this.submitForm}>
                      <i className="fa fa-floppy-o" /> Save Changes</a></p>
                </div>

              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default ProfileEdit;
