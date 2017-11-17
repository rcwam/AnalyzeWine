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
var Sediment = (function (_super) {
    __extends(Sediment, _super);
    function Sediment() {
        var _this = _super.call(this) || this;
        _this.changeSediment = _this.changeSediment.bind(_this);
        return _this;
    }
    Sediment.prototype.changeSediment = function (e) {
        this.props.setSediment(e.target.value);
    };
    Sediment.prototype.render = function () {
        var _this = this;
        var sediment = this.props.sediment;
        var sedimentQuestion = "Is there any sediment in the glass?";
        var sedimentSelection = function () {
            return (React.createElement("select", { value: sediment, onChange: _this.changeSediment },
                React.createElement("option", { value: "None" }, "None"),
                React.createElement("option", { value: "Light" }, "Light"),
                React.createElement("option", { value: "Heavy" }, "Heavy"),
                React.createElement("option", { value: "Tartrate" }, "Tartrate")));
        };
        return (React.createElement("div", null,
            sedimentQuestion,
            "     ",
            sedimentSelection()));
    };
    return Sediment;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        sediment: ApplicationState.blind.notes.eye.sediment,
    };
}
var Export = connect(mapStateToProps, BlindStore.actionCreators)(Sediment);
export default Export;
//# sourceMappingURL=Sediment.js.map