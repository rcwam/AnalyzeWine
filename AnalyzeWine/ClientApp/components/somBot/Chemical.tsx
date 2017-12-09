import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux';
//import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

// CLIMATE CLUE
let cool:number=0;
let intermediate:number=0;
let warm:number=0;

// AGING PROFILE
let youthfulProfile: number=0;
let middleAgedProfile: number=0;
let oldAgedProfile:number=0;

// BULK AGING

let oak: boolean = false;
let oakFrench: boolean = false;
let oakAmerican: boolean = false;
let toasted: boolean = false;

// METHODS
let malolacticProfileClue: boolean = false;
let notMalolactic : boolean=false;
let lees: boolean = false;
let botrytisProfileClue: boolean = false;
let oxidation: boolean = false;

// CHEMICALS
let esters: boolean = false;
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

// FAULTS
let acetaldehyde: boolean=false;
let aceticAcid:boolean=false;
let brettanomycesFault: boolean = false;
let corkTaint: boolean = false;
let dimethylSulfide:boolean=false;
let butyricAcid: boolean = false;
let ethylAcetate: boolean = false;
let hydrogenSulfide: boolean = false;
let iodine: boolean = false;
let lacticAcidBacteria: boolean = false;  // too much malolactic
let mercaptans: boolean = false;
let oxidationFault: boolean = false;
let sorbicAcid: boolean = false;
let sulfurDioxide: boolean = false;

let wood:string= "None";
let toast:string= "None";

class ChemicalAnalysis extends Component <any, any> {
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


