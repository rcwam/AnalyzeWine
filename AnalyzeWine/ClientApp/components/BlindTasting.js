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
import { connect } from 'react-redux';
import * as BlindStore from '../store/Blind';
var Blind = (function (_super) {
    __extends(Blind, _super);
    function Blind() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blind.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", null,
                "Current count: ",
                React.createElement("strong", null, this.props.notes.eye.wineType)),
            React.createElement("button", { onClick: function () { _this.props.setWineType("Rose"); } }, "Increment"));
    };
    return Blind;
}(React.Component));
// Wire up the React component to the Redux store
export default connect(function (state) { return state.blind; }, // Selects which state properties are merged into the component's props
BlindStore.actionCreators // Selects which action creators are merged into the component's props
)(Blind);
//# sourceMappingURL=BlindTasting.js.map