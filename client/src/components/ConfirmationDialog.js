import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

class ConfirmationDialog extends Component {

    render() {

        return (

            <Dialog
                open={this.props.open}
                onClose={() => this.setState({ isOpen: false })}
                keepMounted>

                <DialogTitle>
                    {this.props.title}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {this.props.description}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => this.props.onConfirm()}>
                        OK
                    </Button>
                    <Button onClick={() => this.props.onReject()}>
                        Annuleer
                    </Button>
                </DialogActions>

            </Dialog>

        );

    }

}

export default ConfirmationDialog;