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
import SmellAlcohol from './nose/SmellAlcohol';
import SmellComplexity from './nose/SmellComplexity';
import SmellIntensity from './nose/SmellIntensity';
var NoseAnalysis = (function (_super) {
    __extends(NoseAnalysis, _super);
    function NoseAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoseAnalysis.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Analyze by Smell"),
            React.createElement("p", null,
                "How intense is the aroma? ",
                React.createElement(SmellIntensity, null)),
            React.createElement("p", null,
                "How complex is the aroma? ",
                React.createElement(SmellComplexity, null)),
            React.createElement("p", null,
                "What can you tell about alcohol content? ",
                React.createElement(SmellAlcohol, null))));
    };
    return NoseAnalysis;
}(Component));
export default NoseAnalysis;
//# sourceMappingURL=NoseAnalysis.js.map