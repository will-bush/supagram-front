import React, { Component } from "react";
import "./Profile.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class Profile extends Component {
    render() {

        return (
            <div className="profile-bar">
                <div className="Profile-user">
                    <div className="Profile-user-avatar">
                        <img src="https://media.licdn.com/dms/image/C4D03AQETNALH0mqtNA/profile-displayphoto-shrink_100_100/0?e=1578528000&v=beta&t=oVlsRj3AsptLp6v7hud8qYE8qVqZoJ-818ljIdOy6-Y" alt="Will" />
                    </div>
                <div className="Profile-user-nickname">
                    <span>Will</span>
                    <span className="profile-stats">Posts: 120</span>
                    <span className="profile-stats">Followers: 840</span>
                    <span className="profile-stats">Following: 412</span>
                </div>
                </div>
                <Button className="add-button"
                     type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}>
                        Add Post
                    </Button>
            </div>
        )
    }
}

export default Profile;