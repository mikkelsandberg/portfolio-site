import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../../Containers/App/App';
import PropTypes from 'prop-types';

function Root({ store }) {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
