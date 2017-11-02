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
    changeWineType(e: any) {
        this.props.setWineType(e.target.value);
    }

    changeColor(e: any) {
        this.props.setColor(e.target.value);
    }

    changeDepth(e: any) {
        this.props.setDepth(e.target.value);
    }

    changeClarity(e: any) {
        this.props.setClarity(e.target.value);
    }

    changeSediment(e: any) {
        this.props.setSediment(e.target.value);
    }
    changeViscosity(e: any) {
        this.props.setViscosity(e.target.value);
    }
    changeCarbonation(e: any) {
        this.props.setCarbonation(e.target.value);
    }

    constructor() {
        super();
        this.changeWineType = this.changeWineType.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeDepth = this.changeDepth.bind(this);
        this.changeClarity = this.changeClarity.bind(this);
        this.changeSediment = this.changeSediment.bind(this);
        this.changeViscosity = this.changeViscosity.bind(this);
        this.changeCarbonation = this.changeCarbonation.bind(this);
    }


    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{this.props.notes.eye.wineType}</strong></p>

            <button onClick={() => {
                this.props.setWineType("Rose")
            }}>Increment
            </button>


            <p>What type of wine are you analyzing? {this.selectTypeList()} </p>
            <p>What color is the wine? {this.pickColorList(this.props.notes.eye.wineType)}</p>
            <p>How deep is the wine's color (rim)? {this.selectDepth()}</p>
            <p>How clear is the wine? {this.selectClarity()}</p>
            <p>Does the wine have sediment? {this.selectSediment()}</p>
            <p>How viscose is the wine (legs)? {this.selectViscosity()}</p>
            <p>Is the wine carbonated (bubble size, effervescence)? {this.selectCarbonation()}</p>
        </div>;
    }

    selectTypeList() {
        return (

            <select name="WineTypeSelector" value={this.props.notes.eye.wineType} onChange={this.changeWineType}>
                <option value="Red">Red</option>
                <option value="White">White</option>
                <option value="Rose">Rose</option>
            </select>
        );
    }

    private pickColorList(thisWineType: string) {
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

    redColorList() {
        return (
            <select value={this.props.notes.eye.color} onChange={this.changeColor}>
                <option value="Purple">Purple</option>
                <option value="Ruby">Ruby</option>
                <option value="Red">Red</option>
                <option value="Garnet">Garnet</option>
                <option value="Brick">Brick</option>
                <option value="Brown">Brown</option>
            </select>
        );
    }

    whiteColorList() {
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

    selectDepth() {
        return (
            <select value={this.props.notes.eye.depth} onChange={this.changeDepth}>
                <option value="Watery">Watery</option>
                <option value="Pale">Pale</option>
                <option value="Medium">Medium</option>
                <option value="Deep">Deep</option>
                <option value="Dark">Dark</option>
            </select>
        );
    }

    selectClarity() {
        return (
            <select value={this.props.notes.eye.clarity} onChange={this.changeClarity}>
                <option value="Clear">Clear</option>
                <option value="Hazy">Hazy</option>
                <option value="Cloudy">Cloudy</option>
            </select>
        );
    }

    selectSediment() {
        return (
            <select value={this.props.notes.eye.sediment} onChange={this.changeSediment}>
                <option value="None">None</option>
                <option value="Light">Light</option>
                <option value="Heavy">Heavy</option>
                <option value="Tartrate">Tartrate</option>
            </select>
        );
    }

    selectViscosity() {
        return (
            <select value={this.props.notes.eye.viscosity} onChange={this.changeViscosity}>
                <option value="None">None</option>
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Heavy">Heavy</option>
            </select>
        );
    }

    selectCarbonation() {
        return (
            <select value={this.props.notes.eye.carbonation} onChange={this.changeCarbonation}>
                <option value="None">None</option>
                <option value="Small/Light">Small/Light</option>
                <option value="Small/Heavy">Small/Heavy</option>
                <option value="Large/Light">Large/Light</option>
                <option value="Large/Heavy">Large/Heavy</option>
            </select>
        );
    }
}

export default connect((state: ApplicationState) => state.blind, BlindStore.actionCreators)(Blind) as typeof Blind;