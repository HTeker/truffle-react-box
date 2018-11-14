import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ElectionCreatePage from './pages/ElectionCreatePage';
import ElectionsPage from './pages/ElectionsPage';
import ElectionDetailPage from './pages/ElectionDetailPage';

import Web3Helper from './helpers/Web3Helper';

Web3Helper.init()
.then(() => {

    ReactDOM.render(
        <Router history={createBrowserHistory()}>
            <Switch>
    
                <Route exact path='/election/create' component={ElectionCreatePage} />
                <Route exact path='/election/:id' component={ElectionDetailPage} />
    
                <Route path='*' component={ElectionsPage} />
    
            </Switch>
        </Router>
        , document.getElementById('root')
    );
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();

})
.catch(console.log);