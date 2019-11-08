import React from 'react';
import "./PostComment.css";

class PostComment extends React.Component {

    render() {

        return (
            <div className="postComment"><strong>{this.props.name} </strong>{this.props.content}</div>
        )
    }
}

export default PostComment;