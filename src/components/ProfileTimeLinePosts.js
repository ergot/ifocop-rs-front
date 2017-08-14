import React from 'react';
import HomeCenterPostes from './HomeCenterPosts'

class ProfileTimeLinePosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row">
        <HomeCenterPostes colmd="12"/>
        </div>
    );
  }
}

export default ProfileTimeLinePosts;
