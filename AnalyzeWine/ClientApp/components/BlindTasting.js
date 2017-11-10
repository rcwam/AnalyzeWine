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
///<reference path="../../node_modules/@types/react/index.d.ts"/>
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as BlindStore from '../store/Blind';
var helloWorld = "Hello World";
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
        _this.addAromaFruitFloral = _this.addAromaFruitFloral.bind(_this);
        _this.addAromaEarthMineral = _this.addAromaEarthMineral.bind(_this);
        _this.addAromaWoodSpice = _this.addAromaWoodSpice.bind(_this);
        _this.addAromaBiologicalChemical = _this.addAromaBiologicalChemical.bind(_this);
        _this.clearAroma = _this.clearAroma.bind(_this);
        // Taste Constructors
        _this.changeTasteIntensity = _this.changeTasteIntensity.bind(_this);
        _this.changeTasteComplexity = _this.changeTasteComplexity.bind(_this);
        _this.changeBody = _this.changeBody.bind(_this);
        _this.changeSweetness = _this.changeSweetness.bind(_this);
        _this.changeAcidity = _this.changeAcidity.bind(_this);
        _this.changeTannins = _this.changeTannins.bind(_this);
        _this.changeTasteAlcohol = _this.changeTasteAlcohol.bind(_this);
        _this.changeFinish = _this.changeFinish.bind(_this);
        _this.addFlavorFruitFloral = _this.addFlavorFruitFloral.bind(_this);
        _this.addFlavorEarthMineral = _this.addFlavorEarthMineral.bind(_this);
        _this.addFlavorWoodSpice = _this.addFlavorWoodSpice.bind(_this);
        _this.addFlavorBiologicalChemical = _this.addFlavorBiologicalChemical.bind(_this);
        _this.clearFlavor = _this.clearFlavor.bind(_this);
        // Conclusion Constructors
        _this.barrel = _this.barrel.bind(_this);
        return _this;
    }
    Blind.prototype.changeWineType = function (e) {
        this.props.setWineType(e.target.value);
        // Run Varietal
    };
    // Change Sight State
    Blind.prototype.changeColor = function (e) {
        this.props.setColor(e.target.value);
        this.age();
        //  this.forceUpdate();
        //  alert(this.props.conclusions.age.min);
    };
    Blind.prototype.changeDepth = function (e) {
        this.props.setDepth(e.target.value);
        // Run Varietal - Thick skin vs thin skin
    };
    Blind.prototype.changeClarity = function (e) {
        this.props.setClarity(e.target.value);
        // Run Quality
    };
    Blind.prototype.changeSediment = function (e) {
        this.props.setSediment(e.target.value);
        this.age();
    };
    Blind.prototype.changeViscosity = function (e) {
        this.props.setViscosity(e.target.value);
        // Run Climate - new world style is more viscous
        // Run Varietal
    };
    Blind.prototype.changeCarbonation = function (e) {
        this.props.setCarbonation(e.target.value);
        // determine carbonation style
    };
    // Change Smell State
    Blind.prototype.changeSmellIntensity = function (e) {
        this.props.setSmellIntensity(e.target.value);
        // Run Quality - indicates stressed vines
    };
    Blind.prototype.changeSmellComplexity = function (e) {
        this.props.setSmellComplexity(e.target.value);
        // Run Quality
        // possible malolactic fermentation
    };
    Blind.prototype.changeSmellAlcohol = function (e) {
        this.props.setSmellAlcohol(e.target.value);
        // Run Climate- new world style is more alcohol
        // Update Varietal with Climate
    };
    Blind.prototype.addAromaFruitFloral = function (e) {
        this.props.addAroma(e.target.value, "fruitFloral");
        this.barrel();
        // Run Age (young is fruit & floral (1-3 years))
        // Run Climate - New World is more FruitFloral
        // Update Varietal with Climate
        // Varietal - Aromas
    };
    Blind.prototype.addAromaEarthMineral = function (e) {
        this.props.addAroma(e.target.value, "earthMineral");
        this.barrel();
        // Run Age (as wine ages it loses FruitFloral and gains EarthMineral (3-5))
        // Run Climate - Old World more EarthMineral
        // Update Varietal with Climate
        // Varietal - Aromas
    };
    Blind.prototype.addAromaWoodSpice = function (e) {
        this.props.addAroma(e.target.value, "woodSpice");
        this.barrel();
        // Run Age (barrel aging is darker/browner (brown sugar & molasses) - Lower age estimate) - Update Barrel Container
        // Run Climate - New World uses more oak
        // Update Varietal with Climate
        // Varietal - Aromas
    };
    Blind.prototype.addAromaBiologicalChemical = function (e) {
        this.props.addAroma(e.target.value, "biologicalChemical");
        this.barrel();
        // Run Age (yeast indicates youth - aging wine gains non-fermentation BiologicalChemical strong after 5 years along with carmel)
        // Varietal - Aromas
    };
    Blind.prototype.clearAroma = function (aromaCategory) {
        this.props.clearAroma(aromaCategory);
    };
    // Change Taste State
    Blind.prototype.changeTasteIntensity = function (e) {
        this.props.setTasteIntensity(e.target.value);
        // Run Quality - indicates stressed vines
    };
    Blind.prototype.changeTasteComplexity = function (e) {
        this.props.setTasteComplexity(e.target.value);
        // Run Quality
        // possible malolactic fermentation
    };
    Blind.prototype.changeBody = function (e) {
        this.props.setBody(e.target.value);
        // Run Climate - new world style is more viscous
        // Run Quality - Balance
        // Run Varietal
    };
    Blind.prototype.changeSweetness = function (e) {
        this.props.setSweetness(e.target.value);
        // Run Age (sweeter is darker)
        // Run Quality - Balance
        // Run Varietal - Certain white wine grapes are used in sweet wines.
    };
    Blind.prototype.changeAcidity = function (e) {
        this.props.setAcidity(e.target.value);
        // Run Climate
        // Run Quality - Balance
        // Run Varietal
    };
    Blind.prototype.changeTannins = function (e) {
        this.props.setTannins(e.target.value);
        // Run Age (aggressive, astringent, harsh tannins are youthful, soft tannins are aged)
        // Run Quality - Balance
        // Run Varietal - Thick skin grapes produce more tannins
    };
    Blind.prototype.changeTasteAlcohol = function (e) {
        this.props.setTasteAlcohol(e.target.value);
        // Run Climate - new world style is more alcohol
        // Update Varietal with Climate
    };
    Blind.prototype.changeFinish = function (e) {
        this.props.setFinish(e.target.value);
        // Run Quality
    };
    Blind.prototype.addFlavorFruitFloral = function (e) {
        this.props.addFlavor(e.target.value, "fruitFloral");
        this.barrel();
        // Run Age
        // Run Climate - New World is more FruitFloral
        // Update Varietal with Climate
        // Varietal - Flavors
    };
    Blind.prototype.addFlavorEarthMineral = function (e) {
        this.props.addFlavor(e.target.value, "earthMineral");
        this.barrel();
        // Run Age
        // Run Climate - Old World is more EarthMineral
        // Update Varietal with Climate
        // Varietal - Flavors
    };
    Blind.prototype.addFlavorWoodSpice = function (e) {
        this.props.addFlavor(e.target.value, "woodSpice");
        this.barrel();
        // Run Age - Update Barrel
        // Run Climate - New World uses more Oak
        // Run Varietal - Certain white wine grapes are oak aged
        // Varietal - Flavors
    };
    Blind.prototype.addFlavorBiologicalChemical = function (e) {
        this.props.addFlavor(e.target.value, "biologicalChemical");
        this.barrel();
        // Run Age (yeast indicates youth - aging wine gains non-fermentation BiologicalChemical strong after 5 years along with carmel)
        // Varietal - Flavors
    };
    Blind.prototype.clearFlavor = function (flavorCategory) {
        this.props.clearFlavor(flavorCategory);
    };
    Blind.prototype.barrel = function () {
        var smellFruitFloral = this.props.notes.nose.smellProfile.fruitFloral;
        var smellEarthMineral = this.props.notes.nose.smellProfile.earthMineral;
        var smellWoodSpice = this.props.notes.nose.smellProfile.woodSpice;
        var smellBiologicalChemical = this.props.notes.nose.smellProfile.biologicalChemical;
        var smell;
        smell = [];
        smell = smell.concat(smellFruitFloral, smellEarthMineral, smellWoodSpice, smellBiologicalChemical);
        // Light toasting toastedBread, Nuts
        var lightToasting = 0;
        if (smell.indexOf("toast") > -1) {
            lightToasting++;
        }
        if (smell.indexOf("nuts") > -1) {
            lightToasting++;
        }
        // heavy toasting roasted coffee beans, dark chocolate
        var heavyToasting = 0;
        if (smell.indexOf("coffee") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("dark chocolate") > -1) {
            heavyToasting++;
        }
        // Oak Barrel
        var oakBarrel = 0;
        if (smell.indexOf("vanilla") > -1) {
            oakBarrel++;
        }
        // French Oak
        // elegantVanilla, cinnamon, cloves, nutmeg
        var frenchOak = 0;
        if (smell.indexOf("cinnamon") > -1) {
            frenchOak++;
        }
        if (smell.indexOf("cloves") > -1) {
            frenchOak++;
        }
        if (smell.indexOf("nutmeg") > -1) {
            frenchOak++;
        }
        // American Oak
        // aggressiveVanilla, toastedCoconut, dill
        var americanOak = 0;
        if (smell.indexOf("coconut") > -1) {
            americanOak++;
        }
        if (smell.indexOf("dill") > -1) {
            americanOak++;
        }
        //barrel
        // aging (none, possible, likely)
        // wood (oak, american oak, french oak)
        // roast (none, light, heavy)
        var ageing = "None";
        var wood = "None";
        var toast = "None";
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
        // Toast
        if (lightToasting + heavyToasting > 0) {
            toast = "Light";
            if (heavyToasting > 0) {
                toast = "Heavy";
            }
        }
        // Aging
        if (oakBarrel + frenchOak + americanOak + lightToasting + heavyToasting > 0) {
            ageing = "Possible";
            if (oakBarrel + frenchOak + americanOak + lightToasting + heavyToasting > 2) {
                ageing = "Likely";
            }
        }
        this.props.setBarrel(ageing, wood, toast);
    };
    Blind.prototype.age = function () {
        var minAge = 1;
        var maxAge = 3;
        if (this.props.notes.eye.sediment == ("Light" || "Heavy")) {
            minAge = 5;
            maxAge = 99;
            //  return;
        }
        else {
            switch (this.props.notes.eye.wineType) {
                // get initial guess based on color
                case "Red":
                    switch (this.props.notes.eye.color) {
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
                    switch (this.props.notes.eye.color) {
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
                    switch (this.props.notes.eye.color) {
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
        if (this.props.conclusions.barrel.toast == "Light") {
            minAge = minAge - 1;
            maxAge = maxAge - 1;
        }
        if (this.props.conclusions.barrel.toast == "Heavy") {
            minAge = minAge - 2;
            maxAge = maxAge - 2;
        }
        // Use aroma group to verify the final guess.
        var smellFruitFloraCount = this.props.notes.nose.smellProfile.fruitFloral.length;
        var smellEarthMineralCount = this.props.notes.nose.smellProfile.earthMineral.length;
        var smellBiologicalChemicalCount = this.props.notes.nose.smellProfile.biologicalChemical.length;
        // take into account the expected type of wine?
        if ((smellFruitFloraCount > smellEarthMineralCount) && (smellFruitFloraCount > smellBiologicalChemicalCount)) {
            minAge = Math.min(minAge, 3);
            if (this.props.notes.palate.tannins = "Harsh" || "Astringent" || "Aggressive") {
                maxAge = Math.max(maxAge, 5);
            }
        }
        if ((smellBiologicalChemicalCount > smellEarthMineralCount) && (smellBiologicalChemicalCount > smellFruitFloraCount)) {
            maxAge = Math.min(maxAge, 5);
        }
        // Expand Results
        // minAge--;
        // maxAge++;
        minAge = Math.max(0, minAge);
        maxAge = Math.max(1, maxAge);
        minAge = Math.min(99, minAge);
        maxAge = Math.min(99, maxAge);
        // run prop to update age numbers (min , max)
        //alert(smellFruitFloraCount+" "+smellEarthMineralCount+" "+smellBiologicalChemicalCount);
        // alert(minAge +" to " + maxAge);
        this.props.setAge(minAge, maxAge);
        // this.setState(this.props.conclusions.age.min);
        //   this.forceUpdate(() => this.props.conclusions.age);
    };
    Blind.prototype.updateAge = function () {
        this.setState(this.props.conclusions.age.min);
    };
    Blind.prototype.render = function () {
        //   this.componentDidMount()(this.updateAge());
        var _this = this;
        return React.createElement("div", null,
            React.createElement("h3", null, "Choose Type"),
            React.createElement("p", null,
                "What type of wine are you analyzing? ",
                this.selectTypeList(),
                " "),
            React.createElement("hr", null),
            React.createElement("h3", null, "Analyze by Sight"),
            React.createElement("p", null,
                "What color is the wine? ",
                this.pickColorList(this.props.notes.eye.wineType)),
            React.createElement("p", null,
                "How deep is the wine's color? ",
                this.selectDepth()),
            React.createElement("p", null,
                "How clear is the wine? ",
                this.selectClarity()),
            React.createElement("p", null,
                "Does the wine have sediment? ",
                this.selectSediment()),
            React.createElement("p", null,
                "How viscous is the wine (legs)? ",
                this.selectViscosity()),
            React.createElement("p", null,
                "Is the wine carbonated (bubble size, effervescence)? ",
                this.selectCarbonation()),
            React.createElement("hr", null),
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
            React.createElement("button", { className: "btn", type: "button", "data-toggle": "collapse", "data-target": "#collapseAromaProfile", "aria-expanded": "true", "aria-controls": "collapseAromaProfile" }, "Aroma Profile"),
            React.createElement("div", { className: "collapse", id: "collapseAromaProfile" },
                React.createElement("div", { className: "well" },
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Fruit & Floral"),
                        " : ",
                        React.createElement("b", null, this.props.notes.nose.smellProfile.fruitFloral.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearAroma("fruitFloral"); } }, "Clear")),
                    this.addCitrusSmell(),
                    this.addTreeFruitSmell(),
                    this.addBerriesSmell(),
                    this.addTropicalFruitSmell(),
                    this.addDriedFruitSmell(),
                    this.addArtificialSmell(),
                    this.addFloralSmell(),
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Earth & Mineral"),
                        " : ",
                        React.createElement("b", null, this.props.notes.nose.smellProfile.earthMineral.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearAroma("earthMineral"); } }, "Clear")),
                    this.addEarthSmell(),
                    this.addMineralSmell(),
                    this.addPlantMatterSmell(),
                    this.addHerbalSmell(),
                    this.addVegetableSmell(),
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Wood & Spice"),
                        " : ",
                        React.createElement("b", null, this.props.notes.nose.smellProfile.woodSpice.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearAroma("woodSpice"); } }, "Clear")),
                    this.addWoodSmell(),
                    this.addRoastedSmell(),
                    this.addSmokeySmell(),
                    this.addSpiceSmell(),
                    this.addOxidationSmell(),
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Biological & Chemical"),
                        " : ",
                        React.createElement("b", null, this.props.notes.nose.smellProfile.biologicalChemical.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearAroma("biologicalChemical"); } }, "Clear")),
                    this.addBiologicalSmell(),
                    this.addChemicalSmell())),
            React.createElement("hr", null),
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
            React.createElement("button", { className: "btn", type: "button", "data-toggle": "collapse", "data-target": "#collapseFlavorProfile", "aria-expanded": "true", "aria-controls": "collapseFlavorProfile" }, "Flavor Profile"),
            React.createElement("div", { className: "collapse", id: "collapseFlavorProfile" },
                React.createElement("div", { className: "well" },
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Fruit & Floral"),
                        " : ",
                        React.createElement("b", null, this.props.notes.palate.flavorProfile.fruitFloral.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearFlavor("fruitFloral"); } }, "Clear")),
                    this.addCitrusFlavor(),
                    this.addTreeFruitFlavor(),
                    this.addBerriesFlavor(),
                    this.addTropicalFruitFlavor(),
                    this.addDriedFruitFlavor(),
                    this.addArtificialFlavor(),
                    this.addFloralFlavor(),
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Earth & Mineral"),
                        " : ",
                        React.createElement("b", null, this.props.notes.palate.flavorProfile.earthMineral.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearFlavor("earthMineral"); } }, "Clear")),
                    this.addEarthFlavor(),
                    this.addMineralFlavor(),
                    this.addPlantMatterFlavor(),
                    this.addHerbalFlavor(),
                    this.addVegetableFlavor(),
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Wood & Spice"),
                        " : ",
                        React.createElement("b", null, this.props.notes.palate.flavorProfile.woodSpice.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearFlavor("woodSpice"); } }, "Clear")),
                    this.addWoodFlavor(),
                    this.addRoastedFlavor(),
                    this.addSmokeyFlavor(),
                    this.addSpiceFlavor(),
                    this.addOxidationFlavor(),
                    React.createElement("p", null),
                    React.createElement("p", null,
                        React.createElement("i", null, "Biological & Chemical"),
                        " : ",
                        React.createElement("b", null, this.props.notes.palate.flavorProfile.biologicalChemical.toString()),
                        React.createElement("button", { onClick: function () { return _this.clearFlavor("biologicalChemical"); } }, "Clear")),
                    this.addBiologicalFlavor(),
                    this.addChemicalFlavor())),
            React.createElement("hr", null),
            React.createElement(BotConclusions, { barrel: {
                    aging: this.props.conclusions.barrel.aging,
                    wood: this.props.conclusions.barrel.wood,
                    toast: this.props.conclusions.barrel.toast
                }, age: {
                    min: this.props.conclusions.age.min,
                    max: this.props.conclusions.age.max
                } }),
            React.createElement(UserName, null),
            React.createElement(FetchUser, { children: UserName }));
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
            React.createElement("option", { value: "Clear" }, "Greenish"),
            React.createElement("option", { value: "Greenish" }, "Greenish"),
            React.createElement("option", { value: "Yellow" }, "Yellow"),
            React.createElement("option", { value: "Straw" }, "Straw"),
            React.createElement("option", { value: "Golden" }, "Golden"),
            React.createElement("option", { value: "Amber" }, "Amber"),
            React.createElement("option", { value: "Brown" }, "Brown")));
    };
    Blind.prototype.roseColorList = function () {
        return (React.createElement("select", { value: this.props.notes.eye.color, onChange: this.changeColor },
            React.createElement("option", { value: "Pink" }, "Pink"),
            React.createElement("option", { value: "Salmon" }, "Salmon"),
            React.createElement("option", { value: "Orange" }, "Orange"),
            React.createElement("option", { value: "Copper" }, "Copper"),
            React.createElement("option", { value: "Brown" }, "Brown")));
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
            React.createElement("option", { value: "Dry" }, "Dry"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Sweet" }, "Sweet"),
            React.createElement("option", { value: "Dessert" }, "Dessert")));
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
            React.createElement("option", { value: "Refined" }, "Refined"),
            React.createElement("option", { value: "Soft" }, "Soft"),
            React.createElement("option", { value: "Low" }, "Low"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "High" }, "High"),
            React.createElement("option", { value: "Harsh" }, "Harsh"),
            React.createElement("option", { value: "Astringent" }, "Astringent"),
            React.createElement("option", { value: "Aggressive" }, "Aggressive")));
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
            React.createElement("option", { value: "Short" }, "Short (<3 sec)"),
            React.createElement("option", { value: "Medium" }, "Medium (4-5 sec)"),
            React.createElement("option", { value: "Long" }, "Long (5-7 sec)"),
            React.createElement("option", { value: "Very Long" }, "Very Long (>8 sec)")));
    };
    Blind.prototype.addCitrusSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaFruitFloral },
            React.createElement("option", { value: "Top" }, "Citrus"),
            React.createElement("option", { value: "Citrus" }, "CITRUS"),
            React.createElement("option", { value: "Grapefruit" }, "Grapefruit"),
            React.createElement("option", { value: "Lemon" }, "Lemon"),
            React.createElement("option", { value: "Lime" }, "Lime"),
            React.createElement("option", { value: "Orange" }, "Orange"),
            React.createElement("option", { value: "Tangerine" }, "Tangerine")));
    };
    Blind.prototype.addTreeFruitSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaFruitFloral },
            React.createElement("option", { value: "Top" }, "Tree Fruit"),
            React.createElement("option", { value: "Tree Fruit" }, "TREE FRUIT"),
            React.createElement("option", { value: "Apple" }, "Apple"),
            React.createElement("option", { value: "Apricot" }, "Apricot"),
            React.createElement("option", { value: "Cherry" }, "Cherry"),
            React.createElement("option", { value: "Nectarine" }, "Nectarine"),
            React.createElement("option", { value: "Peach" }, "Peach"),
            React.createElement("option", { value: "Pear" }, "Pear"),
            React.createElement("option", { value: "Persimmon" }, "Persimmon"),
            React.createElement("option", { value: "Plum" }, "Plum")));
    };
    Blind.prototype.addBerriesSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaFruitFloral },
            React.createElement("option", { value: "Top" }, "Berries"),
            React.createElement("option", { value: "Berries" }, "BERRIES"),
            React.createElement("option", { value: "Blackberry" }, "Blackberry"),
            React.createElement("option", { value: "Blueberry" }, "Blueberry"),
            React.createElement("option", { value: "Cranberry" }, "Cranberry"),
            React.createElement("option", { value: "Currant" }, "Currant"),
            React.createElement("option", { value: "Gooseberry" }, "Gooseberry"),
            React.createElement("option", { value: "Grape" }, "Grape"),
            React.createElement("option", { value: "Loganberry" }, "Loganberry"),
            React.createElement("option", { value: "Raspberry" }, "Raspberry"),
            React.createElement("option", { value: "Strawberry" }, "Strawberry")));
    };
    Blind.prototype.addTropicalFruitSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaFruitFloral },
            React.createElement("option", { value: "Top" }, "Tropical Fruit"),
            React.createElement("option", { value: "Tropical Fruit" }, "TROPICAL FRUIT"),
            React.createElement("option", { value: "Asian Pear" }, "Asian Pear"),
            React.createElement("option", { value: "Banana" }, "Banana"),
            React.createElement("option", { value: "Guava" }, "Guava"),
            React.createElement("option", { value: "Kiwi" }, "Kiwi"),
            React.createElement("option", { value: "Lychee" }, "Lychee"),
            React.createElement("option", { value: "Mango" }, "Mango"),
            React.createElement("option", { value: "Melon" }, "Melon"),
            React.createElement("option", { value: "Papaya" }, "Papaya"),
            React.createElement("option", { value: "Passionfruit" }, "Passionfruit"),
            React.createElement("option", { value: "Pineapple" }, "Pineapple"),
            React.createElement("option", { value: "Plantain" }, "Plantain"),
            React.createElement("option", { value: "Star Fruit" }, "Star Fruit")));
    };
    Blind.prototype.addDriedFruitSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaFruitFloral },
            React.createElement("option", { value: "Top" }, "Dried Fruit"),
            React.createElement("option", { value: "Dried Fruit" }, "DRIED FRUIT"),
            React.createElement("option", { value: "Date" }, "Date"),
            React.createElement("option", { value: "Fig" }, "Fig"),
            React.createElement("option", { value: "Golden Raisin" }, "Golden Raisin"),
            React.createElement("option", { value: "Jam & Jelly" }, "Jam & Jelly"),
            React.createElement("option", { value: "Prune" }, "Prune"),
            React.createElement("option", { value: "Raisin" }, "Raisin")));
    };
    Blind.prototype.addArtificialSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaFruitFloral },
            React.createElement("option", { value: "Top" }, "Artificial"),
            React.createElement("option", { value: "Artificial" }, "ARTIFICIAL"),
            React.createElement("option", { value: "Fruit Cocktail" }, "Fruit Cocktail"),
            React.createElement("option", { value: "Froot Loop" }, "Froot Loop"),
            React.createElement("option", { value: "Fruit Punch" }, "Fruit Punch"),
            React.createElement("option", { value: "Grape Soda" }, "Grape Soda"),
            React.createElement("option", { value: "Hard Candy" }, "Hard Candy"),
            React.createElement("option", { value: "Red Licorice" }, "Red Licorice")));
    };
    Blind.prototype.addFloralSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaFruitFloral },
            React.createElement("option", { value: "Top" }, "Floral"),
            React.createElement("option", { value: "Floral" }, "FLORAL"),
            React.createElement("option", { value: "Acadia" }, "Acadia"),
            React.createElement("option", { value: "Apple Blossom" }, "Apple Blossom"),
            React.createElement("option", { value: "Gardenia" }, "Gardenia"),
            React.createElement("option", { value: "Geranium" }, "Geranium "),
            React.createElement("option", { value: "Honeysuckle" }, "Honeysuckle"),
            React.createElement("option", { value: "Lavender" }, "Lavender"),
            React.createElement("option", { value: "Orange Blossom" }, "Orange Blossom"),
            React.createElement("option", { value: "Perfume" }, "Perfume"),
            React.createElement("option", { value: "Rose" }, "Rose"),
            React.createElement("option", { value: "Violet" }, "Violet")));
    };
    Blind.prototype.addEarthSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaEarthMineral },
            React.createElement("option", { value: "Top" }, "Earth"),
            React.createElement("option", { value: "Earth" }, "EARTH"),
            React.createElement("option", { value: "Clay" }, "Clay"),
            React.createElement("option", { value: "Dirt" }, "Dirt"),
            React.createElement("option", { value: "Dusty" }, "Dusty"),
            React.createElement("option", { value: "Leather" }, "Leather"),
            React.createElement("option", { value: "Gamey" }, "Gamey"),
            React.createElement("option", { value: "Moss" }, "Moss"),
            React.createElement("option", { value: "Mushroom" }, "Mushroom")));
    };
    Blind.prototype.addMineralSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaEarthMineral },
            React.createElement("option", { value: "Top" }, "Mineral"),
            React.createElement("option", { value: "Mineral" }, "MINERAL"),
            React.createElement("option", { value: "Chalk" }, "Chalk"),
            React.createElement("option", { value: "Concrete Drying" }, "Concrete Drying"),
            React.createElement("option", { value: "Drywall" }, "Drywall"),
            React.createElement("option", { value: "Flint" }, "Flint"),
            React.createElement("option", { value: "Metallic" }, "Metallic"),
            React.createElement("option", { value: "Petrichor" }, "Petrichor"),
            React.createElement("option", { value: "Sheetrock" }, "Sheetrock"),
            React.createElement("option", { value: "Slate" }, "Slate"),
            React.createElement("option", { value: "Vitamin Jar" }, "Vitamin Jar"),
            React.createElement("option", { value: "Wet Granite" }, "Wet Granite"),
            React.createElement("option", { value: "Wet Sand" }, "Wet Sand")));
    };
    Blind.prototype.addPlantMatterSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaEarthMineral },
            React.createElement("option", { value: "Top" }, "Plant Matter"),
            React.createElement("option", { value: "Plant Matter" }, "PLANT MATTER"),
            React.createElement("option", { value: "Alfalfa" }, "Alfalfa"),
            React.createElement("option", { value: "Cut Grass" }, "Cut Grass"),
            React.createElement("option", { value: "Hay" }, "Hay"),
            React.createElement("option", { value: "Pine Sap" }, "Pine Sap"),
            React.createElement("option", { value: "Resin" }, "Resin"),
            React.createElement("option", { value: "Steamy" }, "Steamy"),
            React.createElement("option", { value: "Straw" }, "Straw"),
            React.createElement("option", { value: "Tea Leaves" }, "Tea Leaves"),
            React.createElement("option", { value: "Tobacco" }, "Tobacco")));
    };
    Blind.prototype.addHerbalSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaEarthMineral },
            React.createElement("option", { value: "Top" }, "Herbal"),
            React.createElement("option", { value: "Herbal" }, "HERBAL"),
            React.createElement("option", { value: "Basil" }, "Basil"),
            React.createElement("option", { value: "Dill" }, "Dill"),
            React.createElement("option", { value: "Eucalyptus" }, "Eucalyptus"),
            React.createElement("option", { value: "Herbal Tea" }, "Herbal Tea"),
            React.createElement("option", { value: "Menthol" }, "Menthol"),
            React.createElement("option", { value: "Mint" }, "Mint"),
            React.createElement("option", { value: "Rosemary" }, "Rosemary"),
            React.createElement("option", { value: "Tarragon" }, "Tarragon")));
    };
    Blind.prototype.addVegetableSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaEarthMineral },
            React.createElement("option", { value: "Top" }, "Vegetable"),
            React.createElement("option", { value: "Vegetable" }, "VEGETABLE"),
            React.createElement("option", { value: "Artichoke" }, "Artichoke"),
            React.createElement("option", { value: "Asparagus" }, "Asparagus"),
            React.createElement("option", { value: "Black Olive" }, "Black Olive"),
            React.createElement("option", { value: "Fennel" }, "Fennel"),
            React.createElement("option", { value: "Green Bean" }, "Green Bean"),
            React.createElement("option", { value: "Green Olive" }, "Green Olive"),
            React.createElement("option", { value: "Pepper" }, "Pepper")));
    };
    Blind.prototype.addWoodSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaWoodSpice },
            React.createElement("option", { value: "Top" }, "Wood"),
            React.createElement("option", { value: "Wood" }, "WOOD"),
            React.createElement("option", { value: "Cedar" }, "Cedar"),
            React.createElement("option", { value: "Decomposing Log" }, "Decomposing Log"),
            React.createElement("option", { value: "Oak" }, "Oak"),
            React.createElement("option", { value: "Pencil Shavings" }, "Pencil Shavings"),
            React.createElement("option", { value: "Sawdust" }, "Sawdust"),
            React.createElement("option", { value: "Tree Bark" }, "Tree Bark")));
    };
    Blind.prototype.addRoastedSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaWoodSpice },
            React.createElement("option", { value: "Top" }, "Roasted"),
            React.createElement("option", { value: "Roasted" }, "ROASTED"),
            React.createElement("option", { value: "Burnt Toast" }, "Burnt Toast"),
            React.createElement("option", { value: "Chocolate" }, "Chocolate"),
            React.createElement("option", { value: "Cocoa Powder" }, "Cocoa Powder"),
            React.createElement("option", { value: "Coffee" }, "Coffee"),
            React.createElement("option", { value: "Biscuits" }, "Biscuits"),
            React.createElement("option", { value: "Mocha" }, "Mocha"),
            React.createElement("option", { value: "Roasted Nuts" }, "Roasted Nuts"),
            React.createElement("option", { value: "Toast" }, "Toast"),
            React.createElement("option", { value: "Toasted Coconut" }, "Toasted Coconut")));
    };
    Blind.prototype.addSmokeySmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaWoodSpice },
            React.createElement("option", { value: "Top" }, "Smokey"),
            React.createElement("option", { value: "Smokey" }, "SMOKEY"),
            React.createElement("option", { value: "Campfire" }, "Campfire"),
            React.createElement("option", { value: "Toasted Wood" }, "Toasted Wood"),
            React.createElement("option", { value: "Bacon" }, "Bacon"),
            React.createElement("option", { value: "Peat" }, "Peat")));
    };
    Blind.prototype.addSpiceSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaWoodSpice },
            React.createElement("option", { value: "Top" }, "Spice"),
            React.createElement("option", { value: "Spice" }, "SPICE"),
            React.createElement("option", { value: "Black Licorice" }, "Black Licorice"),
            React.createElement("option", { value: "Chinese Five Spice" }, "Chinese Five Spice"),
            React.createElement("option", { value: "Cinnamon" }, "Cinnamon"),
            React.createElement("option", { value: "Clove" }, "Clove"),
            React.createElement("option", { value: "Dill" }, "Dill"),
            React.createElement("option", { value: "Nutmeg" }, "Nutmeg"),
            React.createElement("option", { value: "Black Pepper" }, "Black Pepper"),
            React.createElement("option", { value: "Star Anise" }, "Star Anise"),
            React.createElement("option", { value: "Vanilla" }, "Vanilla")));
    };
    Blind.prototype.addOxidationSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaWoodSpice },
            React.createElement("option", { value: "Top" }, "Oxidation"),
            React.createElement("option", { value: "Oxidation" }, "OXIDATION"),
            React.createElement("option", { value: "Brown Sugar" }, "Brown Sugar"),
            React.createElement("option", { value: "Burnt Sugar" }, "Burnt Sugar"),
            React.createElement("option", { value: "Butterscotch" }, "Butterscotch"),
            React.createElement("option", { value: "Carmel" }, "Carmel"),
            React.createElement("option", { value: "Caramelized Sugar" }, "Caramelized Sugar"),
            React.createElement("option", { value: "Crem Brulee" }, "Crem Brulee"),
            React.createElement("option", { value: "Honey" }, "Honey"),
            React.createElement("option", { value: "Molasses" }, "Molasses"),
            React.createElement("option", { value: "Soy Sauce" }, "Soy Sauce")));
    };
    Blind.prototype.addBiologicalSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaBiologicalChemical },
            React.createElement("option", { value: "Top" }, "Biological"),
            React.createElement("option", { value: "Biological" }, "BIOLOGICAL"),
            React.createElement("option", { value: "Barnyard" }, "Barnyard"),
            React.createElement("option", { value: "Butter" }, "Butter"),
            React.createElement("option", { value: "Cat Urine" }, "Cat Urine"),
            React.createElement("option", { value: "Horse Stable" }, "Horse Stable"),
            React.createElement("option", { value: "Manure" }, "Manure"),
            React.createElement("option", { value: "Mildew" }, "Mildew"),
            React.createElement("option", { value: "Moldy" }, "Moldy"),
            React.createElement("option", { value: "Mousey" }, "Mousey"),
            React.createElement("option", { value: "Rotting Meat" }, "Rotting Meat"),
            React.createElement("option", { value: "Skunk" }, "Skunk"),
            React.createElement("option", { value: "Spoiled Fruit" }, "Spoiled Fruit"),
            React.createElement("option", { value: "Sweaty" }, "Sweaty"),
            React.createElement("option", { value: "Vinegar" }, "Vinegar"),
            React.createElement("option", { value: "Wet Basement" }, "Wet Basement"),
            React.createElement("option", { value: "Wet Dog" }, "Wet Dog"),
            React.createElement("option", { value: "Wet Wool" }, "Wet Wool"),
            React.createElement("option", { value: "Yeast" }, "Yeast")));
    };
    Blind.prototype.addChemicalSmell = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addAromaBiologicalChemical },
            React.createElement("option", { value: "Top" }, "Chemical"),
            React.createElement("option", { value: "Chemical" }, "CHEMICAL"),
            React.createElement("option", { value: "Acrid" }, "Acrid"),
            React.createElement("option", { value: "Ammonia" }, "Ammonia"),
            React.createElement("option", { value: "Asphault" }, "Asphault"),
            React.createElement("option", { value: "Cloth" }, "Cloth"),
            React.createElement("option", { value: "Disinfectant" }, "Disinfectant"),
            React.createElement("option", { value: "Gasoline" }, "Gasoline"),
            React.createElement("option", { value: "Hospital" }, "Hospital"),
            React.createElement("option", { value: "Kerosene" }, "Kerosene"),
            React.createElement("option", { value: "Band-aid" }, "Band-aid"),
            React.createElement("option", { value: "Medicine" }, "Medicine"),
            React.createElement("option", { value: "Mothballs" }, "Mothballs"),
            React.createElement("option", { value: "Nail Polish Remover" }, "Nail Polish Remover"),
            React.createElement("option", { value: "Plastic" }, "Plastic"),
            React.createElement("option", { value: "Rubber Cement" }, "Rubber Cement"),
            React.createElement("option", { value: "Rubbing Alcohol" }, "Rubbing Alcohol"),
            React.createElement("option", { value: "Shoe Polish" }, "Shoe Polish"),
            React.createElement("option", { value: "Soapy" }, "Soapy"),
            React.createElement("option", { value: "Sulphur" }, "Sulphur"),
            React.createElement("option", { value: "Wet Newspaper" }, "Wet Newspaper")));
    };
    Blind.prototype.addCitrusFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorFruitFloral },
            React.createElement("option", { value: "Top" }, "Citrus"),
            React.createElement("option", { value: "Citrus" }, "CITRUS"),
            React.createElement("option", { value: "Grapefruit" }, "Grapefruit"),
            React.createElement("option", { value: "Lemon" }, "Lemon"),
            React.createElement("option", { value: "Lime" }, "Lime"),
            React.createElement("option", { value: "Orange" }, "Orange"),
            React.createElement("option", { value: "Tangerine" }, "Tangerine")));
    };
    Blind.prototype.addTreeFruitFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorFruitFloral },
            React.createElement("option", { value: "Top" }, "Tree Fruit"),
            React.createElement("option", { value: "Tree Fruit" }, "TREE FRUIT"),
            React.createElement("option", { value: "Apple" }, "Apple"),
            React.createElement("option", { value: "Apricot" }, "Apricot"),
            React.createElement("option", { value: "Cherry" }, "Cherry"),
            React.createElement("option", { value: "Nectarine" }, "Nectarine"),
            React.createElement("option", { value: "Peach" }, "Peach"),
            React.createElement("option", { value: "Pear" }, "Pear"),
            React.createElement("option", { value: "Persimmon" }, "Persimmon"),
            React.createElement("option", { value: "Plum" }, "Plum")));
    };
    Blind.prototype.addBerriesFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorFruitFloral },
            React.createElement("option", { value: "Top" }, "Berries"),
            React.createElement("option", { value: "Berries" }, "BERRIES"),
            React.createElement("option", { value: "Blackberry" }, "Blackberry"),
            React.createElement("option", { value: "Blueberry" }, "Blueberry"),
            React.createElement("option", { value: "Cranberry" }, "Cranberry"),
            React.createElement("option", { value: "Currant" }, "Currant"),
            React.createElement("option", { value: "Gooseberry" }, "Gooseberry"),
            React.createElement("option", { value: "Grape" }, "Grape"),
            React.createElement("option", { value: "Loganberry" }, "Loganberry"),
            React.createElement("option", { value: "Raspberry" }, "Raspberry"),
            React.createElement("option", { value: "Strawberry" }, "Strawberry")));
    };
    Blind.prototype.addTropicalFruitFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorFruitFloral },
            React.createElement("option", { value: "Top" }, "Tropical Fruit"),
            React.createElement("option", { value: "Tropical Fruit" }, "TROPICAL FRUIT"),
            React.createElement("option", { value: "Asian Pear" }, "Asian Pear"),
            React.createElement("option", { value: "Banana" }, "Banana"),
            React.createElement("option", { value: "Guava" }, "Guava"),
            React.createElement("option", { value: "Kiwi" }, "Kiwi"),
            React.createElement("option", { value: "Lychee" }, "Lychee"),
            React.createElement("option", { value: "Mango" }, "Mango"),
            React.createElement("option", { value: "Melon" }, "Melon"),
            React.createElement("option", { value: "Papaya" }, "Papaya"),
            React.createElement("option", { value: "Passionfruit" }, "Passionfruit"),
            React.createElement("option", { value: "Pineapple" }, "Pineapple"),
            React.createElement("option", { value: "Plantain" }, "Plantain"),
            React.createElement("option", { value: "Star Fruit" }, "Star Fruit")));
    };
    Blind.prototype.addDriedFruitFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorFruitFloral },
            React.createElement("option", { value: "Top" }, "Dried Fruit"),
            React.createElement("option", { value: "Dried Fruit" }, "DRIED FRUIT"),
            React.createElement("option", { value: "Date" }, "Date"),
            React.createElement("option", { value: "Fig" }, "Fig"),
            React.createElement("option", { value: "Golden Raisin" }, "Golden Raisin"),
            React.createElement("option", { value: "Jam & Jelly" }, "Jam & Jelly"),
            React.createElement("option", { value: "Prune" }, "Prune"),
            React.createElement("option", { value: "Raisin" }, "Raisin")));
    };
    Blind.prototype.addArtificialFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorFruitFloral },
            React.createElement("option", { value: "Top" }, "Artificial"),
            React.createElement("option", { value: "Artificial" }, "ARTIFICIAL"),
            React.createElement("option", { value: "Fruit Cocktail" }, "Fruit Cocktail"),
            React.createElement("option", { value: "Froot Loop" }, "Froot Loop"),
            React.createElement("option", { value: "Fruit Punch" }, "Fruit Punch"),
            React.createElement("option", { value: "Grape Soda" }, "Grape Soda"),
            React.createElement("option", { value: "Hard Candy" }, "Hard Candy"),
            React.createElement("option", { value: "Red Licorice" }, "Red Licorice")));
    };
    Blind.prototype.addFloralFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorFruitFloral },
            React.createElement("option", { value: "Top" }, "Floral"),
            React.createElement("option", { value: "Floral" }, "FLORAL"),
            React.createElement("option", { value: "Acadia" }, "Acadia"),
            React.createElement("option", { value: "Apple Blossom" }, "Apple Blossom"),
            React.createElement("option", { value: "Gardenia" }, "Gardenia"),
            React.createElement("option", { value: "Geranium" }, "Geranium "),
            React.createElement("option", { value: "Honeysuckle" }, "Honeysuckle"),
            React.createElement("option", { value: "Lavender" }, "Lavender"),
            React.createElement("option", { value: "Orange Blossom" }, "Orange Blossom"),
            React.createElement("option", { value: "Perfume" }, "Perfume"),
            React.createElement("option", { value: "Rose" }, "Rose"),
            React.createElement("option", { value: "Violet" }, "Violet")));
    };
    Blind.prototype.addEarthFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorEarthMineral },
            React.createElement("option", { value: "Top" }, "Earth"),
            React.createElement("option", { value: "Earth" }, "EARTH"),
            React.createElement("option", { value: "Clay" }, "Clay"),
            React.createElement("option", { value: "Dirt" }, "Dirt"),
            React.createElement("option", { value: "Dusty" }, "Dusty"),
            React.createElement("option", { value: "Leather" }, "Leather"),
            React.createElement("option", { value: "Gamey" }, "Gamey"),
            React.createElement("option", { value: "Moss" }, "Moss"),
            React.createElement("option", { value: "Mushroom" }, "Mushroom")));
    };
    Blind.prototype.addMineralFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorEarthMineral },
            React.createElement("option", { value: "Top" }, "Mineral"),
            React.createElement("option", { value: "Mineral" }, "MINERAL"),
            React.createElement("option", { value: "Chalk" }, "Chalk"),
            React.createElement("option", { value: "Concrete Drying" }, "Concrete Drying"),
            React.createElement("option", { value: "Drywall" }, "Drywall"),
            React.createElement("option", { value: "Flint" }, "Flint"),
            React.createElement("option", { value: "Metallic" }, "Metallic"),
            React.createElement("option", { value: "Petrichor" }, "Petrichor"),
            React.createElement("option", { value: "Sheetrock" }, "Sheetrock"),
            React.createElement("option", { value: "Slate" }, "Slate"),
            React.createElement("option", { value: "Vitamin Jar" }, "Vitamin Jar"),
            React.createElement("option", { value: "Wet Granite" }, "Wet Granite"),
            React.createElement("option", { value: "Wet Sand" }, "Wet Sand")));
    };
    Blind.prototype.addPlantMatterFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorEarthMineral },
            React.createElement("option", { value: "Top" }, "Plant Matter"),
            React.createElement("option", { value: "Plant Matter" }, "PLANT MATTER"),
            React.createElement("option", { value: "Alfalfa" }, "Alfalfa"),
            React.createElement("option", { value: "Cut Grass" }, "Cut Grass"),
            React.createElement("option", { value: "Hay" }, "Hay"),
            React.createElement("option", { value: "Pine Sap" }, "Pine Sap"),
            React.createElement("option", { value: "Resin" }, "Resin"),
            React.createElement("option", { value: "Steamy" }, "Steamy"),
            React.createElement("option", { value: "Straw" }, "Straw"),
            React.createElement("option", { value: "Tea Leaves" }, "Tea Leaves"),
            React.createElement("option", { value: "Tobacco" }, "Tobacco")));
    };
    Blind.prototype.addHerbalFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorEarthMineral },
            React.createElement("option", { value: "Top" }, "Herbal"),
            React.createElement("option", { value: "Herbal" }, "HERBAL"),
            React.createElement("option", { value: "Basil" }, "Basil"),
            React.createElement("option", { value: "Dill" }, "Dill"),
            React.createElement("option", { value: "Eucalyptus" }, "Eucalyptus"),
            React.createElement("option", { value: "Herbal Tea" }, "Herbal Tea"),
            React.createElement("option", { value: "Menthol" }, "Menthol"),
            React.createElement("option", { value: "Mint" }, "Mint"),
            React.createElement("option", { value: "Rosemary" }, "Rosemary"),
            React.createElement("option", { value: "Tarragon" }, "Tarragon")));
    };
    Blind.prototype.addVegetableFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorEarthMineral },
            React.createElement("option", { value: "Top" }, "Vegetable"),
            React.createElement("option", { value: "Vegetable" }, "VEGETABLE"),
            React.createElement("option", { value: "Artichoke" }, "Artichoke"),
            React.createElement("option", { value: "Asparagus" }, "Asparagus"),
            React.createElement("option", { value: "Black Olive" }, "Black Olive"),
            React.createElement("option", { value: "Fennel" }, "Fennel"),
            React.createElement("option", { value: "Green Bean" }, "Green Bean"),
            React.createElement("option", { value: "Green Olive" }, "Green Olive"),
            React.createElement("option", { value: "Pepper" }, "Pepper")));
    };
    Blind.prototype.addWoodFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorWoodSpice },
            React.createElement("option", { value: "Top" }, "Wood"),
            React.createElement("option", { value: "Wood" }, "WOOD"),
            React.createElement("option", { value: "Cedar" }, "Cedar"),
            React.createElement("option", { value: "Decomposing Log" }, "Decomposing Log"),
            React.createElement("option", { value: "Oak" }, "Oak"),
            React.createElement("option", { value: "Pencil Shavings" }, "Pencil Shavings"),
            React.createElement("option", { value: "Sawdust" }, "Sawdust"),
            React.createElement("option", { value: "Tree Bark" }, "Tree Bark")));
    };
    Blind.prototype.addRoastedFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorWoodSpice },
            React.createElement("option", { value: "Top" }, "Roasted"),
            React.createElement("option", { value: "Roasted" }, "ROASTED"),
            React.createElement("option", { value: "Burnt Toast" }, "Burnt Toast"),
            React.createElement("option", { value: "Chocolate" }, "Chocolate"),
            React.createElement("option", { value: "Cocoa Powder" }, "Cocoa Powder"),
            React.createElement("option", { value: "Coffee" }, "Coffee"),
            React.createElement("option", { value: "Biscuits" }, "Biscuits"),
            React.createElement("option", { value: "Mocha" }, "Mocha"),
            React.createElement("option", { value: "Roasted Nuts" }, "Roasted Nuts"),
            React.createElement("option", { value: "Toast" }, "Toast"),
            React.createElement("option", { value: "Toasted Coconut" }, "Toasted Coconut")));
    };
    Blind.prototype.addSmokeyFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorWoodSpice },
            React.createElement("option", { value: "Top" }, "Smokey"),
            React.createElement("option", { value: "Smokey" }, "SMOKEY"),
            React.createElement("option", { value: "Campfire" }, "Campfire"),
            React.createElement("option", { value: "Toasted Wood" }, "Toasted Wood"),
            React.createElement("option", { value: "Bacon" }, "Bacon"),
            React.createElement("option", { value: "Peat" }, "Peat")));
    };
    Blind.prototype.addSpiceFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorWoodSpice },
            React.createElement("option", { value: "Top" }, "Spice"),
            React.createElement("option", { value: "Spice" }, "SPICE"),
            React.createElement("option", { value: "Black Licorice" }, "Black Licorice"),
            React.createElement("option", { value: "Chinese Five Spice" }, "Chinese Five Spice"),
            React.createElement("option", { value: "Cinnamon" }, "Cinnamon"),
            React.createElement("option", { value: "Clove" }, "Clove"),
            React.createElement("option", { value: "Dill" }, "Dill"),
            React.createElement("option", { value: "Nutmeg" }, "Nutmeg"),
            React.createElement("option", { value: "Black Pepper" }, "Black Pepper"),
            React.createElement("option", { value: "Star Anise" }, "Star Anise"),
            React.createElement("option", { value: "Vanilla" }, "Vanilla")));
    };
    Blind.prototype.addOxidationFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorWoodSpice },
            React.createElement("option", { value: "Top" }, "Oxidation"),
            React.createElement("option", { value: "Oxidation" }, "OXIDATION"),
            React.createElement("option", { value: "Brown Sugar" }, "Brown Sugar"),
            React.createElement("option", { value: "Burnt Sugar" }, "Burnt Sugar"),
            React.createElement("option", { value: "Butterscotch" }, "Butterscotch"),
            React.createElement("option", { value: "Carmel" }, "Carmel"),
            React.createElement("option", { value: "Caramelized Sugar" }, "Caramelized Sugar"),
            React.createElement("option", { value: "Crem Brulee" }, "Crem Brulee"),
            React.createElement("option", { value: "Honey" }, "Honey"),
            React.createElement("option", { value: "Molasses" }, "Molasses"),
            React.createElement("option", { value: "Soy Sauce" }, "Soy Sauce")));
    };
    Blind.prototype.addBiologicalFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorBiologicalChemical },
            React.createElement("option", { value: "Top" }, "Biological"),
            React.createElement("option", { value: "Biological" }, "BIOLOGICAL"),
            React.createElement("option", { value: "Barnyard" }, "Barnyard"),
            React.createElement("option", { value: "Butter" }, "Butter"),
            React.createElement("option", { value: "Cat Urine" }, "Cat Urine"),
            React.createElement("option", { value: "Horse Stable" }, "Horse Stable"),
            React.createElement("option", { value: "Manure" }, "Manure"),
            React.createElement("option", { value: "Mildew" }, "Mildew"),
            React.createElement("option", { value: "Moldy" }, "Moldy"),
            React.createElement("option", { value: "Mousey" }, "Mousey"),
            React.createElement("option", { value: "Rotting Meat" }, "Rotting Meat"),
            React.createElement("option", { value: "Skunk" }, "Skunk"),
            React.createElement("option", { value: "Spoiled Fruit" }, "Spoiled Fruit"),
            React.createElement("option", { value: "Sweaty" }, "Sweaty"),
            React.createElement("option", { value: "Vinegar" }, "Vinegar"),
            React.createElement("option", { value: "Wet Basement" }, "Wet Basement"),
            React.createElement("option", { value: "Wet Dog" }, "Wet Dog"),
            React.createElement("option", { value: "Wet Wool" }, "Wet Wool"),
            React.createElement("option", { value: "Yeast" }, "Yeast")));
    };
    Blind.prototype.addChemicalFlavor = function () {
        return (React.createElement("select", { value: "Top", onChange: this.addFlavorBiologicalChemical },
            React.createElement("option", { value: "Top" }, "Chemical"),
            React.createElement("option", { value: "Chemical" }, "CHEMICAL"),
            React.createElement("option", { value: "Acrid" }, "Acrid"),
            React.createElement("option", { value: "Ammonia" }, "Ammonia"),
            React.createElement("option", { value: "Asphault" }, "Asphault"),
            React.createElement("option", { value: "Cloth" }, "Cloth"),
            React.createElement("option", { value: "Disinfectant" }, "Disinfectant"),
            React.createElement("option", { value: "Gasoline" }, "Gasoline"),
            React.createElement("option", { value: "Hospital" }, "Hospital"),
            React.createElement("option", { value: "Kerosene" }, "Kerosene"),
            React.createElement("option", { value: "Band-aid" }, "Band-aid"),
            React.createElement("option", { value: "Medicine" }, "Medicine"),
            React.createElement("option", { value: "Mothballs" }, "Mothballs"),
            React.createElement("option", { value: "Nail Polish Remover" }, "Nail Polish Remover"),
            React.createElement("option", { value: "Plastic" }, "Plastic"),
            React.createElement("option", { value: "Rubber Cement" }, "Rubber Cement"),
            React.createElement("option", { value: "Rubbing Alcohol" }, "Rubbing Alcohol"),
            React.createElement("option", { value: "Shoe Polish" }, "Shoe Polish"),
            React.createElement("option", { value: "Soapy" }, "Soapy"),
            React.createElement("option", { value: "Sulphur" }, "Sulphur"),
            React.createElement("option", { value: "Wet Newspaper" }, "Wet Newspaper")));
    };
    return Blind;
}(Component));
var BotConclusions = (function (_super) {
    __extends(BotConclusions, _super);
    function BotConclusions(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            barrel: {
                wood: props.barrel.wood,
                toast: props.barrel.toast,
                aging: props.barrel.aging
            },
            age: {
                min: props.age.min,
                max: props.age.max,
            }
        };
        return _this;
    }
    /*
       componentWillMount(){}  // finishing touches such as external data
       componentDidMount(){}  // good place to update a database
    
       shouldComponentUpdate(){}
       componentWillUpdate(){}
       componentDidUpdate(){}
    
     */
    BotConclusions.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Summary"),
            React.createElement("p", null, "Som-Bot can give suggested conclusions based on your tasting notes:"),
            React.createElement("p", null,
                "Age: ",
                this.props.age.min,
                " to ",
                this.props.age.max),
            React.createElement("p", null,
                "Barrel Aging: ",
                this.props.barrel.aging),
            React.createElement("p", null,
                "Wood: ",
                this.props.barrel.wood),
            React.createElement("p", null,
                "Toast: ",
                this.props.barrel.toast),
            React.createElement("p", null, "Climate? "),
            React.createElement("p", null, "Balance (alcohol, acid, tannin, sugar)? "),
            React.createElement("p", null, "Origin List "),
            React.createElement("p", null, "Style? "),
            React.createElement("p", null, "Varietal List "),
            React.createElement("p", null, "Quality/Rating ")));
    };
    return BotConclusions;
}(Component));
var FetchUser = (function (_super) {
    __extends(FetchUser, _super);
    function FetchUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FetchUser.prototype.render = function () {
        return this.state
            ? this.props.children(this.state.result)
            : null;
    };
    return FetchUser;
}(React.Component));
function UserName() {
    return (React.createElement(FetchUser, null, function (user) { return (React.createElement("h1", null, user.Name)); }));
}
function Comp(p) {
    return React.createElement("div", null, p.b);
}
// OK
var k1 = React.createElement(Comp, { a: 10, b: "hi" },
    React.createElement("h2", null, "Hello"));
export default connect(function (state) { return state.blind; }, BlindStore.actionCreators)(Blind);
//# sourceMappingURL=BlindTasting.js.map