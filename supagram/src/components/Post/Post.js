// src/components/Post/index.js
import React, { Component } from "react";
import "./Post.css";
import PostComment from './PostComment'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


class Post extends Component {
  render() {
    return <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="https://media.licdn.com/dms/image/C4D03AQETNALH0mqtNA/profile-displayphoto-shrink_100_100/0?e=1578528000&v=beta&t=oVlsRj3AsptLp6v7hud8qYE8qVqZoJ-818ljIdOy6-Y" alt="Will" />
            </div>
            <div className="Post-user-nickname">
              <span>{this.props.username}</span>
            </div>
            <div className="More-dots">
                <MoreHorizIcon />
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="Icon Living" src={this.props.image} />
          </div>
        </div>
        <div className="Like-icon">
            <FavoriteBorderOutlinedIcon />
        </div>
        <div className="Like-count">
            <p>1,234 likes</p>
        </div>
        <div className="Post-caption">
          <strong>Will</strong> This is the caption for the post!
        </div>
        <div className="View-more">
            View all 27 comments
        </div>
        <PostComment name="Angus" content="This is a comment on a post."/>
        <PostComment name="Mike" content="This is another comment on the same post."/>
        <div className="Small-text">
            4 HOURS AGO
        </div>
      </article>;
    }
}
export default Post;