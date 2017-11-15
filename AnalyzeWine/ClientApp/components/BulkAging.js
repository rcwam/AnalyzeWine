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
var aging = "";
var wood = "";
var toast = "";
var BulkAging = (function (_super) {
    __extends(BulkAging, _super);
    function BulkAging() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   componentDidMount(){this.updateAge(fromAge,toAge)}
        _this.updateBulkAging = function (aging, wood, toast) {
            _this.props.setBulk(aging, wood, toast);
        };
        return _this;
    }
    BulkAging.prototype.render = function () {
        var smellProfile = this.props.smellProfile;
        var smell;
        smell = [];
        smell = smell.concat(smellProfile.fruitFloral, smellProfile.earthMineral, smellProfile.biologicalChemical, smellProfile.woodSpice);
        // Light toasting toastedBread, Nuts
        var lightToasting = 0;
        if (smell.indexOf("Burnt Toast") > -1) {
            lightToasting++;
        }
        if (smell.indexOf("Toast") > -1) {
            lightToasting++;
        }
        if (smell.indexOf("Roasted Nuts") > -1) {
            lightToasting++;
        }
        // alert(lightToasting);
        // heavy toasting roasted coffee beans, dark chocolate
        var heavyToasting = 0;
        if (smell.indexOf("Coffee") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Dark Chocolate") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Chocolate") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Smoke") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Charred Wood") > -1) {
            heavyToasting++;
        }
        // Oak Barrel
        var oakBarrel = 0;
        if (smell.indexOf("Vanilla") > -1) {
            oakBarrel++;
        }
        if (smell.indexOf("Cedar") > -1) {
            oakBarrel++;
        }
        if (smell.indexOf("Resin") > -1) {
            oakBarrel++;
        }
        if (smell.indexOf("Butterscotch") > -1) {
            oakBarrel++;
        }
        // French Oak
        // elegantVanilla, cinnamon, cloves, nutmeg
        var frenchOak = 0;
        if (smell.indexOf("Cinnamon") > -1) {
            frenchOak++;
        }
        if (smell.indexOf("Cloves") > -1) {
            frenchOak++;
        }
        if (smell.indexOf("Nutmeg") > -1) {
            frenchOak++;
        }
        // American Oak
        // aggressiveVanilla, toastedCoconut, dill
        var americanOak = 0;
        if (smell.indexOf("Coconut") > -1) {
            americanOak++;
        }
        if (smell.indexOf("Dill") > -1) {
            americanOak++;
        }
        var aging = "None";
        var wood = "None";
        var toast = "None";
        // Toast
        if (lightToasting + heavyToasting > 0) {
            wood = "Wood";
            toast = "Light";
            if (heavyToasting > 0) {
                toast = "Heavy";
            }
        }
        // Wood
        if (oakBarrel + frenchOak + americanOak > 0) {
            if (oakBarrel > 0) {
                wood = "Oak";
            }
            if (frenchOak > 0) {
                wood = "French Oak";
            }
            if (americanOak > 0) {
                wood = "American Oak";
            }
        }
        // Aging
        if (oakBarrel + frenchOak + americanOak + lightToasting + heavyToasting > 0) {
            aging = "Possible";
            if (oakBarrel + frenchOak + americanOak + lightToasting + heavyToasting > 2) {
                aging = "Likely";
            }
        }
        return (React.createElement("div", null,
            React.createElement("p", null, "Bulk Aging:"),
            " ",
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Barrel: ",
                    aging),
                React.createElement("li", null,
                    "Wood: ",
                    wood),
                React.createElement("li", null,
                    "Toast: ",
                    toast))));
    };
    BulkAging.prototype.componentWillReceiveProps = function (nextProps) {
        //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if ((this.props.smellProfile.fruitFloral != nextProps.smellProfile.fruitFloral) ||
            (this.props.smellProfile.earthMineral != nextProps.smellProfile.earthMineral) ||
            (this.props.smellProfile.biologicalChemical != nextProps.smellProfile.biologicalChemical) ||
            (this.props.smellProfile.woodSpice != nextProps.smellProfile.woodSpice)) {
            this.updateBulkAging(aging, wood, toast);
        }
    };
    return BulkAging;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        smellProfile: ApplicationState.blind.notes.nose.smellProfile,
    };
}
var BulkExport = connect(mapStateToProps, BlindStore.actionCreators)(BulkAging);
export default BulkExport;
//# sourceMappingURL=BulkAging.js.map