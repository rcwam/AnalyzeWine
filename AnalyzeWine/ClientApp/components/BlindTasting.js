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
        return _this;
    }
    Blind.prototype.changeWineType = function (e) { this.props.setWineType(e.target.value); };
    Blind.prototype.changeColor = function (e) { this.props.setColor(e.target.value); };
    Blind.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", null,
                "Current count: ",
                React.createElement("strong", null, this.props.notes.eye.wineType)),
            React.createElement("button", { onClick: function () { _this.props.setWineType("Rose"); } }, "Increment"),
            this.selectTypeList(),
            this.pickList(this.props.notes.eye.wineType));
    };
    Blind.prototype.selectTypeList = function () {
        return (React.createElement("select", { name: "WineTypeSelector", value: this.props.notes.eye.wineType, onChange: this.changeWineType },
            React.createElement("option", { value: "Red" }, "Red"),
            React.createElement("option", { value: "White" }, "White"),
            React.createElement("option", { value: "Rose" }, "Rose")));
    };
    Blind.prototype.pickList = function (thisWineType) {
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
    return Blind;
}(React.Component));
export default connect(function (state) { return state.blind; }, BlindStore.actionCreators)(Blind);
//# sourceMappingURL=BlindTasting.js.map