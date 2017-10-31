import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as BlindStore from '../store/Blind';

type BlindProps =
    BlindStore.BlindTastingState
    & typeof BlindStore.actionCreators
    & RouteComponentProps<{}>;

class Blind extends React.Component<BlindProps, {}> {
    public render() {
        return <div>
                   <h1>Counter</h1>

                   <p>This is a simple example of a React component.</p>

                   <p>Current count: <strong>{this.props.notes.eye.wineType}</strong></p>

                   <button onClick={() => { this.props.white() }}>Increment</button>
               </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.blind, // Selects which state properties are merged into the component's props
    BlindStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Blind) as typeof Blind;