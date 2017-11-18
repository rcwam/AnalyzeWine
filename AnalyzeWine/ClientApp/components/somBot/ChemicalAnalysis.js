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
// AGING PROFILE
var youthfulProfile = 0;
var middleAgedProfile = 0;
var oldAgedProfile = 0;
// BULK AGING
var oak = false;
var oakFrench = false;
var oakAmerican = false;
var toasted = false;
// METHODS
var malolacticProfileClue = false;
var lees = false;
var botrytisProfileClue = false;
var oxidation = false;
// CHEMICALS
var esters = false;
var brettanomyces = false;
var geosmin = false;
var rotundone = false;
var lactones = false;
var thiolsHeavy = false;
var volatileAcidity = false;
var sulphur = false;
var thiolsLight = false;
var terpenes = false;
var pyrazines = false;
// FAULTS
var acetaldehyde = false;
var aceticAcid = false;
var brettanomycesFault = false;
var corkTaint = false;
var dimethylSulfide = false;
var butyricAcid = false;
var ethylAcetate = false;
var hydrogenSulfide = false;
var iodine = false;
var lacticAcidBacteria = false; // too much malolactic
var mercaptans = false;
var oxidationFault = false;
var sorbicAcid = false;
var sulfurDioxide = false;
var wood = "None";
var toast = "None";
var ChemicalAnalysis = (function (_super) {
    __extends(ChemicalAnalysis, _super);
    function ChemicalAnalysis() {
        /*
        constructor(props: any) {
            super(props);
            this.state = {
                // BULK AGING
                //   oak: false,
                //   oakFrench: false,
                //   oakAmerican: false,
                //    toasted: false,
    
                // METHODS
                malolactic: false,
                //   lees: false,
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
    
                // BULK AGING
                //      wood: "None",
                //      toast: "None",
    
            };
        }
        */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updateYouthfulProfile = function (youthfulProfile) {
            _this.props.setYouthuflProfile(youthfulProfile);
        };
        _this.updateMiddleAgedProfile = function (middleAgedProfile) {
            _this.props.setMiddleAgedProfile(middleAgedProfile);
        };
        _this.updateOldAgedProfile = function (oldAgedProfile) {
            _this.props.setOldAgedProfile(oldAgedProfile);
        };
        _this.updateBulkAging = function (wood, toast) {
            _this.props.setBulk(wood, toast);
        };
        _this.updateLees = function (lees) {
            _this.props.setLees(lees);
        };
        _this.updateMalolacticProfileClue = function (malolacticProfileClue) {
            _this.props.setMalolacticProfileClue(malolacticProfileClue);
        };
        _this.updateBotrytisProfileClue = function (botrytisProfileClue) {
            _this.props.setBotrytisProfileClue(botrytisProfileClue);
        };
        return _this;
    }
    ChemicalAnalysis.prototype.render = function () {
        var _a = this.props, smellProfile = _a.smellProfile, flavorProfile = _a.flavorProfile;
        /*
        let {
            oak, oakFrench, oakAmerican, toasted, malolactic, botrytis, oxidation, brettanomyces, geosmin,
            rotundone, lactones, thiolsHeavy, volatileAcidity, sulphur, thiolsLight, terpenes, pyrazines, brettanomycesFault, cork: corkTaint, butyricAcid, ethylAcetate,
            hydrogenSulfide, iodine, lacticAcidBacteria, mercaptans, oxidationFault, sorbicAcid, sulfurDioxide
        } = this.props;
        */
        //  let{wood,toast}=this.props;
        var smell = [].concat(smellProfile.fruitFloral, smellProfile.earthMineral, smellProfile.biologicalChemical, smellProfile.woodSpice);
        var flavor = [].concat(flavorProfile.fruitFloral, flavorProfile.earthMineral, flavorProfile.biologicalChemical, flavorProfile.woodSpice);
        var chemical = smell.concat(flavor).filter(function (val, id, array) {
            return array.indexOf(val) == id;
        });
        // CATEGORIES
        chemical.forEach(function (chem) {
            //  alert(chem + " of " + chemical);
            // AGING PROFILE
            if (['Dried Apricot', 'Marmalade', 'Dried Apples', 'Dried Bananas', 'Fig', 'Prune', 'Dried Blackberry', 'Dried Cranberry'].indexOf(chem) != -1) {
                youthfulProfile++;
            }
            if (['Cooked Blackberry', 'Cooked Red Plum', 'Earth', 'Mushroom', 'Hay'].indexOf(chem) != -1) {
                middleAgedProfile++;
            }
            if (['Petrol', 'Kerosene', 'Leather', 'Barnyard'].indexOf(chem) != -1) {
                oldAgedProfile++;
            }
            // BULK AGING
            oak = ['Vanilla', 'Cedar', 'Toast', 'Resin'].indexOf(chem) != -1 || oak;
            oakFrench = ['Nutmeg', 'Cloves'].indexOf(chem) != -1 || oakFrench;
            oakAmerican = ['Coconut', 'Dill', 'Coffee', 'Toasted Coconut', 'Roasted'].indexOf(chem) != -1 || oakAmerican;
            toasted = ['Charred Wood', 'Smoke', 'Smokey', 'Campfire'].indexOf(chem) != -1 || toasted;
            // METHODS
            malolacticProfileClue = ['Butter', 'Cream', 'Butterscotch'].indexOf(chem) != -1 || malolacticProfileClue;
            lees = ['Biscuit', 'Bread', 'Toast', 'Pantry', 'Bread Dough', 'Cheese', 'Yogurt'].indexOf(chem) != -1 || lees;
            botrytisProfileClue = ['Honey', 'Ginger'].indexOf(chem) != -1 || botrytisProfileClue;
            oxidation = ['Almond', 'Marzipan', 'Coconut', 'Hazelnut', 'Walnut', 'Chocolate', 'Coffee', 'Toffee', 'Caramel'].indexOf(chem) != -1 || oxidation;
            // CHEMICALS
            brettanomyces = ['Cloves', 'Bacon', 'Band-Aid', 'Horse', 'Sesame Seeds', 'Cannabis'].indexOf(chem) != -1 || brettanomyces;
            geosmin = ['Mushroom', 'Beet', 'Soil', 'Petrichor'].indexOf(chem) != -1 || geosmin;
            rotundone = ['Peppercorn', 'Basil', 'Rosemary', 'Thyme', 'Oregano', 'Marjoram'].indexOf(chem) != -1 || rotundone;
            lactones = ['Honey Wheat Bread', 'Peach', 'Coconut', 'Roasted Hazelnut', 'Butter', 'Vanilla', 'Caramel'].indexOf(chem) != -1 || lactones;
            thiolsLight = ['Grapefruit', 'Gooseberry', 'Passion Fruit', 'Black Current'].indexOf(chem) != -1 || thiolsLight;
            thiolsHeavy = ['Smoke', 'Skunk', 'Tar', 'Chocolate', 'Coffee'].indexOf(chem) != -1 || thiolsHeavy;
            volatileAcidity = ['Pickles', 'Balsamic', 'Sauerkraut', 'Kombucha'].indexOf(chem) != -1 || volatileAcidity;
            sulphur = ['Chalk', 'Flint', 'Metallic', 'Wet Wood'].indexOf(chem) != -1 || sulphur;
            terpenes = ['Pine Tree', 'Sage', 'Lychee', 'Rose', 'Lavender', 'Eucalyptus', 'Orange Blossom'].indexOf(chem) != -1 || terpenes;
            pyrazines = ['Bell Pepper', 'Grass', 'Dark Chocolate', 'Elderflower', 'Peas'].indexOf(chem) != -1 || pyrazines;
            esters = ['White Flowers', 'Apple', 'Banana', 'Strawberry', 'Raspberry'].indexOf(chem) != -1 || esters;
            // FAULTS
            acetaldehyde = ['Green Apple', 'Sour', 'Metallic'].indexOf(chem) != -1 || acetaldehyde;
            aceticAcid = ['Vinegar'].indexOf(chem) != -1 || sorbicAcid;
            brettanomycesFault = ['Barnyard', 'Fecal', 'Horse'].indexOf(chem) != -1 || brettanomycesFault;
            butyricAcid = ['Rancid Butter'].indexOf(chem) != -1 || butyricAcid;
            corkTaint = ['Damp Basement', 'Wet Cardboard', 'Newspaper', 'Mushroom'].indexOf(chem) != -1 || corkTaint;
            dimethylSulfide = ['Cooked Cabbage', 'Canned Corn', 'Asparagus', 'Truffles'].indexOf(chem) != -1 || dimethylSulfide;
            ethylAcetate = ['Vinegar', 'Paint Thinner', 'Nail Polish Remover'].indexOf(chem) != -1 || ethylAcetate;
            hydrogenSulfide = ['Rotten Eggs', 'Garlic', 'Tar', 'Chocolate', 'Coffee'].indexOf(chem) != -1 || hydrogenSulfide;
            iodine = ['Moldy Grapes'].indexOf(chem) != -1 || iodine;
            lacticAcidBacteria = ['Sauerkraut'].indexOf(chem) != -1 || lacticAcidBacteria;
            mercaptans = ['Burnt Garlic', 'Onion', 'Skunk'].indexOf(chem) != -1 || mercaptans;
            oxidationFault = ['Cooked Fruit', 'Walnuts'].indexOf(chem) != -1 || oxidationFault;
            sorbicAcid = false;
            sulfurDioxide = ['Burnt Matches', 'Matchsticks', 'Burnt Rubber', 'Mothballs'].indexOf(chem) != -1 || sulfurDioxide;
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
        malolacticProfileClue = malolacticProfileClue && chemical.indexOf('Green Apple') != -1;
        return (React.createElement("div", null,
            React.createElement("h3", null, "Chemical Analysis:"),
            React.createElement("p", null, "Bulk Aging"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Wood: ",
                    wood),
                React.createElement("li", null,
                    "Toasted: ",
                    toast)),
            React.createElement("p", null, "Processing"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Malolactic: ",
                    String(malolacticProfileClue)),
                React.createElement("li", null,
                    "Lees: ",
                    String(lees)),
                React.createElement("li", null,
                    "Botrytis: ",
                    String(botrytisProfileClue)),
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
                    String(corkTaint)),
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
            this.updateYouthfulProfile(youthfulProfile);
            this.updateMiddleAgedProfile(middleAgedProfile);
            this.updateOldAgedProfile(oldAgedProfile);
            this.updateBulkAging(wood, toast);
            this.updateLees(lees);
            this.updateMalolacticProfileClue(malolacticProfileClue);
            this.updateBotrytisProfileClue(botrytisProfileClue);
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