import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test from './containers/test';

import Dashboard from './layout/dashboard';

import * as _ from "lodash";

//TODO: route only handles container, not component

export default () => {
	return (
        <Router>
            <Dashboard>
                <Route exact path={"/"} component={Test} />
            </Dashboard>
        </Router>
	);
};
