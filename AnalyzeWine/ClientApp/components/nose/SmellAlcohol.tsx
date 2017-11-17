import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class SmellAlcohol extends Component <any, any> {
    constructor() {
        super();
        this.changeSmellAlcohol = this.changeSmellAlcohol.bind(this);
    }

    changeSmellAlcohol(e: any) {
        this.props.setSmellAlcohol(e.target.value);
    }

    render() {
        const {smellAlcohol} = this.props;

        return (
            <select value={smellAlcohol} onChange={this.changeSmellAlcohol}>
                <option value="None">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        smellAlcohol: ApplicationState.blind.notes.nose.smellAlcohol,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators )(SmellAlcohol) as typeof SmellAlcohol;
