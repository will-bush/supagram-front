import React from 'react';
import Profile from '../Profile/Profile'
import Post from '../Post/Post'
import API from '../../adapters/API';

class ProfilePage extends React.Component {

    state = {
        feed: [],
        user: {}
    }

    componentDidMount() {
        API.getProfile(this.state.user.username).then(resp => this.setState({
            feed: resp.feed,
            user: resp.user
        }))
    }
        // API.getFeed().then(resp => console.log(resp))

        addNewPost = (post) => {
            this.setState({
                feed: [post, ...this.state.feed],
                user: {
                    ...this.state.user,
                    post_count: this.state.user.post_count + 1,
                  }
            })
        }
    

    render() {

        return (
            <div>
                <Profile user={this.state.user} username={this.state.user.username} followed_count={this.state.user.followed_count} follower_count={this.state.user.follower_count} post_count={this.state.user.post_count} addNewPost={this.addNewPost}/>
                {this.state.feed.map(item => (
                <Post image={item.post.image_url} username={item.post.author.username} post={item.post} caption={item.post.caption} likes={item.post.like_count}/>)
                )}
                </div>
        )
    }
}

export default ProfilePage;