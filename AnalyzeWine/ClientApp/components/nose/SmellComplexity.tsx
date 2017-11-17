import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class SmellComplexity extends Component <any, any> {
    constructor() {
        super();
        this.changeSmellComplexity = this.changeSmellComplexity.bind(this);
    }

    changeSmellComplexity(e: any) {
        this.props.setCSmellComplexity(e.target.value);
    }

    render() {
        const {smellComplexity} = this.props;

        return (
            <select value={smellComplexity} onChange={this.changeSmellComplexity}>
                <option value="Simple">Simple</option>
                <option value="Medium">Medium</option>
                <option value="Complex">Complex</option>
            </select>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        smellComplexity: ApplicationState.blind.notes.nose.smellComplexity,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators )(SmellComplexity) as typeof SmellComplexity;
