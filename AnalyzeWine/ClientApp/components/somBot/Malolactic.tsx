import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

let malolactic:boolean = false;

class Malolactic extends Component <any, any> {


    // Can make this a list-item when other Processes are done.
    render() {
        const {acidity, body, malolacticProfileClue, viscosity} = this.props;

        malolactic = (acidity!= "High")&&(body!="None"||body)&&(viscosity!="None")&&malolacticProfileClue;
      //  alert(malolactic);

        return (
            <p>Malolactic: {String(malolactic)}</p>
        )
    }

    componentWillReceiveProps(nextProps: any) {
        if (
            this.props.acidity != nextProps.acidity
            || this.props.body != nextProps.body
            || this.props.malolacticProfileClue != nextProps.malolacticProfileClue
            || this.props.viscosity != nextProps.viscosity
        ) {
            //  alert(wood);
            this.updateMalolactic(malolactic);
        }
    }

    updateMalolactic = (malolactic: boolean) => {
        this.props.setMalolactic(malolactic)
    };
}

function mapStateToProps (ApplicationState: any) {
    return {
        malolacticProfileClue: ApplicationState.blind.conclusions.SomBot.chemicals.malolacticProfileClue,
        acidity: ApplicationState.blind.notes.palate.acidity,
        body: ApplicationState.blind.notes.palate.body,
        viscosity: ApplicationState.blind.notes.eye.viscosity,
    };
}

export default connect(mapStateToProps, BlindStore.actionCreators )(Malolactic) as typeof Malolactic;

