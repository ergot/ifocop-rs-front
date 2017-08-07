import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileEditInput from './ProfileEditInput';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.updateStateParent = this.updateStateParent.bind(this);
  }


  submitForm() {
    console.log('--- submit profile edit ---');
    console.log(this.state);
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
                    <ProfileEditInput label="Nom" updateStateParent={this.updateStateParent} />
                    <ProfileEditInput label="Prénom" updateStateParent={this.updateStateParent} />
                    <ProfileEditInput label="Pseudo" updateStateParent={this.updateStateParent} />
                    <ProfileEditInput label="Mail" updateStateParent={this.updateStateParent} />
                    <ProfileEditInput label="Coordonnées" updateStateParent={this.updateStateParent} />
                    <ProfileEditInput label="Age" updateStateParent={this.updateStateParent} />
                    <ProfileEditInput label="Présentation" updateStateParent={this.updateStateParent} />
                    <ProfileEditInput label="Photo" updateStateParent={this.updateStateParent} />
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
