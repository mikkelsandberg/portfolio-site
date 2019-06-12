import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';
import App from '../../Containers/App/App';
import PropTypes from 'prop-types';

function Root({ store }) {
	return (
		<Provider store={store}>
			<HashRouter>
				<Analytics id="UA-88829695-1">
					<App />
				</Analytics>
			</HashRouter>
		</Provider>
	);
}

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;
