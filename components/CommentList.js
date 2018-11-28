import React, { Component } from 'react'
import Comment from "./Comment";

export default class CommentList extends Component {
    render() {

        const { comments } = this.props;

        return (
            <div>
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        )
    }
}
