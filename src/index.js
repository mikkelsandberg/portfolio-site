import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { portfolioApp } from './reducers';
import Root from './Components/Root/Root';

const store = createStore(
	portfolioApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(<Root store={store} />, document.getElementById('root'));
