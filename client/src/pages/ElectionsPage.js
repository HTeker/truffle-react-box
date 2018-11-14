import React, { Component } from 'react';
import Web3Helper from '../helpers/Web3Helper';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import CenteredPageContainer from '../components/CenteredPageContainer';
import PaperContainer from '../components/PaperContainer';
import DataList from '../components/DataList';

class ElectionsPage extends Component{

    state = {
        elections: []
    }

    componentDidMount = async () => {

        const count = await Web3Helper.contracts.Election.getElectionsCount();

        try {
            for(let i = 0; i < count; i++) {

                let result = await Web3Helper.contracts.Election.getElectionByIndex(i);
    
                let election = {
                    id: result[0].toNumber(),
                    creatorAddress: result[1],
                    name: result[2],
                    isActive: result[3]
                };
    
                this.setState({ elections: [...this.state.elections, election] });
    
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {

        return (

            <CenteredPageContainer>
                <PaperContainer title="Alle verkiezingen">

                    { this.state.elections.length > 0 ?

                        <DataList data={this.state.elections.map(election => {
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

    }
    
};

export default ElectionsPage;