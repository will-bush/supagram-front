import React, { Component } from "react";
import "./Profile.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PostForm from '../PostForm/PostForm'

class Profile extends Component {

    state ={
        addPost: false
    }

    resetPostForm = () => {this.setState({ addPost: false })}

    render() {

        return (
            <div>
            <div className="profile-bar">
                <div className="Profile-user">
                    <div className="Profile-user-avatar">
                        <img src="https://media.licdn.com/dms/image/C4D03AQETNALH0mqtNA/profile-displayphoto-shrink_100_100/0?e=1578528000&v=beta&t=oVlsRj3AsptLp6v7hud8qYE8qVqZoJ-818ljIdOy6-Y" alt="Will" />
                    </div>
                <div className="Profile-user-nickname">
                    <span>{this.props.username}</span>
                    <span className="profile-stats">Posts: {this.props.post_count}</span>
                    <span className="profile-stats">Followers: {this.props.follower_count}</span>
                    <span className="profile-stats">Following: {this.props.followed_count}</span>
                </div>
                </div>
                {!this.state.addPost ? <Button
                    onClick={() => this.setState({
                        addPost: true
                    })}
                    className="add-button"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}>
                        Add Post
                    </Button> : null}
                
            </div>
            {this.state.addPost ? <PostForm addNewPost={this.props.addNewPost} resetPostForm={this.resetPostForm}/> : null}
            </div>
        )
    }
}

export default Profile;