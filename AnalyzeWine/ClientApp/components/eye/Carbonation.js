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
var Carbonation = (function (_super) {
    __extends(Carbonation, _super);
    function Carbonation() {
        var _this = _super.call(this) || this;
        _this.changeCarbonation = _this.changeCarbonation.bind(_this);
        return _this;
    }
    Carbonation.prototype.changeCarbonation = function (e) {
        this.props.changeCarbonation(e.target.value);
    };
    Carbonation.prototype.render = function () {
        var carbonation = this.props.carbonation;
        return (React.createElement("select", { value: carbonation, onChange: this.changeCarbonation },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Small/Light" }, "Small/Light"),
            React.createElement("option", { value: "Small/Heavy" }, "Small/Heavy"),
            React.createElement("option", { value: "Large/Light" }, "Large/Light"),
            React.createElement("option", { value: "Large/Heavy" }, "Large/Heavy")));
    };
    return Carbonation;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        carbonation: ApplicationState.blind.notes.eye.carbonation,
    };
}
var Export = connect(mapStateToProps, BlindStore.actionCreators)(Carbonation);
export default Export;
//# sourceMappingURL=Carbonation.js.map