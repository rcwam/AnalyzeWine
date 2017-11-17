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
// BULK AGING
var wood = "None";
var toast = "None";
var esters = false;
var oak = false;
var oakFrench = false;
var oakAmerican = false;
var toasted = false;
var ChemicalAnalysis = (function (_super) {
    __extends(ChemicalAnalysis, _super);
    function ChemicalAnalysis(props) {
        var _this = _super.call(this, props) || this;
        _this.updateBulkAging = function (wood, toast) {
            _this.props.setBulk(wood, toast);
        };
        _this.state = {
            // BULK AGING
            //   oak: false,
            //   oakFrench: false,
            //   oakAmerican: false,
            //    toasted: false,
            // METHODS
            malolactic: false,
            lees: false,
            botrytis: false,
            oxidation: false,
            // CHEMICALS
            brettanomyces: false,
            geosmin: false,
            rotundone: false,
            lactones: false,
            thiolsHeavy: false,
            volatileAcidity: false,
            sulphur: false,
            thiolsLight: false,
            terpenes: false,
            pyrazines: false,
            //          esters: false,
            // FAULTS
            brettanomycesFault: false,
            cork: false,
            butyricAcid: false,
            ethylAcetate: false,
            hydrogenSulfide: false,
            iodine: false,
            lacticAcidBacteria: false,
            mercaptans: false,
            oxidationFault: false,
            sorbicAcid: false,
            sulfurDioxide: false,
        };
        return _this;
    }
    ChemicalAnalysis.prototype.render = function () {
        var _a = this.props, smellProfile = _a.smellProfile, flavorProfile = _a.flavorProfile;
        var _b = this.props, oak = _b.oak, oakFrench = _b.oakFrench, oakAmerican = _b.oakAmerican, toasted = _b.toasted, malolactic = _b.malolactic, lees = _b.lees, botrytis = _b.botrytis, oxidation = _b.oxidation, brettanomyces = _b.brettanomyces, geosmin = _b.geosmin, rotundone = _b.rotundone, lactones = _b.lactones, thiolsHeavy = _b.thiolsHeavy, volatileAcidity = _b.volatileAcidity, sulphur = _b.sulphur, thiolsLight = _b.thiolsLight, terpenes = _b.terpenes, pyrazines = _b.pyrazines, brettanomycesFault = _b.brettanomycesFault, cork = _b.cork, butyricAcid = _b.butyricAcid, ethylAcetate = _b.ethylAcetate, hydrogenSulfide = _b.hydrogenSulfide, iodine = _b.iodine, lacticAcidBacteria = _b.lacticAcidBacteria, mercaptans = _b.mercaptans, oxidationFault = _b.oxidationFault, sorbicAcid = _b.sorbicAcid, sulfurDioxide = _b.sulfurDioxide;
        //  let{wood,toast}=this.props;
        var smell = [].concat(smellProfile.fruitFloral, smellProfile.earthMineral, smellProfile.biologicalChemical, smellProfile.woodSpice);
        var flavor = [].concat(flavorProfile.fruitFloral, flavorProfile.earthMineral, flavorProfile.biologicalChemical, flavorProfile.woodSpice);
        var chemical = smell.concat(flavor).filter(function (val, id, array) {
            return array.indexOf(val) == id;
        });
        // CATEGORIES
        /*
        let fruitFloralList: string[] = [].concat(smellProfile.fruitFloral, flavorProfile.flavorProfile);
        let earthMineralList: string[] = [].concat(smellProfile.earthMineral, flavorProfile.earthMineral);
        let biologicalChemicalList: string[] = [].concat(smellProfile.biologicalChemical, flavorProfile.biologicalChemical);
        let woodSpiceList: string[] = [].concat(smellProfile.woodSpice, flavorProfile.woodSpice);
        let fruitFloralCount: number = fruitFloralList.length;
        let earthMineralCount: number = earthMineralList.length;
        let biologicalChemicalCount: number = biologicalChemicalList.length;
        let woodSpiceCount: number = woodSpiceList.length;
        */
        /*
        // BULK AGING
        let oak: boolean = false;
        let oakFrench: boolean = false;
        let oakAmerican: boolean = false;
        let toast: boolean = false;

        // METHODS
        let malolactic: boolean = false;
        let lees: boolean = false;
        let botrytis: boolean = false;
        let oxidation: boolean = false;

        // CHEMICALS
        let brettanomyces: boolean = false;
        let geosmin: boolean = false;
        let rotundone: boolean = false;
        let lactones: boolean = false;
        let thiolsHeavy: boolean = false;
        let volatileAcidity: boolean = false;
        let sulphur: boolean = false;
        let thiolsLight: boolean = false;
        let terpenes: boolean = false;
        let pyrazines: boolean = false;
        let esters: boolean = false;

        // FAULTS
        let brettanomycesFault: boolean = false;
        let corkFault: boolean = false;
        let butyricAcid: boolean = false;
        let ethylAcetate: boolean = false;
        let hydrogenSulfide: boolean = false;
        let iodine: boolean = false;
        let lacticAcidBacteria: boolean = false;
        let mercaptans: boolean = false;
        let oxidationFault: boolean = false;
        let sorbicAcid: boolean = false;
        let sulfurDioxide: boolean = false;
        */
        chemical.forEach(function (chem) {
            //  alert(chem + " of " + chemical);
            // BULK AGING
            oak = ['Vanilla', 'Cedar', 'Toast', 'Resin'].indexOf(chem) != -1 || oak;
            oakFrench = ['Nutmeg', 'Cloves'].indexOf(chem) != -1 || oakFrench;
            oakAmerican = ['Coconut', 'Dill', 'Coffee', 'Toasted Coconut', 'Roasted'].indexOf(chem) != -1 || oakAmerican;
            // alert("1) "+ chem + " " + String(oakAmerican));
            toasted = ['Charred Wood', 'Smoke', 'Smokey', 'Campfire'].indexOf(chem) != -1 || toasted;
            // METHODS
            malolactic = ['Butter', 'Cream', 'Butterscotch'].indexOf(chem) != -1;
            lees = ['Biscuit', 'Bread', 'Toast', 'Pantry', 'Bread Dough', 'Cheese', 'Yogurt'].indexOf(chem) != -1;
            botrytis = ['Honey', 'Ginger'].indexOf(chem) != -1;
            oxidation = ['Almond', 'Marzipan', 'Coconut', 'Hazelnut', 'Walnut', 'Chocolate', 'Coffee', 'Toffee', 'Caramel'].indexOf(chem) != -1;
            // CHEMICALS
            brettanomyces = ['Cloves', 'Bacon', 'Band-Aid', 'Horse', 'Sesame Seeds', 'Cannabis'].indexOf(chem) != -1;
            geosmin = ['Mushroom', 'Beet', 'Soil', 'Petrichor'].indexOf(chem) != -1;
            rotundone = ['Peppercorn', 'Basil', 'Rosemary', 'Thyme', 'Oregano', 'Marjoram'].indexOf(chem) != -1;
            lactones = ['Honey Wheat Bread', 'Peach', 'Coconut', 'Roasted Hazelnut', 'Butter', 'Vanilla', 'Caramel'].indexOf(chem) != -1;
            thiolsLight = ['Grapefruit', 'Gooseberry', 'Passion Fruit', 'Black Current'].indexOf(chem) != -1;
            thiolsHeavy = ['Smoke', 'Skunk', 'Tar', 'Chocolate', 'Coffee'].indexOf(chem) != -1;
            volatileAcidity = ['Pickles', 'Balsamic', 'Sauerkraut', 'Kombucha'].indexOf(chem) != -1;
            sulphur = ['Chalk', 'Flint', 'Metallic', 'Wet Wood'].indexOf(chem) != -1;
            terpenes = ['Pine Tree', 'Sage', 'Lychee', 'Rose', 'Lavender', 'Eucalyptus', 'Orange Blossom'].indexOf(chem) != -1;
            pyrazines = ['Bell Pepper', 'Grass', 'Dark Chocolate', 'Elderflower', 'Peas'].indexOf(chem) != -1;
            esters = ['White Flowers', 'Apple', 'Banana', 'Strawberry', 'Raspberry'].indexOf(chem) != -1;
            // FAULTS
            brettanomycesFault = ['Barnyard', 'Fecal', 'Horse'].indexOf(chem) != -1;
            cork = ['Damp Basement', 'Wet Cardboard', 'Newspaper', 'Mushroom'].indexOf(chem) != -1;
            butyricAcid = ['Rancid Butter'].indexOf(chem) != -1;
            ethylAcetate = ['Vinegar', 'Paint Thinner', 'Nail Polish Remover'].indexOf(chem) != -1;
            hydrogenSulfide = ['Rotten Eggs', 'Garlic', 'Tar', 'Chocolate', 'Coffee'].indexOf(chem) != -1;
            iodine = ['Moldy Grapes'].indexOf(chem) != -1;
            lacticAcidBacteria = ['Sauerkraut'].indexOf(chem) != -1;
            mercaptans = ['Burnt Garlic', 'Onion'].indexOf(chem) != -1;
            oxidationFault = ['Cooked Fruit', 'Walnuts'].indexOf(chem) != -1;
            sorbicAcid = false;
            sulfurDioxide = ['Burnt Matches'].indexOf(chem) != -1;
        });
        // if(oak){wood="Oak"}
        // if(oakFrench){wood="French Oak"; oak=true}
        //   alert("2) " + " " + String(oakAmerican));
        if (oakAmerican) {
            wood = "American Oak";
        }
        else {
            if (oakFrench) {
                wood = "French Oak";
            }
            else {
                if (oak) {
                    wood = "Oak";
                    //     alert("Got to Oak")
                }
                else {
                    wood = "None";
                }
            }
        }
        if (toasted) {
            toast = "Toast";
        }
        return (React.createElement("div", null,
            React.createElement("h3", null, "Chemical Analysis:"),
            React.createElement("p", null, "Bulk Aging"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Lees: ",
                    String(lees)),
                React.createElement("li", null,
                    "Oak: ",
                    String(oak)),
                React.createElement("li", null,
                    "French Oak: ",
                    String(oakFrench)),
                React.createElement("li", null,
                    "American Oak: ",
                    String(oakAmerican)),
                React.createElement("li", null,
                    "Toasted Barrel: ",
                    String(toasted)),
                React.createElement("li", null,
                    "Wood: ",
                    wood),
                React.createElement("li", null,
                    "Toast: ",
                    toast)),
            React.createElement("p", null, "Processing"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Malolactic: ",
                    String(malolactic)),
                React.createElement("li", null,
                    "Lees: ",
                    String(lees)),
                React.createElement("li", null,
                    "Botrytis: ",
                    String(botrytis)),
                React.createElement("li", null,
                    "Oxidation: ",
                    String(oxidation))),
            React.createElement("p", null, "Chemicals"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Esters: ",
                    String(esters)),
                React.createElement("li", null,
                    "Brettanomyces: ",
                    String(brettanomyces)),
                React.createElement("li", null,
                    "Geosmin: ",
                    String(geosmin)),
                React.createElement("li", null,
                    "Rotundone: ",
                    String(rotundone)),
                React.createElement("li", null,
                    "Lactones: ",
                    String(lactones)),
                React.createElement("li", null,
                    "Thiols (Light): ",
                    String(thiolsLight)),
                React.createElement("li", null,
                    "Thiols (Heavy): ",
                    String(thiolsHeavy)),
                React.createElement("li", null,
                    "Volatile Acidity: ",
                    String(volatileAcidity)),
                React.createElement("li", null,
                    "Sulphur: ",
                    String(sulphur)),
                React.createElement("li", null,
                    "Terpenes: ",
                    String(terpenes)),
                React.createElement("li", null,
                    "Pyrazines: ",
                    String(pyrazines))),
            React.createElement("p", null, "Faults"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Brettanomyces: ",
                    String(brettanomycesFault)),
                React.createElement("li", null,
                    "Cork: ",
                    String(cork)),
                React.createElement("li", null,
                    "Butyric: ",
                    String(butyricAcid)),
                React.createElement("li", null,
                    "Ethyl Acetate: ",
                    String(ethylAcetate)),
                React.createElement("li", null,
                    "Hydrogen Sulfide: ",
                    String(hydrogenSulfide)),
                React.createElement("li", null,
                    "Iodine: ",
                    String(iodine)),
                React.createElement("li", null,
                    "Lactic Acid Bacteria: ",
                    String(lacticAcidBacteria)),
                React.createElement("li", null,
                    "Merceptans: ",
                    String(mercaptans)),
                React.createElement("li", null,
                    "Oxidation: ",
                    String(oxidationFault)),
                React.createElement("li", null,
                    "Sorbic Acid: ",
                    String(sorbicAcid)),
                React.createElement("li", null,
                    "Sulfur Dioxide: ",
                    String(sulfurDioxide)))));
    };
    ChemicalAnalysis.prototype.componentWillReceiveProps = function (nextProps) {
        if ((this.props.smellProfile.fruitFloral != nextProps.smellProfile.fruitFloral) ||
            (this.props.smellProfile.earthMineral != nextProps.smellProfile.earthMineral) ||
            (this.props.smellProfile.biologicalChemical != nextProps.smellProfile.biologicalChemical) ||
            (this.props.smellProfile.woodSpice != nextProps.smellProfile.woodSpice) ||
            (this.props.flavorProfile.fruitFloral != nextProps.flavorProfile.fruitFloral) ||
            (this.props.flavorProfile.earthMineral != nextProps.flavorProfile.earthMineral) ||
            (this.props.flavorProfile.biologicalChemical != nextProps.flavorProfile.biologicalChemical) ||
            (this.props.flavorProfile.woodSpice != nextProps.flavorProfile.woodSpice)) {
            //  alert(wood);
            this.updateBulkAging(wood, toast);
        }
    };
    return ChemicalAnalysis;
}(Component));
function mapStateToProps(ApplicationState) {
    return {
        smellProfile: ApplicationState.blind.notes.nose.smellProfile,
        flavorProfile: ApplicationState.blind.notes.palate.flavorProfile,
    };
}
export default connect(mapStateToProps, BlindStore.actionCreators)(ChemicalAnalysis);
//# sourceMappingURL=ChemicalAnalysis.js.map