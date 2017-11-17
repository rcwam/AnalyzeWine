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
import Color from './eye/Color';
import Depth from './eye/Depth';
import Clarity from './eye/Clarity';
import Sediment from './eye/Sediment';
import Viscosity from './eye/Viscosity';
import Carbonation from './eye/Carbonation';
var EyeAnalysis = (function (_super) {
    __extends(EyeAnalysis, _super);
    function EyeAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EyeAnalysis.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Analyze by Eye"),
            React.createElement("p", null,
                React.createElement(Color, null)),
            React.createElement("p", null,
                React.createElement(Depth, null)),
            React.createElement("p", null,
                "How clear is the wine?   ",
                React.createElement(Clarity, null)),
            React.createElement("p", null,
                React.createElement(Sediment, null)),
            React.createElement("p", null,
                React.createElement(Viscosity, null)),
            React.createElement("p", null,
                "Is the wine carbonated (bubble size, effervescence)?    ",
                React.createElement(Carbonation, null))));
    };
    return EyeAnalysis;
}(Component));
export default EyeAnalysis;
//# sourceMappingURL=EyeAnalysis.js.map