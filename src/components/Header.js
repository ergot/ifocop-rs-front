import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDeco = this.onClickDeco.bind(this);
  }

  onClickDeco() {
    sessionStorage.setItem('token', null)
    sessionStorage.setItem('userId', null)

  }

  render() {
    return (
      <nav className="navbar navbar-white navbar-fixed-top">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* <a className="navbar-brand" href="index.html"><b>Ifocop Rs</b></a> */}
            <Link className="navbar-brand" to={'/home'}><b>Ifocop Rs</b></Link>
          </div>

          {/* <div className="navbar-header"> */}
          {/* /!* <a className="navbar-brand" href="index.html"><b>Ifocop Rs</b></a> *!/ */}
          {/* <div className="navbar-brand"> */}
          {/* <span className="input-icon"> */}
          {/* <input type="text" className="form-control input-sm" /> */}
          {/* <i className="glyphicon glyphicon-search blue" /> */}
          {/* </span> */}
          {/* </div> */}
          {/* </div> */}

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              {/* <li className="actives"><a href="profile.html">Profile</a></li> */}
              <li><Link to={'/home'}>Messagerie</Link></li>
              <li className="actives"><Link to={'/profile'}>Profile</Link></li>
              <li className="actives"><Link to={'/profileEdit'}>Edit Profile</Link></li>
              <li className="actives"><Link to={'/searchFriend'}>Search Friend</Link></li>
              <li className="actives"><Link to={'/friendRequest'}>Friend Request</Link></li>
              <li className="actives"><Link to={'/friends'}>Friends</Link></li>
              <li className="actives"><Link to={'/'} onClick={this.onClickDeco}>Deco</Link></li>
              {/*<li className="dropdown">*/}
                {/*<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">*/}
                                    {/*Pages <span className="caret" />*/}
                {/*</a>*/}
                {/*<ul className="dropdown-menu">*/}
                  {/*<li><a href="profile2.html">Profile 2</a></li>*/}
                  {/*<li><a href="profile3.html">Profile 3</a></li>*/}
                  {/*<li><a href="profile4.html">Profile 4</a></li>*/}
                  {/*<li><a href="sidebar_profile.html">Sidebar profile</a></li>*/}
                  {/*<li><a href="user_detail.html">User detail</a></li>*/}
                  {/*<li><a href="edit_profile.html">Edit profile</a></li>*/}
                  {/*<li><a href="about.html">About</a></li>*/}
                  {/*<li><a href="friends.html">Friends</a></li>*/}
                  {/*<li><a href="friends2.html">Friends 2</a></li>*/}
                  {/*<li><a href="profile_wall.html">Profile wall</a></li>*/}
                  {/*<li><a href="photos1.html">Photos 1</a></li>*/}
                  {/*<li><a href="photos2.html">Photos 2</a></li>*/}
                  {/*<li><a href="view_photo.html">View photo</a></li>*/}
                  {/*<li><a href="messages1.html">Messages 1</a></li>*/}
                  {/*<li><a href="messages2.html">Messages 2</a></li>*/}
                  {/*<li><a href="group.html">Group</a></li>*/}
                  {/*<li><a href="list_users.html">List users</a></li>*/}
                  {/*<li><a href="file_manager.html">File manager</a></li>*/}
                  {/*<li><a href="people_directory.html">People directory</a></li>*/}
                  {/*<li><a href="list_posts.html">List posts</a></li>*/}
                  {/*<li><a href="grid_posts.html">Grid posts</a></li>*/}
                  {/*<li><a href="forms.html">Forms</a></li>*/}
                  {/*<li><a href="buttons.html">Buttons</a></li>*/}
                  {/*<li><a href="error404.html">Error 404</a></li>*/}
                  {/*<li><a href="error500.html">Error 500</a></li>*/}
                  {/*<li><a href="recover_password.html">Recover password</a></li>*/}
                  {/*<li><a href="registration_mail.html">Registration mail</a></li>*/}
                {/*</ul>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
