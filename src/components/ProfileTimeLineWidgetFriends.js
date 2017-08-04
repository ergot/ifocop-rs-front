import React from 'react';


class ProfileTimeLineWidgetFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="widget widget-friends">
        <div className="widget-header">
          <h3 className="widget-caption">Friends</h3>
        </div>
        <div className="widget-body bordered-top  bordered-sky">
          <div className="row">
            <div className="col-md-12">
              <ul className="img-grid" style={{ margin: '0 auto' }}>
                <li>
                  <a href="#">
                    <img src="img/Friends/guy-6.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/Friends/woman-3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/Friends/guy-2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/Friends/guy-9.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/Friends/woman-9.jpg" alt="image" />
                  </a>
                </li>
                <li className="clearfix">
                  <a href="#">
                    <img src="img/Friends/guy-4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/Friends/guy-1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/Friends/woman-4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/Friends/guy-6.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTimeLineWidgetFriends;
