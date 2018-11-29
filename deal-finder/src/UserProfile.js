import React, { Component } from 'react';
import Favs from './Favs';



class UserProfile extends Component {
    render() {
        return (
            <div>
                <br/> <br/>
                <h4>Welcome to the User profile, you can find your saved favorites here</h4>
                Favorites:
                <Favs/>
            </div>
        );
    }
}

export default UserProfile;