    render() {
        const {smellProfile, flavorProfile} = this.props;

        /*
        let {
            oak, oakFrench, oakAmerican, toasted, malolactic, botrytis, oxidation, brettanomyces, geosmin,
            rotundone, lactones, thiolsHeavy, volatileAcidity, sulphur, thiolsLight, terpenes, pyrazines, brettanomycesFault, cork: corkTaint, butyricAcid, ethylAcetate,
            hydrogenSulfide, iodine, lacticAcidBacteria, mercaptans, oxidationFault, sorbicAcid, sulfurDioxide
        } = this.props;
        */

        //  let{wood,toast}=this.props;

        let smell: string[] = [].concat(smellProfile.fruitFloral, smellProfile.earthMineral, smellProfile.biologicalChemical, smellProfile.woodSpice);
        let flavor: string[] = [].concat(flavorProfile.fruitFloral, flavorProfile.earthMineral, flavorProfile.biologicalChemical, flavorProfile.woodSpice);

        const chemical = smell.concat(flavor).filter((val, id, array) => {
            return array.indexOf(val) == id;
        });

        warm=0;
        intermediate=0;
        cool=0;

        youthfulProfile=0;
        middleAgedProfile=0;
        oldAgedProfile=0;


        chemical.forEach(function (chem) {


          //    alert(chem + " of " + chemical);

            // AGING PROFILE
            if( ['Dried Apricot', 'Marmalade', 'Dried Apples', 'Dried Bananas', 'Fig', 'Prune', 'Dried Blackberry', 'Dried Cranberry'].indexOf(chem) != -1 ) {


                youthfulProfile++;
                //    alert("YOUTH "+chem);
            }
            if (['Cooked Blackberry', 'Cooked Red Plum', 'Earth', 'Mushroom', 'Hay'].indexOf(chem) != -1) {
                middleAgedProfile++
            }
            if (['Petrol', 'Kerosene', 'Leather', 'Barnyard'].indexOf(chem) != -1) {
                oldAgedProfile++
            }

            // CLIMATE PROFILE
            if (['Tart', 'Apple', 'Pear', 'Cranberry','Cherry'].indexOf(chem) != -1) {
                cool++
            }
            if (['Ripe Fruit', 'Juicy', 'Peach', 'Mellon', 'Berry', 'Plumb'].indexOf(chem) != -1) {
                intermediate++
            }
            if (['Over Ripe Fruit', 'Lush', 'Mango', 'Pineapple', 'Fig','Prune'].indexOf(chem) != -1) {
              //  alert("added warm because of "+chem);
                warm++
            }





            // BULK AGING
            oak = ['Vanilla', 'Cedar', 'Toast', 'Resin'].indexOf(chem) != -1 || oak;
            oakFrench = ['Nutmeg', 'Cloves'].indexOf(chem) != -1 || oakFrench;
            oakAmerican = ['Coconut', 'Dill', 'Coffee', 'Toasted Coconut', 'Roasted'].indexOf(chem) != -1 || oakAmerican;
            toasted = ['Charred Wood', 'Smoke', 'Smokey', 'Campfire'].indexOf(chem) != -1 || toasted;

            // METHODS
            malolacticProfileClue = ['Butter', 'Cream', 'Butterscotch'].indexOf(chem) != -1 || malolacticProfileClue;
            notMalolactic = ['Green Apple', 'Tart'].indexOf(chem) != -1 || notMalolactic;
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
            wood = "American Oak"
        } else {
            if (oakFrench) {
                wood = "French Oak"
            } else {
                if (oak) {
                    wood = "Oak"
                    //     alert("Got to Oak")
                } else {
                    wood = "None"
                }
            }
        }

        if (toasted) {
            toast = "Toast"
        }

     //   alert(malolacticProfileClue+" not "+notMalolactic);
        malolacticProfileClue = malolacticProfileClue && !notMalolactic;
     //   alert("Update Malolactic: "+malolacticProfileClue+"  "+notMalolactic);

        return (
            <div><h3>Chemical Analysis:</h3>
                <p>Bulk Aging</p>
                <ul>
                    <li>Wood: {wood}</li>
                    <li>Toasted: {toast}</li>
                </ul>
                <p>Processing</p>
                <ul>
                    <li>Malolactic Clue: {String(malolacticProfileClue)}</li>
                    <li>Lees: {String(lees)}</li>
                    <li>Botrytis: {String(botrytisProfileClue)}</li>
                    <li>Oxidation: {String(oxidation)}</li>
                </ul>
                <p>Chemicals</p>
                <ul>
                    <li>Chemical 1: {String(youthfulProfile)}</li>
                    <li>Chemical 2: {String(middleAgedProfile)}</li>
                    <li>Chemical 3: {String(middleAgedProfile)}</li>

                </ul>
                <p>Faults</p>
                <ul>
                    <li>Fault 1: {String(false)}</li>
                    <li>Fault 2: {String(false)}</li>

                </ul>

            </div>
        )
    }

    componentWillReceiveProps(nextProps: any) {
        if (
            (this.props.smellProfile.fruitFloral != nextProps.smellProfile.fruitFloral) ||
            (this.props.smellProfile.earthMineral != nextProps.smellProfile.earthMineral) ||
            (this.props.smellProfile.biologicalChemical != nextProps.smellProfile.biologicalChemical) ||
            (this.props.smellProfile.woodSpice != nextProps.smellProfile.woodSpice) ||
            (this.props.flavorProfile.fruitFloral != nextProps.flavorProfile.fruitFloral) ||
            (this.props.flavorProfile.earthMineral != nextProps.flavorProfile.earthMineral) ||
            (this.props.flavorProfile.biologicalChemical != nextProps.flavorProfile.biologicalChemical) ||
            (this.props.flavorProfile.woodSpice != nextProps.flavorProfile.woodSpice)

        ) {
       //     alert("Saw a Change");
       //      alert("Update Malolactic: "+malolacticProfileClue+"  "+notMalolactic);

            // COULD PULL IN PROPS AND CHECK FOR A CHANGE BEFORE UPDATING

          this.updateAgeProfile(youthfulProfile,middleAgedProfile,oldAgedProfile);
this.updateClimateProfile(cool,intermediate,warm);
            this.updateBulkAging(wood, toast);
            this.updateLees(lees);
            this.updateMalolacticProfileClue(malolacticProfileClue);
            this.updateBotrytisProfileClue(botrytisProfileClue);
            /*


            */
        }
    }

    updateAgeProfile  = (youthfulProfile:number,middleAgedProfile:number, oldAgedProfile:number)=>{
    //    alert("Age Profile");
     //   alert("young: "+youthfulProfile+" middle: "+middleAgedProfile+ " old: "+oldAgedProfile);
        this.props.setAgeProfile(youthfulProfile,middleAgedProfile,oldAgedProfile)
    };
    updateClimateProfile  = (cool:number,intermediate:number, warm:number)=>{
        //    alert("Age Profile");
        //   alert("young: "+youthfulProfile+" middle: "+middleAgedProfile+ " old: "+oldAgedProfile);
        this.props.setClimateProfile(cool,intermediate,warm)
    };
    updateBulkAging = (wood: string, toast: string) => {
   //     alert("Barrel");
        this.props.setBulk(wood, toast)
    };
    updateLees = (lees: boolean) => {
    //    alert("Lees")
        this.props.setLees(lees)
    };
    updateMalolacticProfileClue = (malolacticProfileClue: boolean) => {
        this.props.setMalolacticProfileClue(malolacticProfileClue)
    };
    updateBotrytisProfileClue = (botrytisProfileClue: boolean) => {
        this.props.setBotrytisProfileClue(botrytisProfileClue)
    };
}

function mapStateToProps (ApplicationState: any) {
    return {
        smellProfile: ApplicationState.blind.notes.nose.smellProfile,
        flavorProfile: ApplicationState.blind.notes.palate.flavorProfile,
    };
}

export default connect(mapStateToProps, BlindStore.actionCreators )(ChemicalAnalysis) as typeof ChemicalAnalysis;

