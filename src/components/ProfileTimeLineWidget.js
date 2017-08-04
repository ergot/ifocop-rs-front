import React from 'react';


class ProfileTimeLineWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="widget">
        <div className="widget-header">
          <h3 className="widget-caption">About</h3>
        </div>
        <div className="widget-body bordered-top bordered-sky">
          <ul className="list-unstyled profile-about margin-none">
            <li className="padding-v-5">
              <div className="row">
                <div className="col-sm-4"><span className="text-muted">Date of Birth</span></div>
                <div className="col-sm-8">12 January 1990</div>
              </div>
            </li>
            <li className="padding-v-5">
              <div className="row">
                <div className="col-sm-4"><span className="text-muted">Job</span></div>
                <div className="col-sm-8">Ninja developer</div>
              </div>
            </li>
            <li className="padding-v-5">
              <div className="row">
                <div className="col-sm-4"><span className="text-muted">Gender</span></div>
                <div className="col-sm-8">Male</div>
              </div>
            </li>
            <li className="padding-v-5">
              <div className="row">
                <div className="col-sm-4"><span className="text-muted">Lives in</span></div>
                <div className="col-sm-8">Miami, FL, USA</div>
              </div>
            </li>
            <li className="padding-v-5">
              <div className="row">
                <div className="col-sm-4"><span className="text-muted">Credits</span></div>
                <div className="col-sm-8">249</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileTimeLineWidget;
