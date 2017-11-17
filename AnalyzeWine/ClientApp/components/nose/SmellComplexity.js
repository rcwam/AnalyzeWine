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
var SmellComplexity = (function (_super) {
    __extends(SmellComplexity, _super);
    function SmellComplexity() {
        var _this = _super.call(this) || this;
        _this.changeSmellComplexity = _this.changeSmellComplexity.bind(_this);
        return _this;
    }
    SmellComplexity.prototype.changeSmellComplexity = function (e) {
        this.props.setCSmellComplexity(e.target.value);
    };
    SmellComplexity.prototype.render = function () {
        var smellComplexity = this.props.smellComplexity;
        return (React.createElement("select", { value: smellComplexity, onChange: this.changeSmellComplexity },
            React.createElement("option", { value: "Simple" }, "Simple"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Complex" }, "Complex")));
    };
    return SmellComplexity;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        smellComplexity: ApplicationState.blind.notes.nose.smellComplexity,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(SmellComplexity);
//# sourceMappingURL=SmellComplexity.js.map