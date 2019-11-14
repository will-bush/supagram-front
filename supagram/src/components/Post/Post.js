// src/components/Post/index.js
import React, { Component } from "react";
import "./Post.css";
// import PostComment from './PostComment'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
// import { timingSafeEqual } from "crypto";
import API from "../../adapters/API";

class Post extends Component {

  state = {
    liked: false,
    followed: false,
    post: {}
  }

  componentDidMount() {
    this.setState({
      post: this.props.post,
      followed: this.props.post.author.followed_by_current_user,
      liked: this.props.post.liked_by_current_user,
      like_count: this.props.post.like_count
    })
  }
  
  render() {
    return <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="https://media.licdn.com/dms/image/C4D03AQETNALH0mqtNA/profile-displayphoto-shrink_100_100/0?e=1578528000&v=beta&t=oVlsRj3AsptLp6v7hud8qYE8qVqZoJ-818ljIdOy6-Y" alt="Will" />
            </div>
            <div className="Post-user-nickname">
              <span>{this.props.post.author.username}</span>
            </div>
            <div className="More-dots">
                {/* <MoreHorizIcon /> */}
                {this.props.post.author.username === this.props.username ? null : <Button
                  onClick={() => this.handleFollowClick(this.props.post.author.id)}
                  small
                  variant="contained"
                  color="primary"
  >{this.state.followed ? "Unfollow" : "Follow"}</Button>}
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="alt text" src={this.props.image} />
          </div>
        </div>
        <div className="Like-icon"
              onClick={() => this.handleLikeClick(this.props.post.id)}>
                {this.state.post.liked_by_current_user ? <FavoriteIcon color="error"/> : <FavoriteBorderOutlinedIcon/>}
            
        </div>
        <div className="Like-count">
          <p> {this.state.post.like_count} likes</p>
        </div>
        <div className="Post-caption">
          <strong>Will</strong> {this.props.caption}
        </div>
        {/* <div className="View-more">
            View all 27 comments
        </div> */}
        {/* <PostComment name="Angus" content="This is a comment on a post."/> */}
        {/* <PostComment name="Mike" content="This is another comment on the same post."/> */}
        <div className="Small-text">
            4 HOURS AGO
        </div>
      </article>;
    }

    handleLikeClick = (id) => {
      console.log(id);
      console.log(this.props.post)
      if (this.state.post.liked_by_current_user) {
        API.deleteLike(id).then(resp => this.setState({
          post: {
            ...this.state.post,
            like_count: resp.post.like_count,
            liked_by_current_user: resp.post.liked_by_current_user
          },
        }))
      }
      else {
        API.postLike(id).then(resp => this.setState({
          post: {
            ...this.state.post,
            like_count: resp.post.like_count,
            liked_by_current_user: resp.post.liked_by_current_user
          },
        }))
      }
    }

    handleFollowClick = (id) => {
      if (this.state.followed)
      {API.postFollow(id).then(this.setState({
        followed: false
      }))}
      else
      {API.deleteFollow(id).then(this.setState({
        followed: true
    }))}
    }
}
export default Post;