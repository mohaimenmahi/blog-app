import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import AddPost from './components/AddPost';
import MainPost from './components/MainPost';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/add/post" component={AddPost} />
            <Route path="/post/:id" component={MainPost} />
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
registerServiceWorker();
