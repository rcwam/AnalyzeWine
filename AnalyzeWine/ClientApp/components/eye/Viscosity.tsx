import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';



class Viscosity extends Component <any, any> {
    constructor() {
        super();
        this.changeViscosity = this.changeViscosity.bind(this);
    }
    changeViscosity(e: any) {
        this.props.setViscosity(e.target.value);
    }

    render() {
        const {viscosity} = this.props;
        const viscosityQuestion = "How viscous is the wine (legs)?";
        const viscositySelection = () => {
            return(
                <select value={viscosity} onChange={this.changeViscosity}>
                    <option value="None">None</option>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Heavy">Heavy</option>
                </select>
            )
        };

        return (
            <div>
                {viscosityQuestion}     {viscositySelection()}
            </div>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        viscosity: ApplicationState.blind.notes.eye.viscosity,
    };
}
const Export = connect(mapStateToProps, BlindStore.actionCreators )(Viscosity) as typeof Viscosity;
export default Export
