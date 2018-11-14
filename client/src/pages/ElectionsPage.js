import React from 'react';

import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import CenteredPageContainer from '../components/CenteredPageContainer';
import PaperContainer from '../components/PaperContainer';
import DataList from '../components/DataList';

import elections from '../data/elections';

const ElectionsPage = () => (
    <CenteredPageContainer>
        <PaperContainer title="Alle verkiezingen">

            { elections.length > 0 ?

                <DataList data={elections.map(election => {
                    return {
                        title: election.name,
                        onClick: () => { document.location.href = `/election/${election.id}` }
                    }
                })} />

            :

                <List>
                    <ListItem>
                        <ListItemText primary="Er zijn nog geen verkiezingen" />
                    </ListItem>
                </List>
            
            }

            <Button variant="fab" color="primary" style={{ position: 'fixed', bottom: 40, right: 40 }} onClick={() => { document.location.href = `/election/create` }}>
                <AddIcon />
            </Button>
            
        </PaperContainer>
    </CenteredPageContainer>
);

export default ElectionsPage;