import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class Clarity extends Component <any, any> {
    constructor() {
        super();
        this.changeClarity = this.changeClarity.bind(this);
    }

    changeClarity(e: any) {
        this.props.setClarity(e.target.value);
    }

    render() {
        const {clarity} = this.props;

        return (
            <select value={clarity} onChange={this.changeClarity}>
                <option value="Clear">Clear</option>
                <option value="Hazy">Hazy</option>
                <option value="Cloudy">Cloudy</option>
            </select>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        clarity: ApplicationState.blind.notes.eye.clarity,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators )(Clarity) as typeof Clarity;
