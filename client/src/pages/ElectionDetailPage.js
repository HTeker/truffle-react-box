import React, { Component, Fragment } from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';

import CenteredPageContainer from '../components/CenteredPageContainer';
import PaperContainer from '../components/PaperContainer';
import DataList from '../components/DataList';

import electionsData from '../data/elections';
import candidatesData from '../data/candidates';
import ConfirmationDialog from '../components/ConfirmationDialog';

class ElectionDetailPage extends Component {

    state = {
        election: {},
        candidates: [],

        isDialogOpen: false
    }

    componentDidMount() {

        let election = electionsData.find(election => election.id == this.props.match.params.id );

        this.setState({ election: election });

        let candidates = candidatesData.filter(candidate => candidate.electionId == this.props.match.params.id);
        
        this.setState({ candidates: candidates });

    }

    render() {

        return (

            <Fragment>
                <CenteredPageContainer>
                    <PaperContainer title={`Kandidaten van ${this.state.election.name}`}>

                        { this.state.candidates.length > 0 ?
                        
                            <DataList data={this.state.candidates.map(candidate => {
                                return {
                                    title: candidate.name,
                                    subtitle: `${candidate.votes} aantal stemmen`,
                                    contextMenu: [{
                                        label: 'Stem',
                                        onClick: () => this.setState({ isDialogOpen: true }, () => console.log('Stemmen...'))
                                    }]
                                }
                            })} />
                    
                        : 
                        
                            <List>
                                <ListItem>
                                    <ListItemText primary="Er zijn nog geen kandidaten" />
                                </ListItem>
                            </List>
                    
                        }

                    </PaperContainer>
                </CenteredPageContainer>

                <ConfirmationDialog
                    open={this.state.isDialogOpen}
                    title="Weet u het zeker?"
                    description="Weet u zeker dat u op deze kandidaat wilt stemmen? Let op: uw keuze is definitief."
                    onConfirm={() => this.setState({ isDialogOpen: false }, () => console.log('Confirmed!'))}
                    onReject={() => this.setState({ isDialogOpen: false }, () => console.log('rejected'))} />
            </Fragment>

        );

    }
    
};

export default ElectionDetailPage;