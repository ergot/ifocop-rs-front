import React from 'react';
import HomePostStateForm from './HomePostStateForm'

class HomeCenterPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-md-6">
          <div className="row">
            {/*<!-- left posts-->*/}
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  {/*<!-- post state form -->*/}
                  <HomePostStateForm/>

                </div>

              </div>
            </div>
          </div>
        </div>


    )
  }
}

export default HomeCenterPosts;
