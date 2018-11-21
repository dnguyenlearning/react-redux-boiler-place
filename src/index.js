import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

import store from "./redux/configure-store";


//TODO: implement the provider here
const createProvider = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes/>
			</BrowserRouter>
		</Provider>
	);
};

render(createProvider(), document.getElementById("app"));