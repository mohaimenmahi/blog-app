import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Tabs, Form, Card } from 'antd';
import Comment from './Comment';
import CommentList from './CommentList';

const TabPane = Tabs.TabPane;

class MainPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        }
    };
    componentDidMount() {
        axios.get('http://localhost:4200/blogs')
            .then(response => {
                this.setState({
                    blogs: response.data
                }).catch(err => {
                    console.log(err)
                })
            })
    }
    render() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment className="card">
                <Tabs type="cards" className="App">
                    <TabPane><Link to="/">Back to Home</Link></TabPane>
                </Tabs>
                <Card className="blog-container">
                    {
                        this.state.blogs.filter(blog => id === blog._id)
                            .map((blog, i) => {
                                return (
                                    <div>
                                        <Card key={i} title={blog.title}>
                                            <p>{blog.author}</p>
                                            <p className="blog-author">Posted on {moment(blog.time).format("MMM Do YY, h:mm a")}</p>
                                            <p className="blog-body">{blog.body}</p>
                                        </Card>
                                        {' '}
                                        <Comment id={id} />
                                        <div>
                                            {
                                                blog.comments.length === 0 ? " " :
                                                blog.comments.map((com, i) => {
                                                    return <CommentList obj={com} key={i}/>
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                    }
                </Card>
            </React.Fragment>
        );
    }
}

export default MainPost;