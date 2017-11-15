import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

class Color extends Component <any, any> {
    constructor() {
        super();
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(e: any) {
        this.props.setColor(e.target.value);
    }

    render() {
        const {wineType, color} = this.props;

        // Sight Selections

        const redColorList = () => {
            return (
                <select value={color} onChange={this.changeColor}>
                    <option value="Purple">Purple</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Red">Red</option>
                    <option value="Garnet">Garnet</option>
                    <option value="Brick">Brick</option>
                    <option value="Brown">Brown</option>
                </select>
            );
        };

        const whiteColorList = () => {
            return (
                <select value={color} onChange={this.changeColor}>
                    <option value="Clear">Greenish</option>
                    <option value="Greenish">Greenish</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Straw">Straw</option>
                    <option value="Golden">Golden</option>
                    <option value="Amber">Amber</option>
                    <option value="Brown">Brown</option>
                </select>
            );
        };


        const roseColorList = () => {
            return (
                <select value={color} onChange={this.changeColor}>
                    <option value="Pink">Pink</option>
                    <option value="Salmon">Salmon</option>
                    <option value="Orange">Orange</option>
                    <option value="Copper">Copper</option>
                    <option value="Brown">Brown</option>
                </select>
            );
        };

        const pickColorList = (wineType: string) => {
            switch (wineType) {
                case "Red":
                    return redColorList();
                case "White":
                    return whiteColorList();
                case "Rose":
                    return roseColorList();
                default:
                    return redColorList();
            }
        };

        return (
            <div>
                {pickColorList(wineType)}
            </div>

        )
    }
}

function mapStateToProps (ApplicationState: any) {
    return {
        wineType: ApplicationState.blind.notes.eye.wineType,
        color: ApplicationState.blind.notes.eye.color,
    };
}

const ColorExport = connect(mapStateToProps, BlindStore.actionCreators )(Color) as typeof Color;
export default ColorExport
