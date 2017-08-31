/* eslint-disable max-len */
import React from 'react';
import NotificationSystem from 'react-notification-system';
import ReactFilestack from 'filestack-react';
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
    this._notificationSystem = null;
    this.state = {
      pictureProfile: '',
      pictureProfileHeader: '',
    };
  }

  getDataUser() {
    request
      .get(`${process.env.REACT_APP_URL_API}/myUsers/${sessionStorage.userId}`)
      .set('Authorization', sessionStorage.token)
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
          this.setState({pictureProfile: res.body.pictureProfile})
          this.setState({pictureProfileHeader: res.body.pictureProfileHeader})
        } else {
          console.log('--- get data user FAIL ---');
        }
      });
  }

  submitForm(event) {
    console.log('--- submit profile edit ---');
      event.preventDefault();

    request
      .patch(`${process.env.REACT_APP_URL_API}/myUsers/${sessionStorage.userId}`)
      .set('Authorization', sessionStorage.token)
      .send(this.state)
      .end((err, res) => {
        if (res.statusCode === 200) {
          console.log('--- edit profil valid ---');
          this._notificationSystem.addNotification({
            message: 'Profile edité',
            level: 'success',
          });
        } else {
          console.log('--- edit profil NON valid ---');
          this._notificationSystem.addNotification({
            message: 'Profile non edité',
            level: 'error',
            position: 'br',
          });
        }
      });
  }

  updateStateParent(label, value) {
    const temp = {};
    temp[label] = value;
    this.setState(temp);
  }

  render() {
    const options = {
      accept: 'image/*',
      maxFiles: 1,
      storeTo: {
        location: 's3',
      },
    };

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
                    {/*pictureProfile*/}
                    <div className="form-group">
                      <label htmlFor="definpu" className="col-sm-3 control-label">
                        <ReactFilestack
                          apikey={process.env.REACT_APP_FILEPICKER_API_KEY}
                          buttonText="Photo Profile"
                          buttonClass="classname"
                          options={options}
                          onSuccess={(result) => {
                            console.log('picture file');
                            console.log(result);
                            console.log(result.filesUploaded[0].url);
                            this.setState({ pictureProfile: result.filesUploaded[0].url });
                          }}
                        />
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          id="pictureProfile"
                          name="pictureProfile"
                          className="form-control"
                          value={this.state.pictureProfile}
                        />
                      </div>

                    </div>

                    {/*pictureProfileHeader*/}
                    <div className="form-group">
                      <label htmlFor="definpu" className="col-sm-3 control-label">
                        <ReactFilestack
                          apikey={process.env.REACT_APP_FILEPICKER_API_KEY}
                          buttonText="Photo Background Profile"
                          buttonClass="classname"
                          options={options}
                          onSuccess={(result) => {
                            this.setState({ pictureProfileHeader: result.filesUploaded[0].url });
                          }}
                        />
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          id="pictureProfileHeader"
                          name="pictureProfileHeader"
                          className="form-control"
                          value={this.state.pictureProfileHeader}
                        />
                      </div>
                    </div>

                  </form>
                  <p className="text-center">
                    <a href="#" className="btn btn-custom-primary" onClick={this.submitForm}>
                      <i className="fa fa-floppy-o" /> Save Changes</a></p>

                </div>
                <NotificationSystem ref={(notif) => { this._notificationSystem = notif; }} />
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
