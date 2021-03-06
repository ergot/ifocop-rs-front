import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import SearchFriend from './components/SearchFriend';
import FriendRequest from './components/FriendRequest';
import Friends from './components/Friends';


// ReactDOM.render(<App />, document.getElementById('root'));
sessionStorage.setItem('pathApi', process.env.REACT_APP_URL_API);

if (sessionStorage.token === undefined) {
  sessionStorage.setItem('token', null);
  sessionStorage.setItem('userId', null);
}

if (sessionStorage.token === 'null' && window.location.href !== process.env.REACT_APP_HOST) {
  window.location.replace(process.env.REACT_APP_HOST);
}

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/profile/:idUser" component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/profileEdit" component={ProfileEdit} />
      <Route path="/searchFriend" component={SearchFriend} />
      <Route path="/friendRequest" component={FriendRequest} />
      <Route path="/friends" component={Friends} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
