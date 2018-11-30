import React, { Component } from 'react';
import Iframe from 'react-iframe'

class Categories extends Component {
    render() {
        return (
            <div>
                <br></br>
        <Iframe url="https://vigorous-shannon-6723fd.netlify.com/"
        width="100%"
        height="2000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
            </div>
        );
    }
}

export default Categories;