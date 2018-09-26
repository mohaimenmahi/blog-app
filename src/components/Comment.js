import React, { Component } from 'react';
import Service from './Service';
import { Input, Form } from 'antd';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.blogService = new Service();
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            comment: '',
            id: ''
        }
    }
    handleComment(event) {
        this.setState({ comment: event.target.value, id: this.props.id });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.blogService.addComment(this.state.comment, this.state.id);
        this.setState({ comment: '', id: ''});
    }
    render() {
        return (
            <React.Fragment>
                <h4>Comments:</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Input onChange={this.handleComment} placeholder="Comment Here"/>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                    />
                </Form>
            </React.Fragment>
        );
    }
}

export default Comment;