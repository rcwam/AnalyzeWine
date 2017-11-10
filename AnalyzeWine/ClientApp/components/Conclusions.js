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
var BotConclusions = (function (_super) {
    __extends(BotConclusions, _super);
    function BotConclusions(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            barrel: {
                wood: props.barrel.wood,
                toast: props.barrel.toast,
                aging: props.barrel.aging
            },
            age: {
                min: props.age.min,
                max: props.age.max,
            }
        };
        return _this;
    }
    BotConclusions.prototype.render = function () {
        var _a = this.props.barrel, wood = _a.wood, toast = _a.toast, aging = _a.aging;
        var _b = this.props.age, min = _b.min, max = _b.max;
        return (React.createElement("div", null,
            React.createElement("h3", null, "Summary"),
            React.createElement("p", null, "Som-Bot can give suggested conclusions based on your tasting notes:"),
            React.createElement("p", null,
                "Age: ",
                min,
                " to ",
                max),
            React.createElement("p", null,
                "Barrel Aging: ",
                aging),
            React.createElement("p", null,
                "Wood: ",
                wood),
            React.createElement("p", null,
                "Toast: ",
                toast),
            React.createElement("p", null, "Climate? "),
            React.createElement("p", null, "Balance (alcohol, acid, tannin, sugar)? "),
            React.createElement("p", null, "Origin List "),
            React.createElement("p", null, "Style? "),
            React.createElement("p", null, "Varietal List "),
            React.createElement("p", null, "Quality/Rating ")));
    };
    return BotConclusions;
}(Component));
export default BotConclusions;
//# sourceMappingURL=Conclusions.js.map