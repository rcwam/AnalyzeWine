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
var Depth = (function (_super) {
    __extends(Depth, _super);
    function Depth() {
        var _this = _super.call(this) || this;
        _this.changeDepth = _this.changeDepth.bind(_this);
        return _this;
    }
    Depth.prototype.changeDepth = function (e) {
        this.props.setDepth(e.target.value);
    };
    Depth.prototype.render = function () {
        var _this = this;
        var depth = this.props.depth;
        var depthQuestion = "How deep is the color?";
        var depthSelection = function () {
            return (React.createElement("select", { value: depth, onChange: _this.changeDepth },
                React.createElement("option", { value: "Watery" }, "Watery"),
                React.createElement("option", { value: "Pale" }, "Pale"),
                React.createElement("option", { value: "Medium" }, "Medium"),
                React.createElement("option", { value: "Deep" }, "Deep"),
                React.createElement("option", { value: "Dark" }, "Dark")));
        };
        return (React.createElement("div", null,
            depthQuestion,
            "     ",
            depthSelection()));
    };
    return Depth;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        depth: ApplicationState.blind.notes.eye.depth,
    };
}
var Export = connect(mapStateToProps, BlindStore.actionCreators)(Depth);
export default Export;
//# sourceMappingURL=Depth.js.map