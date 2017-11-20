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
var Viscosity = (function (_super) {
    __extends(Viscosity, _super);
    function Viscosity() {
        var _this = _super.call(this) || this;
        _this.changeViscosity = _this.changeViscosity.bind(_this);
        return _this;
    }
    Viscosity.prototype.changeViscosity = function (e) {
        this.props.setViscosity(e.target.value);
    };
    Viscosity.prototype.render = function () {
        var _this = this;
        var viscosity = this.props.viscosity;
        var viscosityQuestion = "How viscous is the wine (legs)?";
        var viscositySelection = function () {
            return (React.createElement("select", { value: viscosity, onChange: _this.changeViscosity },
                React.createElement("option", { value: "None" }, "None"),
                React.createElement("option", { value: "Thin" }, "Light"),
                React.createElement("option", { value: "Medium" }, "Medium"),
                React.createElement("option", { value: "Thick" }, "Heavy")));
        };
        return (React.createElement("div", null,
            viscosityQuestion,
            "     ",
            viscositySelection()));
    };
    return Viscosity;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        viscosity: ApplicationState.blind.notes.eye.viscosity,
    };
}
var Export = connect(mapStateToProps, BlindStore.actionCreators)(Viscosity);
export default Export;
//# sourceMappingURL=Viscosity.js.map