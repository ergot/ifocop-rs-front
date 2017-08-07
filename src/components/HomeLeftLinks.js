import React from 'react';

class HomeLeftLinks extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="profile-nav">
          <div className="widget">
            <div className="widget-body">
              <div className="user-heading round">
                <a href="#">
                  <img src="img/Friends/guy-3.jpg" alt="" />
                </a>
                <h1>John Breakgrow</h1>
                {/*<p>@username</p>*/}
              </div>

              <ul className="nav nav-pills nav-stacked">
                {/*<li className="active"><a href="#"> <i className="fa fa-user" /> News feed</a></li>*/}
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" /> Messages
                    <span className="label label-info pull-right r-activity">9</span>
                  </a>
                </li>
                <li><a href="#"> <i className="fa fa-calendar" /> Events</a></li>
                <li><a href="#"> <i className="fa fa-image" /> Photos</a></li>
                <li><a href="#"> <i className="fa fa-share" /> Browse</a></li>
                <li><a href="#"> <i className="fa fa-floppy-o" /> Saved</a></li>
              </ul>
            </div>
          </div>

          {/*<div className="widget">*/}
            {/*<div className="widget-body">*/}
              {/*<ul className="nav nav-pills nav-stacked">*/}
                {/*<li><a href="#"> <i className="fa fa-globe" /> Pages</a></li>*/}
                {/*<li><a href="#"> <i className="fa fa-gamepad" /> Games</a></li>*/}
                {/*<li><a href="#"> <i className="fa fa-puzzle-piece" /> Ads</a></li>*/}
                {/*<li><a href="#"> <i className="fa fa-home" /> Markerplace</a></li>*/}
                {/*<li><a href="#"> <i className="fa fa-users" /> Groups</a></li>*/}
              {/*</ul>*/}
            {/*</div>*/}
          {/*</div>*/}

        </div>
      </div>
    );
  }
}

export default HomeLeftLinks;
