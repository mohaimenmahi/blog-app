import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

class IndexComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4200/blogs')
            .then(response => {
                this.setState({ comments: response.data })
            }).catch(err => {
                console.log(err);
        })
    }
    showComments() {
        if(this.state.comments instanceof Array) {
            return this.state.comments.map((obj, i) => {
                return <CommentList obj={obj} key={i}/>
            });
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.showComments()}
            </React.Fragment>
        );
    }
}

export default IndexComment;