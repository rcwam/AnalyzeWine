var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { connect } from 'react-redux';
import * as BlindStore from '../store/Blind';
var Blind = (function (_super) {
    __extends(Blind, _super);
    function Blind() {
        var _this = _super.call(this) || this;
        _this.changeWineType = _this.changeWineType.bind(_this);
        _this.changeColor = _this.changeColor.bind(_this);
        _this.changeDepth = _this.changeDepth.bind(_this);
        _this.changeClarity = _this.changeClarity.bind(_this);
        _this.changeSediment = _this.changeSediment.bind(_this);
        _this.changeViscosity = _this.changeViscosity.bind(_this);
        _this.changeCarbonation = _this.changeCarbonation.bind(_this);
        return _this;
    }
    Blind.prototype.changeWineType = function (e) {
        this.props.setWineType(e.target.value);
    };
    Blind.prototype.changeColor = function (e) {
        this.props.setColor(e.target.value);
    };
    Blind.prototype.changeDepth = function (e) {
        this.props.setDepth(e.target.value);
    };
    Blind.prototype.changeClarity = function (e) {
        this.props.setClarity(e.target.value);
    };
    Blind.prototype.changeSediment = function (e) {
        this.props.setSediment(e.target.value);
    };
    Blind.prototype.changeViscosity = function (e) {
        this.props.setViscosity(e.target.value);
    };
    Blind.prototype.changeCarbonation = function (e) {
        this.props.setCarbonation(e.target.value);
    };
    Blind.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", null,
                "Current count: ",
                React.createElement("strong", null, this.props.notes.eye.wineType)),
            React.createElement("button", { onClick: function () {
                    _this.props.setWineType("Rose");
                } }, "Increment"),
            React.createElement("p", null,
                "What type of wine are you analyzing? ",
                this.selectTypeList(),
                " "),
            React.createElement("p", null,
                "What color is the wine? ",
                this.pickColorList(this.props.notes.eye.wineType)),
            React.createElement("p", null,
                "How deep is the wine's color (rim)? ",
                this.selectDepth()),
            React.createElement("p", null,
                "How clear is the wine? ",
                this.selectClarity()),
            React.createElement("p", null,
                "Does the wine have sediment? ",
                this.selectSediment()),
            React.createElement("p", null,
                "How viscose is the wine (legs)? ",
                this.selectViscosity()),
            React.createElement("p", null,
                "Is the wine carbonated (bubble size, effervescence)? ",
                this.selectCarbonation()));
    };
    Blind.prototype.selectTypeList = function () {
        return (React.createElement("select", { name: "WineTypeSelector", value: this.props.notes.eye.wineType, onChange: this.changeWineType },
            React.createElement("option", { value: "Red" }, "Red"),
            React.createElement("option", { value: "White" }, "White"),
            React.createElement("option", { value: "Rose" }, "Rose")));
    };
    Blind.prototype.pickColorList = function (thisWineType) {
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
    };
    Blind.prototype.redColorList = function () {
        return (React.createElement("select", { value: this.props.notes.eye.color, onChange: this.changeColor },
            React.createElement("option", { value: "Purple" }, "Purple"),
            React.createElement("option", { value: "Ruby" }, "Ruby"),
            React.createElement("option", { value: "Red" }, "Red"),
            React.createElement("option", { value: "Garnet" }, "Garnet"),
            React.createElement("option", { value: "Brick" }, "Brick"),
            React.createElement("option", { value: "Brown" }, "Brown")));
    };
    Blind.prototype.whiteColorList = function () {
        return (React.createElement("select", { value: this.props.notes.eye.color, onChange: this.changeColor },
            React.createElement("option", { value: "Greenish" }, "Greenish"),
            React.createElement("option", { value: "Yellow" }, "Yellow"),
            React.createElement("option", { value: "Straw" }, "Straw"),
            React.createElement("option", { value: "Golden" }, "Golden"),
            React.createElement("option", { value: "Amber" }, "Amber")));
    };
    Blind.prototype.roseColorList = function () {
        return (React.createElement("select", { value: this.props.notes.eye.color, onChange: this.changeColor },
            React.createElement("option", { value: "Pink" }, "Pink"),
            React.createElement("option", { value: "Salmon" }, "Salmon"),
            React.createElement("option", { value: "Orange" }, "Orange"),
            React.createElement("option", { value: "Copper" }, "Copper")));
    };
    Blind.prototype.selectDepth = function () {
        return (React.createElement("select", { value: this.props.notes.eye.depth, onChange: this.changeDepth },
            React.createElement("option", { value: "Watery" }, "Watery"),
            React.createElement("option", { value: "Pale" }, "Pale"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Deep" }, "Deep"),
            React.createElement("option", { value: "Dark" }, "Dark")));
    };
    Blind.prototype.selectClarity = function () {
        return (React.createElement("select", { value: this.props.notes.eye.clarity, onChange: this.changeClarity },
            React.createElement("option", { value: "Clear" }, "Clear"),
            React.createElement("option", { value: "Hazy" }, "Hazy"),
            React.createElement("option", { value: "Cloudy" }, "Cloudy")));
    };
    Blind.prototype.selectSediment = function () {
        return (React.createElement("select", { value: this.props.notes.eye.sediment, onChange: this.changeSediment },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Light" }, "Light"),
            React.createElement("option", { value: "Heavy" }, "Heavy"),
            React.createElement("option", { value: "Tartrate" }, "Tartrate")));
    };
    Blind.prototype.selectViscosity = function () {
        return (React.createElement("select", { value: this.props.notes.eye.viscosity, onChange: this.changeViscosity },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Light" }, "Light"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Heavy" }, "Heavy")));
    };
    Blind.prototype.selectCarbonation = function () {
        return (React.createElement("select", { value: this.props.notes.eye.carbonation, onChange: this.changeCarbonation },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Small/Light" }, "Small/Light"),
            React.createElement("option", { value: "Small/Heavy" }, "Small/Heavy"),
            React.createElement("option", { value: "Large/Light" }, "Large/Light"),
            React.createElement("option", { value: "Large/Heavy" }, "Large/Heavy")));
    };
    return Blind;
}(React.Component));
export default connect(function (state) { return state.blind; }, BlindStore.actionCreators)(Blind);
//# sourceMappingURL=BlindTasting.js.map