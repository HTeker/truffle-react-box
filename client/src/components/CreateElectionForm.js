import React, { Component } from 'react';

import { Grid, TextField, Button } from '@material-ui/core';

class CreateElectionForm extends Component {

    state = {
        creatorAddress: '0x1Cc2244fb463aeCBB5e709a0b55935053C4557e9',
        name: ''
    }

    onSubmit = e => {

        e.preventDefault();
        
        this.props.onSuccess();
        
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {

        return (

            <form onSubmit={this.onSubmit}>
                <fieldset>

                    <Grid container spacing={24}>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="creatorAddress"
                                name="creatorAddress"
                                label="Uw Ethereum adres *"
                                value={this.state.creatorAddress}
                                onChange={this.handleChange}
                                fullWidth
                                disabled
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="name"
                                name="name"
                                label="Naam *"
                                value={this.state.name}
                                onChange={this.handleChange}
                                fullWidth
                            />
                        </Grid>

                    </Grid>

                    <br />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Verkiezing aanmaken
                    </Button>

                </fieldset>
            </form>

        );

    }

}

export default CreateElectionForm;