import React, { Component } from 'react';
import Favs from './Favs';



class UserProfile extends Component {
    render() {
        return (
            <div>
                Favorites:
                <Favs/>
            </div>
        );
    }
}

export default UserProfile;