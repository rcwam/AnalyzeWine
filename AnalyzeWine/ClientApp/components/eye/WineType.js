"use strict";
/*

import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as BlindStore from '../../store/Blind';

type BlindProps =
    BlindStore.BlindTastingState
    & typeof BlindStore.actionCreators
    & RouteComponentProps<{}>;

export class WineTypeClass extends React.Component<BlindProps, {}> {

    constructor() {
        super();
        this.changeWineType = this.changeWineType.bind(this);
    }
    changeWineType(e: any) {
        this.props.setWineType(e.target.value);
    }
    selectTypeList() {
        return (

            <select name="WineTypeSelector" value={this.props.notes.eye.wineType}  onChange={this.changeWineType}>
                <option value="Red">Red</option>
                <option value="White">White</option>
                <option value="Rose">Rose</option>
            </select>
        );
    }


}

export default connect((state: ApplicationState) => state.blind, BlindStore.actionCreators)(WineTypeClass) as typeof WineTypeClass;

*/ 
//# sourceMappingURL=WineType.js.map