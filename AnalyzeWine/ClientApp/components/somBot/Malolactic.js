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
var malolactic = false;
var Malolactic = (function (_super) {
    __extends(Malolactic, _super);
    function Malolactic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updateMalolactic = function (malolactic) {
            _this.props.setMalolactic(malolactic);
        };
        return _this;
    }
    // Can make this a list-item when other Processes are done.
    Malolactic.prototype.render = function () {
        var _a = this.props, acidity = _a.acidity, body = _a.body, malolacticProfileClue = _a.malolacticProfileClue, viscosity = _a.viscosity;
        malolactic = (acidity != "High") && (body != "None" || body) && (viscosity != "None") && malolacticProfileClue;
        //  alert(malolactic);
        return (React.createElement("p", null,
            "Malolactic: ",
            String(malolactic)));
    };
    Malolactic.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.acidity != nextProps.acidity
            || this.props.body != nextProps.body
            || this.props.malolacticProfileClue != nextProps.malolacticProfileClue
            || this.props.viscosity != nextProps.viscosity) {
            //  alert(wood);
            this.updateMalolactic(malolactic);
        }
    };
    return Malolactic;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        malolacticProfileClue: ApplicationState.blind.conclusions.SomBot.chemicals.malolacticProfileClue,
        acidity: ApplicationState.blind.notes.palate.acidity,
        body: ApplicationState.blind.notes.palate.body,
        viscosity: ApplicationState.blind.notes.eye.viscosity,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(Malolactic);
//# sourceMappingURL=Malolactic.js.map