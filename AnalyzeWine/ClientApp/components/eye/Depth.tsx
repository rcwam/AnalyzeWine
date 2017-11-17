import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class Depth extends Component <any, any> {
    constructor() {
        super();
        this.changeDepth = this.changeDepth.bind(this);
    }

    changeDepth(e: any) {
        this.props.setDepth(e.target.value);
    }

    render() {
        const {depth} = this.props;
        const depthQuestion = "How deep is the color?";
        const depthSelection  = () => {
            return (
                    <select value={depth} onChange={this.changeDepth}>
                        <option value="Watery">Watery</option>
                        <option value="Pale">Pale</option>
                        <option value="Medium">Medium</option>
                        <option value="Deep">Deep</option>
                        <option value="Dark">Dark</option>
                    </select>
            )
        };

        return (
            <div>
                {depthQuestion}     {depthSelection()}
            </div>
        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        depth: ApplicationState.blind.notes.eye.depth,
    };
}
const Export = connect(mapStateToProps, BlindStore.actionCreators )(Depth) as typeof Depth;
export default Export
