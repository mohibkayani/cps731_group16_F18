import React, { Component } from 'react';

class Favs extends Component {
    favs = JSON.parse(localStorage.getItem("favs"));

    render() {
        console.log(this.favs);
        return (
            <div>
                <ul>
                    {this.favs.map(fav => (
                    <li>
                        {fav.title} , price: {fav.price}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Favs;