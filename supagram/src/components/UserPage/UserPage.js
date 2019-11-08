import React from 'react';
import Profile from '../Profile/Profile'
import Post from '../Post/Post'

class UserPage extends React.Component {

    render() {

        return (
            <div>
                <Profile />
                <Post />
                <Post />
            </div>
        )
    }
}

export default UserPage;