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
import * as BlindStore from '../store/Blind';
var Age = (function (_super) {
    __extends(Age, _super);
    function Age() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Age.prototype.render = function () {
        var _a = this.props.notes.eye, wineType = _a.wineType, color = _a.color, sediment = _a.sediment;
        var tannins = this.props.notes.palate.tannins;
        var toast = this.props.conclusions.SomBot.viniculture.bulkAging.barrel.toast;
        var _b = this.props.notes.nose.smellProfile, fruitFloral = _b.fruitFloral, earthMineral = _b.earthMineral, biologicalChemical = _b.biologicalChemical;
        var minAge = 0;
        var maxAge = 0;
        if (sediment == ("Light" || "Heavy")) {
            minAge = 5;
            maxAge = 99;
        }
        else {
            // Initial guess based on color
            switch (wineType) {
                case "Red":
                    switch (color) {
                        case "Purple":
                            minAge = 0;
                            maxAge = 2;
                            break;
                        case "Ruby":
                            minAge = 1;
                            maxAge = 3;
                            break;
                        case "Red":
                            minAge = 2;
                            maxAge = 5;
                            break;
                        case "Garnet":
                            minAge = 4;
                            maxAge = 9;
                            break;
                        case "Brick":
                            minAge = 5;
                            maxAge = 99;
                            break;
                        case "Brown":
                            minAge = 99;
                            maxAge = 99;
                            break;
                    }
                    break;
                case "White":
                    switch (color) {
                        case "Clear" || "Greenish":
                            minAge = 0;
                            maxAge = 2;
                            break;
                        case "Yellow":
                            minAge = 2;
                            maxAge = 4;
                            break;
                        case "Golden":
                            minAge = 4;
                            maxAge = 7;
                            break;
                        case "Amber":
                            minAge = 5;
                            maxAge = 99;
                            break;
                        case "Brown":
                            minAge = 99;
                            maxAge = 99;
                            break;
                    }
                    break;
                case "Rose":
                    switch (color) {
                        case "Pink":
                            minAge = 0;
                            maxAge = 2;
                            break;
                        case "Salmon":
                            minAge = 2;
                            maxAge = 4;
                            break;
                        case "Orange":
                            minAge = 4;
                            maxAge = 7;
                            break;
                        case "Copper":
                            minAge = 5;
                            maxAge = 99;
                            break;
                        case "Brown":
                            minAge = 99;
                            maxAge = 99;
                            break;
                    }
                    break;
            }
        }
        // Make adjustments based on Barrel Aging
        if (toast == "Light") {
            minAge = minAge - 1;
            maxAge = maxAge - 1;
        }
        if (toast == "Heavy") {
            minAge = minAge - 2;
            maxAge = maxAge - 2;
        }
        // Use aroma group to verify the final guess.
        var smellFruitFloraCount = fruitFloral.length;
        var smellEarthMineralCount = earthMineral.length;
        var smellBiologicalChemicalCount = biologicalChemical.length;
        // take into account the expected type of wine?
        if (smellFruitFloraCount > smellEarthMineralCount) {
            if (smellFruitFloraCount > smellBiologicalChemicalCount) {
                minAge = Math.min(minAge, 3); // three years or less
                if (tannins === "Harsh" || "Astringent" || "Aggressive") {
                    maxAge = Math.min(maxAge, 5); // five years or less
                }
            }
        }
        if (smellBiologicalChemicalCount > smellEarthMineralCount) {
            if (smellBiologicalChemicalCount > smellFruitFloraCount) {
                minAge = Math.max(minAge, 5); // at least five years
            }
        }
        // Expand Results
        // minAge--;
        // maxAge++;
        minAge = Math.max(0, minAge); // minAge is positive
        maxAge = Math.max(minAge + 1, maxAge); // maxAge is at least one year longer than minAge
        minAge = Math.min(99, minAge);
        maxAge = Math.min(99, maxAge);
        return (React.createElement("div", null,
            "Age: ",
            minAge,
            " to ",
            maxAge,
            " years"));
    };
    return Age;
}(Component));
export default connect(function (state) { return state.blind; }, BlindStore.actionCreators)(Age);
//# sourceMappingURL=Age.js.map