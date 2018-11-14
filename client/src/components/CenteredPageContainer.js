import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
});

const CenteredPageContentContainer = props => {
    const { classes } = props;

    return (
        <div id="layout" className={classes.layout}>
            {props.children}
        </div>
    );
}

CenteredPageContentContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
}

export default withStyles(styles)(CenteredPageContentContainer);