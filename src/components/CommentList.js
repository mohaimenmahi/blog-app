import React, { Component } from 'react'
import Service from './Service'
import { Card, Form } from 'antd'
import moment from 'moment'

class CommentList extends Component {
  constructor (props) {
    super(props)

    this.blogService = new Service()
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove (event) {
    event.preventDefault()
    console.log('id: ', this.props.id)
    this.blogService.deleteComment(this.props.id, this.props.obj.time)
  }
  render () {
    return (
      <React.Fragment>
        {
          <div>
            <Card>
              <p>Guest User: {this.props.obj.comment}</p>
              <p>{moment(this.props.obj.time).format('MMM Do YY, h:mm a')}</p>
              <Form onSubmit={this.handleRemove}>
                <input type='submit' value='Delete' />
              </Form>
            </Card>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default CommentList
