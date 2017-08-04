import React from 'react';


class ProfileBigPicture extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-picture" style={{ backgroundImage: "url('img/Cover/cover.jpg')" }}>
        <span className="bg-picture-overlay" /> {/* <!-- overlay --> */}
        {/* <!-- meta --> */}
        <div className="box-layout meta bottom">
          <div className="col-md-6 clearfix">
            <span className="img-wrapper pull-left m-r-15">
              <img src="img/Friends/guy-3.jpg" alt="" style={{ width: '64px' }} className="br-radius" />
            </span>
            <div className="media-body">
              <h3 className="text-white mb-2 m-t-10 ellipsis">John Breakgrow jr.</h3>
              <h5 className="text-white"> @username</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pull-right">
              <div className="dropdown">

                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                  <li><a href="#">Poke</a></li>
                  <li><a href="#">Private message</a></li>
                  <li className="divider" />
                  <li><a href="#">Unfollow</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div> {/* <!--/ meta --> */}
      </div>
    );
  }
}

export default ProfileBigPicture;
