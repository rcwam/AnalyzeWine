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
var SmellIntensity = (function (_super) {
    __extends(SmellIntensity, _super);
    function SmellIntensity() {
        var _this = _super.call(this) || this;
        _this.changeSmellIntensity = _this.changeSmellIntensity.bind(_this);
        return _this;
    }
    SmellIntensity.prototype.changeSmellIntensity = function (e) {
        this.props.setSmellIntensity(e.target.value);
    };
    SmellIntensity.prototype.render = function () {
        var smellIntensity = this.props.smellIntensity;
        return (React.createElement("select", { value: smellIntensity, onChange: this.changeSmellIntensity },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Weak" }, "Weak"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Strong" }, "Strong"),
            React.createElement("option", { value: "Powerful" }, "Powerful")));
    };
    return SmellIntensity;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        smellIntensity: ApplicationState.blind.notes.nose.smellIntensity,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(SmellIntensity);
//# sourceMappingURL=SmellIntensity.js.map