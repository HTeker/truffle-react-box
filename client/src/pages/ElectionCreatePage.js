import React from 'react';

import CenteredPageContainer from '../components/CenteredPageContainer';
import PaperContainer from '../components/PaperContainer';
import CreateElectionStepper from '../components/CreateElectionStepper';

const ElectionCreatePage = () => (
    <CenteredPageContainer>
        <PaperContainer title="Verkiezing aanmaken">

            <CreateElectionStepper />

        </PaperContainer>
    </CenteredPageContainer>
);

export default ElectionCreatePage;