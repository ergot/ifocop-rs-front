import React from 'react';
import ProfileTimeLineWidget from './ProfileTimeLineWidget'
import ProfileTimeLineWidgetFriends from './ProfileTimeLineWidgetFriends'


class ProfileTimeLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="tab-pane active" role="tabpanel" id="timeline">
          <div className="row">
            {/* colonne widget */}
            <div className="col-md-5">
              <ProfileTimeLineWidget/>
              <ProfileTimeLineWidgetFriends/>
            </div>

          </div>

        </div>


    );
  }
}

export default ProfileTimeLine;
