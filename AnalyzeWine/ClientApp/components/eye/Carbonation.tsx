import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class Carbonation extends Component <any, any> {
    constructor() {
        super();
        this.changeCarbonation = this.changeCarbonation.bind(this);
    }

    changeCarbonation(e: any) {
        this.props.changeCarbonation(e.target.value);
    }

    render() {
        const {carbonation} = this.props;

        return (
            <select value={carbonation} onChange={this.changeCarbonation}>
                <option value="None">None</option>
                <option value="Small/Light">Small/Light</option>
                <option value="Small/Heavy">Small/Heavy</option>
                <option value="Large/Light">Large/Light</option>
                <option value="Large/Heavy">Large/Heavy</option>
            </select>
        );
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        carbonation: ApplicationState.blind.notes.eye.carbonation,
    };
}
const Export = connect(mapStateToProps, BlindStore.actionCreators )(Carbonation) as typeof Carbonation;
export default Export