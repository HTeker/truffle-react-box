import React, { Component, Fragment } from 'react';

import { Grid, TextField, Button, Typography, IconButton, Icon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

class CreateCandidateForm extends Component {

    state = {
        candidates: [{ name: '' }]
    }

    onSubmit = e => {

        e.preventDefault();
        
        this.props.onSuccess();
        
    }

    addCandidateInputs = e => {

        this.setState(prevState => ({
            candidates: [...prevState.candidates, { name: '' }]
        }));

    }

    removeCandidateInputs = i => {

        if(i > 0) {

            let candidates = [...this.state.candidates];

            candidates.splice(i, 1);

            this.setState({ candidates });

        }

    }

    handleChange = e => {

        if(['name'].includes(e.target.name)) {

            let candidates = [...this.state.candidates];

            candidates[e.target.dataset.index][e.target.name] = e.target.value;

            this.setState({ candidates });

        } else {

            this.setState({ [e.target.name]: e.target.value });

        }
        
    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>
                <fieldset>

                    { this.state.candidates.map((candidate, i) => {

                        return (

                            <Fragment key={i}>
                                <br />
                                <Typography variant="subtitle2" gutterBottom>
                                    Kandidaat {i + 1}

                                    { i > 0 &&

                                        <IconButton onClick={() => this.removeCandidateInputs(i)}>
                                            <ClearIcon />
                                        </IconButton>

                                    }
                                    
                                </Typography>

                                <Grid container spacing={24}>

                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            id="name"
                                            name="name"
                                            label="Naam *"
                                            value={this.state.candidates[i].name}
                                            onChange={this.handleChange}
                                            fullWidth
                                            inputProps={{
                                                'data-index': i
                                            }}
                                        />
                                    </Grid>

                                </Grid>
                            </Fragment>

                        );

                    }) }

                    <br />

                    <div style={{ textAlign: 'center' }}>
                        <Button onClick={this.addCandidateInputs}>
                            <AddIcon />
                            Nieuwe regel
                        </Button>
                    </div>

                    <br />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Kandidaten toevoegen
                    </Button>

                </fieldset>
            </form>

        );

    }

}

export default CreateCandidateForm;