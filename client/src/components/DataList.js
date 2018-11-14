import React, { Component, Fragment } from 'react';
import { List, ListItem, ListItemText, Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class DataList extends Component {

    state = {
        anchorEl: null,
        isMenuOpen: false
    }

    render() {

        return (

            <List>
                { this.props.data.map((data, i) => {

                    return (

                        <ListItem button={!!data.onClick} key={i} onClick={data.onClick}>
                            <Avatar>{data.title.substring(0, 1)}</Avatar>
                            <ListItemText primary={data.title} secondary={data.subtitle} />

                            {data.contextMenu &&
                            
                                <Fragment>
                                    <IconButton onClick={e => this.setState({ anchorEl: e.currentTarget, isMenuOpen: true })} >
                                        <MoreVertIcon />
                                    </IconButton>

                                    <Menu
                                        anchorEl={this.state.anchorEl}
                                        open={this.state.isMenuOpen}
                                        onClose={() => this.setState({ anchorEl: null, isMenuOpen: false })}
                                    >
                                        {data.contextMenu.map((menuItem, i) => (
                                            <MenuItem key={i} onClick={() => this.setState({ isMenuOpen: false }, () => menuItem.onClick())}>
                                                {menuItem.label}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Fragment>
                            }

                        </ListItem>

                    );

                }) }
            </List>

        );

    }

}

export default DataList;