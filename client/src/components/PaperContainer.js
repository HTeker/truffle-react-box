import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography, Paper, IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const styles = theme => ({
    paper: {
        position: 'relative',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    }
});

class PaperContainer extends Component {

    state = {
        isOpen: false
    }

    componentDidMount() {

        this.props.isOpen && this.setState({ isOpen: this.props.isOpen });

    }

    openAccordion = () => this.setState({ isOpen: true });

    closeAccordion = () => this.setState({ isOpen: false });

    render() {

        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <div style={{ display: 'flex' }}>
                    { this.props.title &&
                        <Typography variant={this.props.typeVariant || "display1"} align={this.props.alignTitle} component="h3" style={{ flex: 1 }}>
                            {this.props.title}
                        </Typography>
                    }
                    { (this.props.isAccordion && this.state.isOpen) &&

                        <IconButton onClick={() => this.closeAccordion()}>
                            <ArrowUpwardIcon />
                        </IconButton>

                    }
                    { (this.props.isAccordion && !this.state.isOpen) &&

                        <IconButton onClick={() => this.openAccordion()}>
                            <ArrowDownwardIcon />
                        </IconButton>

                    }
                </div>
                <br />

                { (!this.props.isAccordion || this.state.isOpen) &&

                    this.props.children
            
                }
            </Paper>
        );

    }
    
}

PaperContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    isAccordion: PropTypes.bool,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.any,
    typeVariant: PropTypes.string,
    alignTitle: PropTypes.string
}

export default withStyles(styles)(PaperContainer);