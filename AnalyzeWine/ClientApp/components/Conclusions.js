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
import Grape from './SomBot/Grape';
var BotConclusions = (function (_super) {
    __extends(BotConclusions, _super);
    function BotConclusions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BotConclusions.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Summary"),
            React.createElement("p", null, "Som-Bot can give suggested conclusions based on your tasting notes:"),
            React.createElement(Grape, null),
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