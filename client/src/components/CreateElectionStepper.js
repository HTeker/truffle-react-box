import React, { Component } from 'react';

import { Stepper, Step, StepLabel, StepContent } from '@material-ui/core';

import CreateElectionForm from '../components/CreateElectionForm';
import CreateCandidateForm from '../components/CreateCandidateForm';

class CreateElectionStepper extends Component {

    state = {
        activeStep: 0
    }

    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 });
    };

    handleNext = () => {
        this.setState({ activeStep: this.state.activeStep + 1 });
    };

    render() {

        return (

            <Stepper activeStep={this.state.activeStep} orientation="vertical">

                <Step>
                    <StepLabel>Verkiezing aanmaken</StepLabel>
                    <StepContent>
                        <CreateElectionForm onSuccess={this.handleNext} />
                    </StepContent>
                </Step>

                <Step>
                    <StepLabel>Kandidaten toevoegen</StepLabel>
                    <StepContent>
                        <CreateCandidateForm onSuccess={this.handleNext} />
                    </StepContent>
                </Step>

                <Step>
                    <StepLabel>Klaar</StepLabel>
                    <StepContent>
                        <p>De verkiezing is aangemaakt.</p>
                    </StepContent>
                </Step>

            </Stepper>

        );

    }

}

export default CreateElectionStepper;