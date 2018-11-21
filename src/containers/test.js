import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { actions } from './../redux/test';

import Test from "../components/test";
import {testMoreProperty} from "../selectors/test.selector"
Test.propTypes = {
    test: PropTypes.array,
    fetchDefaultTestActions: PropTypes.func
};

const mapStateToProps = state => {
    return {
        activities: state.test.actions,
        activitiesWithFormatted: testMoreProperty(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            fetchDefaultTestActions: actions.fetchActions,
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);