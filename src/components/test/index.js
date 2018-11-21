import React, {Component} from 'react';
import styled from "styled-components";
import * as _ from "lodash";
import "./index.scss";
export default class Test extends Component {

    componentDidMount() {
        this.props.actions.fetchDefaultTestActions("something");
    }

    buildComponent = (props, state) => {
        const {activities, activitiesWithFormatted} = this.props;
        return (
            <div className="wrapper">
                <h1 className="header">Activities Without selector</h1>
                <ul> 
                    {_.isEmpty(activities) && <h4> No Activities Without selectors found</h4>}
                    {!_.isEmpty(activities) && activities.map((activity, index)=> 
                        <li key={activity.id}>{activity.id}-{activity.action}</li>
                    )}
                </ul>
                <h1 className="header">Activities With selector</h1>
                <ul> 
                    {_.isEmpty(activitiesWithFormatted) && <h4> No activitiesWithFormatted found</h4>}
                    {!_.isEmpty(activitiesWithFormatted) && activitiesWithFormatted.map((activity, index)=> 
                        <li key={activity.id}>{activity.id}-{activity.funny}</li>
                    )}
                </ul>
            </div>
            
        );
    };

    render() {
        return this.buildComponent(this.props, this.state);
    }
}

