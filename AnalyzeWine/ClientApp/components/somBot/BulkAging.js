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
// USE CHEMICAL ANALYSIS DATA FOR OAK & TOAST
var BulkAging = (function (_super) {
    __extends(BulkAging, _super);
    function BulkAging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BulkAging.prototype.render = function () {
        var _a = this.props, wood = _a.wood, toast = _a.toast;
        return (React.createElement("div", null,
            React.createElement("p", null, "Bulk Aging:"),
            " ",
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Wood: ",
                    wood),
                React.createElement("li", null,
                    "Toast: ",
                    toast))));
    };
    return BulkAging;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        wood: ApplicationState.blind.conclusions.SomBot.viniculture.bulkAging.barrel.wood,
        toast: ApplicationState.blind.conclusions.SomBot.viniculture.bulkAging.barrel.toast,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(BulkAging);
//# sourceMappingURL=BulkAging.js.map