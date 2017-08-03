import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
