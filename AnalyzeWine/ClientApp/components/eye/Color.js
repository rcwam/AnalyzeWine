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
import { Component } from 'react';
import { connect } from 'react-redux';
import * as BlindStore from '../../store/Blind';
var Color = (function (_super) {
    __extends(Color, _super);
    function Color() {
        var _this = _super.call(this) || this;
        _this.changeColor = _this.changeColor.bind(_this);
        return _this;
    }
    Color.prototype.changeColor = function (e) {
        this.props.setColor(e.target.value);
    };
    Color.prototype.render = function () {
        var _this = this;
        var _a = this.props, wineType = _a.wineType, color = _a.color;
        // Sight Selections
        var redColorList = function () {
            return (React.createElement("select", { value: color, onChange: _this.changeColor },
                React.createElement("option", { value: "Purple" }, "Purple"),
                React.createElement("option", { value: "Ruby" }, "Ruby"),
                React.createElement("option", { value: "Red" }, "Red"),
                React.createElement("option", { value: "Garnet" }, "Garnet"),
                React.createElement("option", { value: "Brick" }, "Brick"),
                React.createElement("option", { value: "Brown" }, "Brown")));
        };
        var whiteColorList = function () {
            return (React.createElement("select", { value: color, onChange: _this.changeColor },
                React.createElement("option", { value: "Clear" }, "Greenish"),
                React.createElement("option", { value: "Greenish" }, "Greenish"),
                React.createElement("option", { value: "Yellow" }, "Yellow"),
                React.createElement("option", { value: "Straw" }, "Straw"),
                React.createElement("option", { value: "Golden" }, "Golden"),
                React.createElement("option", { value: "Amber" }, "Amber"),
                React.createElement("option", { value: "Brown" }, "Brown")));
        };
        var roseColorList = function () {
            return (React.createElement("select", { value: color, onChange: _this.changeColor },
                React.createElement("option", { value: "Pink" }, "Pink"),
                React.createElement("option", { value: "Salmon" }, "Salmon"),
                React.createElement("option", { value: "Orange" }, "Orange"),
                React.createElement("option", { value: "Copper" }, "Copper"),
                React.createElement("option", { value: "Brown" }, "Brown")));
        };
        var pickColorList = function (wineType) {
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
        return (React.createElement("div", null, pickColorList(wineType)));
    };
    return Color;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        wineType: ApplicationState.blind.notes.eye.wineType,
        color: ApplicationState.blind.notes.eye.color,
    };
}
var ColorExport = connect(mapStateToProps, BlindStore.actionCreators)(Color);
export default ColorExport;
//# sourceMappingURL=Color.js.map