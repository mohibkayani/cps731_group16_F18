import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


class Favs extends Component {
    favs = JSON.parse(localStorage.getItem("favs"));


    render() {
        console.log(this.favs);
        if (this.favs != null && this.favs.length > 0){
            return (
                <div>
                    <List>
                        {this.favs.map(fav => (
                        <ListItem button>
                             <Avatar>
                                <ImageIcon />
                                </Avatar>
                                <a href={fav.link}>
                                    <ListItemText primary={fav.title} secondary={fav.description} />
                                </a>
                        </ListItem>
                        ))}
                    </List>
                </div>
            );
        } else {
            return (
                <div>
                   No favorites yet.
                </div>
            );
        }
    }
}

export default Favs;