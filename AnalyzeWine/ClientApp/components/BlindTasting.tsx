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

    constructor() {
        super();
        this.changeWineType = this.changeWineType.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    changeWineType(e: any) { this.props.setWineType(e.target.value); }
    changeColor(e: any) {    this.props.setColor(e.target.value);    }

    public render() {
        return <div>
                   <h1>Counter</h1>

                   <p>This is a simple example of a React component.</p>

                   <p>Current count: <strong>{this.props.notes.eye.wineType}</strong></p>

                   <button onClick={() => { this.props.setWineType("Rose") }}>Increment</button>


            { this.selectTypeList()}
            {this.pickList(this.props.notes.eye.wineType)}
               </div>;
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

    private pickList(thisWineType:
                         string)
    {
        switch (thisWineType) {
            case "Red":
                return this.redColorList();
            case "White":
                return this.whiteColorList();
            case "Rose":
                return this.roseColorList();
            default:
                return this.redColorList();
        }
    }

    redColorList()
    {
        return (
            <select value={this.props.notes.eye.color} onChange={this.changeColor} >
                <option value="Purple">Purple</option>
                <option value="Ruby">Ruby</option>
                <option value="Red">Red</option>
                <option value="Garnet">Garnet</option>
                <option value="Brick">Brick</option>
                <option value="Brown">Brown</option>
            </select>
        );
    }

    whiteColorList()
    {
        return (
            <select value={this.props.notes.eye.color} onChange={this.changeColor}>
                <option value="Greenish">Greenish</option>
                <option value="Yellow">Yellow</option>
                <option value="Straw">Straw</option>
                <option value="Golden">Golden</option>
                <option value="Amber">Amber</option>
            </select>
        );
    }


    roseColorList() {
        return (
            <select value={this.props.notes.eye.color} onChange={this.changeColor}>
                <option value="Pink">Pink</option>
                <option value="Salmon">Salmon</option>
                <option value="Orange">Orange</option>
                <option value="Copper">Copper</option>
            </select>
        );
    }

}

export default connect((state: ApplicationState) => state.blind, BlindStore.actionCreators)(Blind) as typeof Blind;