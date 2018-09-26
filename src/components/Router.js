import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Tabs type="cards">
                    <TabPane><Link to="/">Home</Link></TabPane>
                    <TabPane><Link to="/add/post">Add Post</Link></TabPane>
                </Tabs>
            </React.Fragment>
        );
    }
}

export default Router;