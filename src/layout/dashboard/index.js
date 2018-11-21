import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


export default class Dashboard extends Component {

    buildComponent = props => {
        return (
            <div className="container-fluid">
                {props.children}
            </div>
        );
    }

    render() {
        return this.buildComponent(this.props);
    }
}

Dashboard.propTypes = {
    children: PropTypes.any,
};