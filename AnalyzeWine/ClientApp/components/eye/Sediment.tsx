import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class Sediment extends Component <any, any> {
    constructor() {
        super();
        this.changeSediment = this.changeSediment.bind(this);
    }

    changeSediment(e: any) {
        this.props.setSediment(e.target.value);
    }

    render() {
        const {sediment} = this.props;
        const sedimentQuestion = "Is there any sediment in the glass?";
        const sedimentSelection =()=> {
            return (
                    <select value={sediment} onChange={this.changeSediment}>
                        <option value="None">None</option>
                        <option value="Light">Light</option>
                        <option value="Heavy">Heavy</option>
                        <option value="Tartrate">Tartrate</option>
                    </select>
            )
        };

        return (
            <div>
                {sedimentQuestion}     {sedimentSelection()}
            </div>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        sediment: ApplicationState.blind.notes.eye.sediment,
    };
}
const Export = connect(mapStateToProps, BlindStore.actionCreators )(Sediment) as typeof Sediment;
export default Export
