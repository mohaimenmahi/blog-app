import React, { Component } from 'react';
import axios from 'axios';
import Home from './Home';

import '../App.css';

class IndexPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4200/blogs')
            .then(response => {
                this.setState({
                    blogs: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    showPostList() {
        if(this.state.blogs instanceof Array) {
            return this.state.blogs.map((obj, i) => {
                return <Home obj={obj} key={i}/>
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.showPostList()}
            </React.Fragment>
        );
    }
}

export default IndexPost;