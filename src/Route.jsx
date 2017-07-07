
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import IndexList from './component/IndexList';            /* 首页组件 */
import UserView from './component/UserView';

const Roots = ({children})=> (
    <div> 
        { children }
    </div>
);


const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute component={IndexList} />
            <Route path="user" component={UserView} />
        </Route>
    </Router>
);

export default RouteConfig;