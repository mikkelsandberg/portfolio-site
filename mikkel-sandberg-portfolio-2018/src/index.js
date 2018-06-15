import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import App from "./Components/App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<BrowserRouter>
		<LastLocationProvider>
			<App />
		</LastLocationProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
