import React, { Component } from 'react';
import Service from './Service';
import Router from './Router';

import { Input, Form } from 'antd';

import '../App.css';

const { TextArea } = Input;

class AddPost extends Component {
    constructor(props) {
        super(props);

        this.blogService = new Service();

        this.handleTitle = this.handleTitle.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            post: ''
        };
    }
    handleTitle(event) {
        this.setState({ title: event.target.value });
    }
    handleAuthor(event) {
        this.setState({ author: event.target.value });
    }
    handlePost(event) {
        this.setState({ post: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.blogService.sendData(this.state.title, this.state.author, this.state.post);

        this.setState = {
            title: '',
            author: '',
            post: ''
        }
    }
    render() {
        return (
            <React.Fragment>
                <Router />
                {' '}
                <Form onSubmit={this.handleSubmit}  className="card">
                    <Input onChange={this.handleTitle} placeholder="Title" className="input-data"/>
                    <Input onChange={this.handleAuthor} placeholder="Author Name" className="input-data" />
                    <TextArea onChange={this.handlePost} rows={4} />
                    <input
                        type="submit"
                        value="Submit"
                        className="input-data"
                    />
                </Form>

            </React.Fragment>
        );
    }
}

export default AddPost;