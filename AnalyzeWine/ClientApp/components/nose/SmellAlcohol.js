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
var SmellAlcohol = (function (_super) {
    __extends(SmellAlcohol, _super);
    function SmellAlcohol() {
        var _this = _super.call(this) || this;
        _this.changeSmellAlcohol = _this.changeSmellAlcohol.bind(_this);
        return _this;
    }
    SmellAlcohol.prototype.changeSmellAlcohol = function (e) {
        this.props.setSmellAlcohol(e.target.value);
    };
    SmellAlcohol.prototype.render = function () {
        var smellAlcohol = this.props.smellAlcohol;
        return (React.createElement("select", { value: smellAlcohol, onChange: this.changeSmellAlcohol },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    return SmellAlcohol;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        smellAlcohol: ApplicationState.blind.notes.nose.smellAlcohol,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(SmellAlcohol);
//# sourceMappingURL=SmellAlcohol.js.map