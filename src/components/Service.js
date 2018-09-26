import axios from 'axios';
import moment from 'moment';

class Service {
    sendData(title, author, body) {
        axios.post('http://localhost:4200/blogs/add/post', {
            title: title,
            author: author,
            body: body,
            time: moment.valueOf()
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    addComment(comment, id) {
        axios.post('http://localhost:4200/blogs/comment/'+id, {
            post: comment
        }).then(res => {
                console.log(res);
        }).catch(err => {
                console.log(err);
        })
    }
    deleteComment(id) {
        axios.post('http://localhost:4200/blogs/delete/'+id,)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }
}

export default Service;