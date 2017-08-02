import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {  Route, Link, BrowserRouter as Router} from 'react-router-dom';


//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <Router>
        <Route path="/" component={App}/>
    </Router>
),  document.getElementById('root'));

registerServiceWorker();
