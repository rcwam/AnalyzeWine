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
import CabernetSauvignon from '../Grapes/CabernetSauvignon';
import Merlot from '../Grapes/Merlot';
import Chardonnay from '../Grapes/Chardonnay';
import Syrah from '../Grapes/Syrah';
import SauvignonBlanc from '../Grapes/SauvignonBlanc';
import PinotNoir from '../Grapes/PinotNoir';
import Riesling from '../Grapes/Riesling';
import PinotGris from '../Grapes/PinotGris';
var viscosityBody = "";
var country = [];
var region = [];
var appellation = [];
var grapeList = [
    { score: 1, grape: CabernetSauvignon },
    { score: 1, grape: Merlot },
    { score: 1, grape: Chardonnay },
    { score: 1, grape: Syrah },
    { score: 1, grape: SauvignonBlanc },
    { score: 1, grape: PinotNoir },
    { score: 1, grape: Riesling },
    { score: 1, grape: PinotGris },
];
var climate = {
    cold: false,
    cool: false,
    medium: false,
    warm: false,
    hot: false,
};
var Grape = (function (_super) {
    __extends(Grape, _super);
    function Grape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grape.prototype.render = function () {
        var _a = this.props, acidity = _a.acidity, body = _a.body, smellAlcohol = _a.smellAlcohol, tasteAlcohol = _a.tasteAlcohol, viscosity = _a.viscosity, wineType = _a.wineType, depth = _a.depth, tannins = _a.tannins;
        grapeList = [
            { score: 1, grape: CabernetSauvignon },
            { score: 1, grape: Merlot },
            { score: 1, grape: Chardonnay },
            { score: 1, grape: Syrah },
            { score: 1, grape: SauvignonBlanc },
            { score: 1, grape: PinotNoir },
            { score: 1, grape: Riesling },
            { score: 1, grape: PinotGris },
        ];
        climate = {
            cold: false,
            cool: false,
            medium: false,
            warm: false,
            hot: false,
        };
        /*
               let test = grapeList.filter(function (list) {
                  return list.grape.varietal=="Chardonnay";
               });
               alert("Start : Grape = "+test[0].grape.varietal);
              */
        // TYPE
        switch (wineType) {
            case "Red":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.wineType == 'Red';
                });
                break;
            case "White":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.wineType == 'White';
                });
                break;
            case "Rose":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.wineType == 'Rose';
                });
                break;
            default:
                break;
        }
        /*
        test = grapeList.filter(function (list) {
            return list.grape.varietal=="Chardonnay";
        });
        let testBool = test!=name;
        alert("Type : Chardonnay = "+String(testBool));
        */
        // SKIN
        switch (depth) {
            case "Watery":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.skin != null) {
                        return grape.grape.skin.veryThin == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "Pale":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.skin != null) {
                        return grape.grape.skin.thin == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.skin != null) {
                        return grape.grape.skin.medium == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "Deep":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.skin != null) {
                        return grape.grape.skin.thick == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "Dark":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.skin != null) {
                        return grape.grape.skin.veryThick == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
        }
        /*
        test = grapeList.filter(function (list) {
            return list.grape.varietal=="Chardonnay";
        });
        testBool = test!=name;
        alert("Skin : Chardonnay = "+String(testBool));
        */
        // ACIDITY
        switch (acidity) {
            case "Very High":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.acidity.veryHigh == true;
                });
                break;
            case "High":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.acidity.high == true;
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.acidity.medium == true;
                });
                break;
            case "Low":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.acidity.low == true;
                });
                break;
            case "None":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.acidity.none == true;
                });
                break;
        }
        /*
        test = grapeList.filter(function (list) {
            return list.grape.varietal=="Chardonnay";
        });
        testBool = test!=name;
        alert("Acid : Chardonnay = "+String(testBool));
        */
        // VISCOSITY
        if (body == "Thick" || viscosity == "Thick") {
            viscosityBody = "Thick";
            climate.hot = true;
            climate.warm = true;
        }
        else {
            if (body == "Medium" || viscosity == "Medium") {
                viscosityBody = "Medium";
                climate.medium = true;
            }
            else {
                viscosityBody = "Thin";
                climate.cool = true;
                climate.cold = true;
            }
        }
        switch (viscosityBody) {
            case "Thick":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.viscosity.high == true;
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.viscosity.medium == true;
                });
                break;
            case "Thin":
                grapeList = grapeList.filter(function (grape) {
                    return grape.grape.viscosity.low == true;
                });
                break;
        }
        // TANNINS (Should correlate with Skin Thickness)
        switch (tannins) {
            case "Very High":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.tannins != null) {
                        return grape.grape.tannins.veryHigh == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "High":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.tannins != null) {
                        return grape.grape.tannins.high == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.tannins != null) {
                        return grape.grape.tannins.medium == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "Low":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.tannins != null) {
                        return grape.grape.tannins.low == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "Very Low":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.tannins != null) {
                        return grape.grape.tannins.veryLow == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
            case "None":
                grapeList = grapeList.filter(function (grape) {
                    if (grape.grape.tannins != null) {
                        return grape.grape.tannins.none == true;
                    }
                    else {
                        return grapeList;
                    }
                });
                break;
        }
        // CLIMATE [ ACID , ALCOHOL , VISCOSITY ]
        //  alert("Acidity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);
        // ALCOHOL
        if (smellAlcohol == "High" || tasteAlcohol == "High") {
            climate.hot = true;
            climate.warm = true;
        }
        else {
            if (smellAlcohol == "Medium" || tasteAlcohol == "Medium") {
                climate.medium = true;
            }
            else {
                climate.cool = true;
                climate.cold = true;
            }
        }
        /*

        if(!climate.cold){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.cold==false;
        })}
        if(!climate.cool){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.cool==false;
        })}
        if(!climate.medium){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.medium==false;
        })}
        if(!climate.warm){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.warm==false;
        })}
        if(!climate.hot){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.hot==false;
        })}

        */
        //   alert("Climate - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);
        //   alert("Viscosity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);
        // <div><p>Place:</p> <ul><li>Climate: {climate}</li><li>Country: {country}</li><li>Region: {region}</li><li>Appellation: {appellation}</li></ul></div>
        // <div><p>Climate:</p> <ul><li>Cool: {coolScore}</li><li>Intermediate: {intermediateScore}</li><li>Warm: {warmScore}</li></ul></div>
        return (React.createElement("div", null,
            React.createElement("p", null, "Varietal:"),
            " ",
            React.createElement("ul", null, grapeList.map(function (grape) {
                return React.createElement("li", null, grape.grape.varietal);
            }))));
    };
    Grape.prototype.componentWillReceiveProps = function (nextProps) {
        //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if (this.props.acidity != nextProps.acidity
            || this.props.body != nextProps.body
            || this.props.smellAlcoholl != nextProps.smellAlcohol
            || this.props.tasteAlcohol != nextProps.tasteAlcohol
            || this.props.viscosity != nextProps.viscosity
            || this.props.climateProfile.cool != nextProps.climateProfile.cool
            || this.props.climateProfile.intermediate != nextProps.climateProfile.intermediate
            || this.props.climateProfile.warm != nextProps.climateProfile.warm
            || this.props.wineType != nextProps.wineType) {
            //     this.updatePlace(climate,country,region,appellation)
        }
    };
    return Grape;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        wineType: ApplicationState.blind.notes.eye.wineType,
        depth: ApplicationState.blind.notes.eye.depth,
        acidity: ApplicationState.blind.notes.palate.acidity,
        body: ApplicationState.blind.notes.palate.body,
        smellAlcohol: ApplicationState.blind.notes.nose.smellAlcohol,
        //  sweetness: ApplicationState.blind.palate.sweetness,
        tasteAlcohol: ApplicationState.blind.notes.palate.tasteAlcohol,
        viscosity: ApplicationState.blind.notes.eye.viscosity,
        tannins: ApplicationState.blind.notes.palate.tannins,
        climateProfile: ApplicationState.blind.conclusions.SomBot.chemicals.climateProfile,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(Grape);
//# sourceMappingURL=Grape.js.map