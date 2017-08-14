import React from 'react';
import HomePostStateForm from './HomePostStateForm';
import HomePosts from './HomePosts';

class HomeCenterPosts extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const colmd = `col-md-${this.props.colmd}`;

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
