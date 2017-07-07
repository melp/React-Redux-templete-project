import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import route from './Route';
import reducer from './reducer/rootReducer';

import './styles/style.less'

const store = createStore(
    reducer,
    applyMiddleware(thunk) 
); 


ReactDOM.render(
  	<Provider store={store}>
        {route}
    </Provider>
	, 
	document.getElementById('root'));


