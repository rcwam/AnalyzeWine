import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class SmellIntensity extends Component <any, any> {
    constructor() {
        super();
        this.changeSmellIntensity = this.changeSmellIntensity.bind(this);
    }

    changeSmellIntensity(e: any) {
        this.props.setSmellIntensity(e.target.value);
    }

    render() {
        const {smellIntensity} = this.props;

        return (
            <select value={smellIntensity} onChange={this.changeSmellIntensity}>
                <option value="None">None</option>
                <option value="Weak">Weak</option>
                <option value="Medium">Medium</option>
                <option value="Strong">Strong</option>
                <option value="Powerful">Powerful</option>
            </select>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        smellIntensity: ApplicationState.blind.notes.nose.smellIntensity,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators )(SmellIntensity) as typeof SmellIntensity;
