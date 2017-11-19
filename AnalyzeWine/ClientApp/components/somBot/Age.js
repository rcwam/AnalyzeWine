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
var fromAge = 0;
var toAge = 0;
var Age = (function (_super) {
    __extends(Age, _super);
    function Age() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updateAge = function (fromAge, toAge) {
            _this.props.setAge(fromAge, toAge);
        };
        return _this;
    }
    Age.prototype.render = function () {
        var _a = this.props, wineType = _a.wineType, color = _a.color, sediment = _a.sediment, sweetness = _a.sweetness, tannins = _a.tannins, toast = _a.toast, agingProfile = _a.agingProfile;
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
                            maxAge = 199;
                            break;
                        case "Brown":
                            minAge = 199;
                            maxAge = 199;
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
                            maxAge = 199;
                            break;
                        case "Brown":
                            minAge = 199;
                            maxAge = 199;
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
                            maxAge = 199;
                            break;
                        case "Brown":
                            minAge = 199;
                            maxAge = 199;
                            break;
                    }
                    break;
            }
        }
        // Make adjustments based on Barrel Aging
        if (toast == true) {
            minAge = minAge - 1;
            maxAge = maxAge - 1;
        }
        //   if (toast == "Heavy") {
        //       minAge = minAge - 2;
        //       maxAge = maxAge - 2;
        //   }
        // Use aroma group to verify the final guess.
        var smellFruitFloraCount = agingProfile.youthfulProfile;
        var smellEarthMineralCount = agingProfile.middleAgedProfile;
        var smellBiologicalChemicalCount = agingProfile.oldAgedProfile;
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
        if (sweetness == "Dessert") {
            minAge = minAge - 2;
            //  maxAge=maxAge-1;
        }
        // Expand Results
        // minAge--;
        // maxAge++;
        minAge = Math.max(0, minAge); // minAge is positive
        maxAge = Math.max(minAge + 1, maxAge); // maxAge is at least one year longer than minAge
        minAge = Math.min(99, minAge);
        maxAge = Math.min(99, maxAge);
        fromAge = minAge;
        toAge = maxAge;
        // alert(minAge +" to "+maxAge);
        return (React.createElement("div", null,
            "Age: ",
            minAge,
            " to ",
            maxAge,
            " years"));
    };
    Age.prototype.componentWillReceiveProps = function (nextProps) {
        //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if ((this.props.wineType != nextProps.wineType) ||
            (this.props.color != nextProps.color) ||
            (this.props.sediment != nextProps.sediment) ||
            this.props.sweetness - nextProps.sweetness ||
            (this.props.tannins != nextProps.tannins) ||
            (this.props.toast != nextProps.toast)
            || this.props.agingProfile.youthfulProfile != nextProps.youthfulProfile
            || this.props.agingProfile.middleAgedProfile != nextProps.middleAgedProfile
            || this.props.agingProfile.oldAgedProfile != nextProps.oldAgedProfile) {
            this.updateAge(fromAge, toAge);
        }
    };
    return Age;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        wineType: ApplicationState.blind.notes.eye.wineType,
        color: ApplicationState.blind.notes.eye.color,
        sediment: ApplicationState.blind.notes.eye.sediment,
        sweetness: ApplicationState.blind.notes.palate.sweetness,
        tannins: ApplicationState.blind.notes.palate.tannins,
        toast: ApplicationState.blind.conclusions.SomBot.viniculture.bulkAging.barrel.toast,
        agingProfile: ApplicationState.blind.conclusions.SomBot.chemicals.agingProfile,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(Age);
//# sourceMappingURL=Age.js.map