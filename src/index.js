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
import FriendRequest from './components/FriendRequest'
import Friends from './components/Friends'


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/profileEdit" component={ProfileEdit} />
      <Route path="/searchFriend" component={SearchFriend} />
      <Route path="/friendRequest" component={FriendRequest} />
      <Route path="/friends" component={Friends} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
