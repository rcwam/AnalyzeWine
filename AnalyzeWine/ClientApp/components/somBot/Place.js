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
var climate = "";
var country = [];
var region = [];
var appellation = [];
var Place = (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Place.prototype.render = function () {
        var _a = this.props, acidity = _a.acidity, body = _a.body, climateProfile = _a.climateProfile, smellAlcohol = _a.smellAlcohol, tasteAlcohol = _a.tasteAlcohol, viscosity = _a.viscosity;
        // POSITIVE is WARM, NEGATIVE is COOL
        var coolScore = 0;
        var intermediateScore = 0;
        var warmScore = 0;
        /**/
        // ACID
        switch (acidity) {
            case "High":
                coolScore = coolScore + 2;
                break;
            case "Medium":
                intermediateScore = intermediateScore + 2;
                break;
            case "Low":
                warmScore = warmScore + 2;
                break;
            case "None":
                warmScore = warmScore + 2;
                break;
            default:
                break;
        }
        //  alert("Acidity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);
        // ALCOHOL
        if (smellAlcohol == "High" || tasteAlcohol == "High") {
            warmScore = warmScore + 2;
        }
        else {
            if (smellAlcohol == "Medium" || tasteAlcohol == "Medium") {
                intermediateScore = intermediateScore + 2;
            }
            else {
                if (smellAlcohol == "Low" || tasteAlcohol == "Low") {
                    coolScore = coolScore + 2;
                }
                else {
                    coolScore = coolScore + 2;
                }
            }
        }
        //  alert("Alcohol = cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);
        // CLIMATE PROFILE
        coolScore = coolScore + climateProfile.cool;
        intermediateScore = intermediateScore + climateProfile.intermediate;
        warmScore = warmScore + climateProfile.warm;
        //   alert("Climate - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);
        // VISCOSITY
        if (body == "Thick" || viscosity == "Thick") {
            warmScore = warmScore + 3;
        }
        else {
            if (body == "Medium" || viscosity == "Medium") {
                intermediateScore = intermediateScore + 3;
            }
            else {
                if (body == "Thin" || viscosity == "Thin") {
                    coolScore = coolScore + 3;
                }
                else {
                    coolScore = coolScore + 3;
                }
            }
        }
        //   alert("Viscosity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);
        // <div><p>Place:</p> <ul><li>Climate: {climate}</li><li>Country: {country}</li><li>Region: {region}</li><li>Appellation: {appellation}</li></ul></div>
        // <div><p>Climate:</p> <ul><li>Cool: {coolScore}</li><li>Intermediate: {intermediateScore}</li><li>Warm: {warmScore}</li></ul></div>
        return (React.createElement("div", null,
            React.createElement("p", null, "Climate:"),
            " ",
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Cool: ",
                    coolScore),
                React.createElement("li", null,
                    "Intermediate: ",
                    intermediateScore),
                React.createElement("li", null,
                    "Warm: ",
                    warmScore))));
    };
    Place.prototype.componentWillReceiveProps = function (nextProps) {
        //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if (this.props.acidity != nextProps.acidity
            || this.props.body != nextProps.body
            || this.props.smellAlcoholl != nextProps.smellAlcohol
            || this.props.tasteAlcohol != nextProps.tasteAlcohol
            || this.props.viscosity != nextProps.viscosity
            || this.props.climateProfile.cool != nextProps.climateProfile.cool
            || this.props.climateProfile.intermediate != nextProps.climateProfile.intermediate
            || this.props.climateProfile.warm != nextProps.climateProfile.warm) {
            //     this.updatePlace(climate,country,region,appellation)
        }
    };
    return Place;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        acidity: ApplicationState.blind.notes.palate.acidity,
        body: ApplicationState.blind.notes.palate.body,
        smellAlcohol: ApplicationState.blind.notes.nose.smellAlcohol,
        //  sweetness: ApplicationState.blind.palate.sweetness,
        tasteAlcohol: ApplicationState.blind.notes.palate.tasteAlcohol,
        viscosity: ApplicationState.blind.notes.eye.viscosity,
        climateProfile: ApplicationState.blind.conclusions.SomBot.chemicals.climateProfile,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(Place);
//# sourceMappingURL=Place.js.map