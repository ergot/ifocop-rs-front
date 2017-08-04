import React from 'react';
import HomePostStateForm from './HomePostStateForm';
import HomePosts from './HomePosts';

class HomeCenterPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          {/* <!-- left posts--> */}
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                {/* <!-- post state form --> */}
                <HomePostStateForm />
                {/* <!--   posts --> */}
                <HomePosts />

              </div>

            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default HomeCenterPosts;
