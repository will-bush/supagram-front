import React from 'react';
import Profile from '../Profile/Profile'
import Post from '../Post/Post'

class UserPage extends React.Component {

    state = {

    }

    componentDidMount() {
        // what do we need to do when the component has mounted?
    }

    getPosts = () => {
        // function to get posts from API
    }

    getProfile = () => {
        // function to get profile info?
    }

    render() {

        return (
            <div>
                <Profile />
                <Post image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" username="Will"/>
                <Post image="https://images.unsplash.com/photo-1573120923395-155c87bf2c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" username="Will"/>
                <Post image="https://images.unsplash.com/photo-1573137710792-c8f26d780975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" username="Will"/>            
                </div>
        )
    }
}

export default UserPage;