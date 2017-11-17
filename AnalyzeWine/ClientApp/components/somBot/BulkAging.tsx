import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

// USE CHEMICAL ANALYSIS DATA FOR OAK & TOAST
class BulkAging extends Component <any, any> {
    render() {
        const {wood,toast} =this.props;
        return (
            <div><p>Bulk Aging:</p> <ul><li>Wood: {wood}</li><li>Toast: {toast}</li></ul></div>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        wood: ApplicationState.blind.conclusions.SomBot.viniculture.bulkAging.barrel.wood,
        toast: ApplicationState.blind.conclusions.SomBot.viniculture.bulkAging.barrel.toast,
    };
}

export default connect(mapStateToProps, BlindStore.actionCreators )(BulkAging) as typeof BulkAging;
