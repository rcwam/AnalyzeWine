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
var Clarity = (function (_super) {
    __extends(Clarity, _super);
    function Clarity() {
        var _this = _super.call(this) || this;
        _this.changeClarity = _this.changeClarity.bind(_this);
        return _this;
    }
    Clarity.prototype.changeClarity = function (e) {
        this.props.setClarity(e.target.value);
    };
    Clarity.prototype.render = function () {
        var clarity = this.props.clarity;
        return (React.createElement("select", { value: clarity, onChange: this.changeClarity },
            React.createElement("option", { value: "Clear" }, "Clear"),
            React.createElement("option", { value: "Hazy" }, "Hazy"),
            React.createElement("option", { value: "Cloudy" }, "Cloudy")));
    };
    return Clarity;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        clarity: ApplicationState.blind.notes.eye.clarity,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(Clarity);
//# sourceMappingURL=Clarity.js.map