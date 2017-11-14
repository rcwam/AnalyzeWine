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
var fromAge = 0;
var toAge = 0;
var Age = (function (_super) {
    __extends(Age, _super);
    function Age() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   componentDidMount(){this.updateAge(fromAge,toAge)}
        _this.updateAge = function (fromAge, toAge) {
            _this.props.setAge(fromAge, toAge);
        };
        return _this;
    }
    Age.prototype.render = function () {
        /*
        const {wineType, color, sediment} = this.props.notes.eye;
        const {tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical} = this.props.notes.nose.smellProfile;
        */
        var minAge = 0;
        var maxAge = 0;
        if (this.props.sediment == ("Light" || "Heavy")) {
            minAge = 5;
            maxAge = 99;
        }
        else {
            // Initial guess based on color
            switch (this.props.wineType) {
                case "Red":
                    switch (this.props.color) {
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
                    switch (this.props.color) {
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
                    switch (this.props.color) {
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
        if (this.props.toast == "Light") {
            minAge = minAge - 1;
            maxAge = maxAge - 1;
        }
        if (this.props.toast == "Heavy") {
            minAge = minAge - 2;
            maxAge = maxAge - 2;
        }
        // Use aroma group to verify the final guess.
        var smellFruitFloraCount = this.props.smellProfile.fruitFloral.length;
        var smellEarthMineralCount = this.props.smellProfile.earthMineral.length;
        var smellBiologicalChemicalCount = this.props.smellProfile.biologicalChemical.length;
        // take into account the expected type of wine?
        if (smellFruitFloraCount > smellEarthMineralCount) {
            if (smellFruitFloraCount > smellBiologicalChemicalCount) {
                minAge = Math.min(minAge, 3); // three years or less
                if (this.props.tannins === "Harsh" || "Astringent" || "Aggressive") {
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
        fromAge = minAge;
        toAge = maxAge;
        //  this.updateAge(minAge,maxAge);
        //  alert("Ran Age");
        return (React.createElement("div", null,
            "Age: ",
            minAge,
            " to ",
            maxAge,
            " years"));
    };
    /*
       shouldComponentUpdate(nextProps:any){
           if(this.props.min != nextProps.min){
               alert("Should  Run ");
               this.updateAge(fromAge,toAge);
           }

           else {
               alert("Should Not Run");

           }

       }
      */
    Age.prototype.componentWillMount = function () {
        //       alert("Will Mount")
    };
    Age.prototype.componentDidMount = function () {
        //      alert("Did Mount")
    };
    Age.prototype.componentWillReceiveProps = function (nextProps) {
        //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if ((this.props.wineType != nextProps.wineType) ||
            (this.props.color != nextProps.color) ||
            (this.props.sediment != nextProps.sediment) ||
            (this.props.tannins != nextProps.tannins) ||
            (this.props.toast != nextProps.toast) ||
            (this.props.smellProfile.fruitFloral != nextProps.smellProfile.fruitFloral) ||
            (this.props.smellProfile.earthMineral != nextProps.smellProfile.earthMineral) ||
            (this.props.smellProfile.biologicalChemical != nextProps.smellProfile.biologicalChemical) ||
            (this.props.smellProfile.woodSpice != nextProps.smellProfile.woodSpice)) {
            this.updateAge(fromAge, toAge);
        }
    };
    //   shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any) {    }
    Age.prototype.componentWillUpdate = function () {
        //       alert("Will Update")
    };
    Age.prototype.componentDidUpdate = function () {
        //       alert("Did Update")
    };
    return Age;
}(Component));
/*
const AgeExport = connect((state: ApplicationState) =>(
    state.blind.notes.eye.wineType  &&
    state.blind.notes.eye.color &&
    state.blind.notes.eye.sediment &&
    state.blind.notes.palate.tannins &&
    state.blind.conclusions.SomBot.viniculture.bulkAging.barrel.toast &&
    state.blind.notes.nose.smellProfile
    ), BlindStore.actionCreators )(Age) as typeof Age;

 */
function mapStateToProps(ApplicationState) {
    return {
        wineType: ApplicationState.blind.notes.eye.wineType,
        color: ApplicationState.blind.notes.eye.color,
        sediment: ApplicationState.blind.notes.eye.sediment,
        tannins: ApplicationState.blind.notes.palate.tannins,
        toast: ApplicationState.blind.conclusions.SomBot.viniculture.bulkAging.barrel.toast,
        smellProfile: ApplicationState.blind.notes.nose.smellProfile,
    };
}
var AgeExport = connect(mapStateToProps, BlindStore.actionCreators)(Age);
export default AgeExport;
//# sourceMappingURL=Age.js.map