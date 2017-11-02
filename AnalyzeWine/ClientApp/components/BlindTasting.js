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
import { connect } from 'react-redux';
import * as BlindStore from '../store/Blind';
var Blind = (function (_super) {
    __extends(Blind, _super);
    function Blind() {
        var _this = _super.call(this) || this;
        _this.changeWineType = _this.changeWineType.bind(_this);
        // Sight Constructors
        _this.changeColor = _this.changeColor.bind(_this);
        _this.changeDepth = _this.changeDepth.bind(_this);
        _this.changeClarity = _this.changeClarity.bind(_this);
        _this.changeSediment = _this.changeSediment.bind(_this);
        _this.changeViscosity = _this.changeViscosity.bind(_this);
        _this.changeCarbonation = _this.changeCarbonation.bind(_this);
        // Smell Constructors
        _this.changeSmellIntensity = _this.changeSmellIntensity.bind(_this);
        _this.changeSmellComplexity = _this.changeSmellComplexity.bind(_this);
        _this.changeSmellAlcohol = _this.changeSmellAlcohol.bind(_this);
        // Taste Constructors
        _this.changeTasteIntensity = _this.changeTasteIntensity.bind(_this);
        _this.changeTasteComplexity = _this.changeTasteComplexity.bind(_this);
        _this.changeBody = _this.changeBody.bind(_this);
        _this.changeSweetness = _this.changeSweetness.bind(_this);
        _this.changeAcidity = _this.changeAcidity.bind(_this);
        _this.changeTannins = _this.changeTannins.bind(_this);
        _this.changeTasteAlcohol = _this.changeTasteAlcohol.bind(_this);
        _this.changeFinish = _this.changeFinish.bind(_this);
        return _this;
    }
    Blind.prototype.changeWineType = function (e) {
        this.props.setWineType(e.target.value);
    };
    // Change Sight State
    Blind.prototype.changeColor = function (e) {
        this.props.setColor(e.target.value);
    };
    Blind.prototype.changeDepth = function (e) {
        this.props.setDepth(e.target.value);
    };
    Blind.prototype.changeClarity = function (e) {
        this.props.setClarity(e.target.value);
    };
    Blind.prototype.changeSediment = function (e) {
        this.props.setSediment(e.target.value);
    };
    Blind.prototype.changeViscosity = function (e) {
        this.props.setViscosity(e.target.value);
    };
    Blind.prototype.changeCarbonation = function (e) {
        this.props.setCarbonation(e.target.value);
    };
    // Change Smell State
    Blind.prototype.changeSmellIntensity = function (e) {
        this.props.setSmellIntensity(e.target.value);
    };
    Blind.prototype.changeSmellComplexity = function (e) {
        this.props.setSmellComplexity(e.target.value);
    };
    Blind.prototype.changeSmellAlcohol = function (e) {
        this.props.setSmellAlcohol(e.target.value);
    };
    // Change Taste State
    Blind.prototype.changeTasteIntensity = function (e) {
        this.props.setTasteIntensity(e.target.value);
    };
    Blind.prototype.changeTasteComplexity = function (e) {
        this.props.setTasteComplexity(e.target.value);
    };
    Blind.prototype.changeBody = function (e) {
        this.props.setBody(e.target.value);
    };
    Blind.prototype.changeSweetness = function (e) {
        this.props.setSweetness(e.target.value);
    };
    Blind.prototype.changeAcidity = function (e) {
        this.props.setAcidity(e.target.value);
    };
    Blind.prototype.changeTannins = function (e) {
        this.props.setTannins(e.target.value);
    };
    Blind.prototype.changeTasteAlcohol = function (e) {
        this.props.setTasteAlcohol(e.target.value);
    };
    Blind.prototype.changeFinish = function (e) {
        this.props.setFinish(e.target.value);
    };
    Blind.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h3", null, "Choose Type"),
            React.createElement("p", null,
                "What type of wine are you analyzing? ",
                this.selectTypeList(),
                " "),
            React.createElement("h3", null, "Analyze by Sight"),
            React.createElement("p", null,
                "What color is the wine? ",
                this.pickColorList(this.props.notes.eye.wineType)),
            React.createElement("p", null,
                "How deep is the wine's color (rim)? ",
                this.selectDepth()),
            React.createElement("p", null,
                "How clear is the wine? ",
                this.selectClarity()),
            React.createElement("p", null,
                "Does the wine have sediment? ",
                this.selectSediment()),
            React.createElement("p", null,
                "How viscose is the wine (legs)? ",
                this.selectViscosity()),
            React.createElement("p", null,
                "Is the wine carbonated (bubble size, effervescence)? ",
                this.selectCarbonation()),
            React.createElement("h3", null, "Analyze by Smell"),
            React.createElement("p", null,
                "How intense is the aroma? ",
                this.selectSmellIntensity()),
            React.createElement("p", null,
                "How complex is the aroma? ",
                this.selectSmellComplexity()),
            React.createElement("p", null,
                "What can you tell about alcohol content? ",
                this.selectSmellAlcohol()),
            React.createElement("b", null, "Aroma Profile"),
            React.createElement("h3", null, "Analyze by Taste"),
            React.createElement("p", null,
                "Intensity? ",
                this.selectTasteIntensity()),
            React.createElement("p", null,
                "Complexity? ",
                this.selectTasteComplexity()),
            React.createElement("p", null,
                "Body (mouth feel)? ",
                this.selectBody()),
            React.createElement("p", null,
                "Sweetness? ",
                this.selectSweetness()),
            React.createElement("p", null,
                "Acidity? ",
                this.selectAcidity()),
            React.createElement("p", null,
                "Tannins? ",
                this.selectTannins()),
            React.createElement("p", null,
                "Alcohol? ",
                this.selectTasteAlcohol()),
            React.createElement("p", null,
                "Finish? ",
                this.selectFinish()),
            React.createElement("b", null, "Flavor Profile"),
            React.createElement("h3", null, "Summary"),
            React.createElement("p", null, "Age? "),
            React.createElement("p", null, "Climate? "),
            React.createElement("p", null, "Balance (alcohol, acid, tannin, sugar)? "),
            React.createElement("p", null, "Origin List "),
            React.createElement("p", null, "Style? "),
            React.createElement("p", null, "Varietal List "),
            React.createElement("p", null, "Quality/Rating "));
    };
    Blind.prototype.selectTypeList = function () {
        return (React.createElement("select", { name: "WineTypeSelector", value: this.props.notes.eye.wineType, onChange: this.changeWineType },
            React.createElement("option", { value: "Red" }, "Red"),
            React.createElement("option", { value: "White" }, "White"),
            React.createElement("option", { value: "Rose" }, "Rose")));
    };
    Blind.prototype.pickColorList = function (thisWineType) {
        switch (thisWineType) {
            case "Red":
                return this.redColorList();
            case "White":
                return this.whiteColorList();
            case "Rose":
                return this.roseColorList();
            default:
                return this.redColorList();
        }
    };
    // Sight Selections
    Blind.prototype.redColorList = function () {
        return (React.createElement("select", { value: this.props.notes.eye.color, onChange: this.changeColor },
            React.createElement("option", { value: "Purple" }, "Purple"),
            React.createElement("option", { value: "Ruby" }, "Ruby"),
            React.createElement("option", { value: "Red" }, "Red"),
            React.createElement("option", { value: "Garnet" }, "Garnet"),
            React.createElement("option", { value: "Brick" }, "Brick"),
            React.createElement("option", { value: "Brown" }, "Brown")));
    };
    Blind.prototype.whiteColorList = function () {
        return (React.createElement("select", { value: this.props.notes.eye.color, onChange: this.changeColor },
            React.createElement("option", { value: "Greenish" }, "Greenish"),
            React.createElement("option", { value: "Yellow" }, "Yellow"),
            React.createElement("option", { value: "Straw" }, "Straw"),
            React.createElement("option", { value: "Golden" }, "Golden"),
            React.createElement("option", { value: "Amber" }, "Amber")));
    };
    Blind.prototype.roseColorList = function () {
        return (React.createElement("select", { value: this.props.notes.eye.color, onChange: this.changeColor },
            React.createElement("option", { value: "Pink" }, "Pink"),
            React.createElement("option", { value: "Salmon" }, "Salmon"),
            React.createElement("option", { value: "Orange" }, "Orange"),
            React.createElement("option", { value: "Copper" }, "Copper")));
    };
    Blind.prototype.selectDepth = function () {
        return (React.createElement("select", { value: this.props.notes.eye.depth, onChange: this.changeDepth },
            React.createElement("option", { value: "Watery" }, "Watery"),
            React.createElement("option", { value: "Pale" }, "Pale"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Deep" }, "Deep"),
            React.createElement("option", { value: "Dark" }, "Dark")));
    };
    Blind.prototype.selectClarity = function () {
        return (React.createElement("select", { value: this.props.notes.eye.clarity, onChange: this.changeClarity },
            React.createElement("option", { value: "Clear" }, "Clear"),
            React.createElement("option", { value: "Hazy" }, "Hazy"),
            React.createElement("option", { value: "Cloudy" }, "Cloudy")));
    };
    Blind.prototype.selectSediment = function () {
        return (React.createElement("select", { value: this.props.notes.eye.sediment, onChange: this.changeSediment },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Light" }, "Light"),
            React.createElement("option", { value: "Heavy" }, "Heavy"),
            React.createElement("option", { value: "Tartrate" }, "Tartrate")));
    };
    Blind.prototype.selectViscosity = function () {
        return (React.createElement("select", { value: this.props.notes.eye.viscosity, onChange: this.changeViscosity },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Light" }, "Light"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Heavy" }, "Heavy")));
    };
    Blind.prototype.selectCarbonation = function () {
        return (React.createElement("select", { value: this.props.notes.eye.carbonation, onChange: this.changeCarbonation },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Small/Light" }, "Small/Light"),
            React.createElement("option", { value: "Small/Heavy" }, "Small/Heavy"),
            React.createElement("option", { value: "Large/Light" }, "Large/Light"),
            React.createElement("option", { value: "Large/Heavy" }, "Large/Heavy")));
    };
    // Smell Selections
    Blind.prototype.selectSmellIntensity = function () {
        return (React.createElement("select", { value: this.props.notes.nose.smellIntensity, onChange: this.changeSmellIntensity },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Weak" }, "Weak"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Strong" }, "Strong"),
            React.createElement("option", { value: "Powerful" }, "Powerful")));
    };
    Blind.prototype.selectSmellComplexity = function () {
        return (React.createElement("select", { value: this.props.notes.nose.smellComplexity, onChange: this.changeSmellComplexity },
            React.createElement("option", { value: "Simple" }, "Simple"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Complex" }, "Complex")));
    };
    Blind.prototype.selectSmellAlcohol = function () {
        return (React.createElement("select", { value: this.props.notes.nose.smellAlcohol, onChange: this.changeSmellAlcohol },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    // Taste Selections
    Blind.prototype.selectTasteIntensity = function () {
        return (React.createElement("select", { value: this.props.notes.palate.tasteIntensity, onChange: this.changeTasteIntensity },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    Blind.prototype.selectTasteComplexity = function () {
        return (React.createElement("select", { value: this.props.notes.palate.tasteComplexity, onChange: this.changeTasteComplexity },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    Blind.prototype.selectBody = function () {
        return (React.createElement("select", { value: this.props.notes.palate.body, onChange: this.changeBody },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    Blind.prototype.selectSweetness = function () {
        return (React.createElement("select", { value: this.props.notes.palate.sweetness, onChange: this.changeSweetness },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    Blind.prototype.selectAcidity = function () {
        return (React.createElement("select", { value: this.props.notes.palate.acidity, onChange: this.changeAcidity },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    Blind.prototype.selectTannins = function () {
        return (React.createElement("select", { value: this.props.notes.palate.tannins, onChange: this.changeTannins },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    Blind.prototype.selectTasteAlcohol = function () {
        return (React.createElement("select", { value: this.props.notes.palate.tasteAlcohol, onChange: this.changeTasteAlcohol },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    Blind.prototype.selectFinish = function () {
        return (React.createElement("select", { value: this.props.notes.palate.finish, onChange: this.changeFinish },
            React.createElement("option", { value: "None" }, "None"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High")));
    };
    return Blind;
}(React.Component));
export default connect(function (state) { return state.blind; }, BlindStore.actionCreators)(Blind);
//# sourceMappingURL=BlindTasting.js.map