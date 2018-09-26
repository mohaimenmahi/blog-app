import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import '../App.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to={"/post/"+this.props.obj._id} className="card">
                    <Card title={this.props.obj.title}>
                        <p>By {this.props.obj.author}</p>
                        <p>Posted on {moment(this.props.obj.time).format('MMM Do YY, h:mm a')}</p>
                    </Card>
                </Link>
            </React.Fragment>
        );
    }
}

export default Home;