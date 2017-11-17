import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

// BULK AGING
let wood:string= "None";
 let   toast:string= "None";
    let esters: boolean = false;
let oak: boolean = false;
let oakFrench: boolean = false;
let oakAmerican: boolean = false;
let toasted: boolean = false;





class ChemicalAnalysis extends Component <any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
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

            // BULK AGING
      //      wood: "None",
      //      toast: "None",

        };
    }



    render() {
        const {smellProfile, flavorProfile} = this.props;

        let {
            oak, oakFrench, oakAmerican, toasted, malolactic, lees, botrytis, oxidation, brettanomyces, geosmin,
            rotundone, lactones, thiolsHeavy, volatileAcidity, sulphur, thiolsLight, terpenes, pyrazines, brettanomycesFault, cork, butyricAcid, ethylAcetate,
            hydrogenSulfide, iodine, lacticAcidBacteria, mercaptans, oxidationFault, sorbicAcid, sulfurDioxide
        } = this.props;

        //  let{wood,toast}=this.props;

        let smell: string[] = [].concat(smellProfile.fruitFloral, smellProfile.earthMineral, smellProfile.biologicalChemical, smellProfile.woodSpice);
        let flavor: string[] = [].concat(flavorProfile.fruitFloral, flavorProfile.earthMineral, flavorProfile.biologicalChemical, flavorProfile.woodSpice);

        const chemical = smell.concat(flavor).filter((val, id, array) => {
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
            oak = ['Vanilla', 'Cedar', 'Toast', 'Resin'].indexOf(chem) != -1|| oak;
            oakFrench = ['Nutmeg', 'Cloves'].indexOf(chem) != -1|| oakFrench;
            oakAmerican = ['Coconut', 'Dill', 'Coffee', 'Toasted Coconut', 'Roasted'].indexOf(chem) != -1 || oakAmerican;

           // alert("1) "+ chem + " " + String(oakAmerican));

            toasted = ['Charred Wood', 'Smoke', 'Smokey', 'Campfire'].indexOf(chem) != -1|| toasted;

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


        return (
            <div><h3>Chemical Analysis:</h3>
                <p>Bulk Aging</p>
                <ul>
                    <li>Lees: {String(lees)}</li>
                    <li>Oak: {String(oak)}</li>
                    <li>French Oak: {String(oakFrench)}</li>
                    <li>American Oak: {String(oakAmerican)}</li>
                    <li>Toasted Barrel: {String(toasted)}</li>
                    <li>Wood: {wood}</li>
                    <li>Toast: {toast}</li>
                </ul>
                <p>Processing</p>
                <ul>
                    <li>Malolactic: {String(malolactic)}</li>
                    <li>Lees: {String(lees)}</li>
                    <li>Botrytis: {String(botrytis)}</li>
                    <li>Oxidation: {String(oxidation)}</li>
                </ul>
                <p>Chemicals</p>
                <ul>
                    <li>Esters: {String(esters)}</li>
                    <li>Brettanomyces: {String(brettanomyces)}</li>
                    <li>Geosmin: {String(geosmin)}</li>
                    <li>Rotundone: {String(rotundone)}</li>
                    <li>Lactones: {String(lactones)}</li>
                    <li>Thiols (Light): {String(thiolsLight)}</li>
                    <li>Thiols (Heavy): {String(thiolsHeavy)}</li>
                    <li>Volatile Acidity: {String(volatileAcidity)}</li>
                    <li>Sulphur: {String(sulphur)}</li>
                    <li>Terpenes: {String(terpenes)}</li>
                    <li>Pyrazines: {String(pyrazines)}</li>
                </ul>
                <p>Faults</p>
                <ul>
                    <li>Brettanomyces: {String(brettanomycesFault)}</li>
                    <li>Cork: {String(cork)}</li>
                    <li>Butyric: {String(butyricAcid)}</li>
                    <li>Ethyl Acetate: {String(ethylAcetate)}</li>
                    <li>Hydrogen Sulfide: {String(hydrogenSulfide)}</li>
                    <li>Iodine: {String(iodine)}</li>
                    <li>Lactic Acid Bacteria: {String(lacticAcidBacteria)}</li>
                    <li>Merceptans: {String(mercaptans)}</li>
                    <li>Oxidation: {String(oxidationFault)}</li>
                    <li>Sorbic Acid: {String(sorbicAcid)}</li>
                    <li>Sulfur Dioxide: {String(sulfurDioxide)}</li>
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
          //  alert(wood);
            this.updateBulkAging( wood, toast)
        }
    }


    updateBulkAging = ( wood: string, toast: string) => {
        this.props.setBulk( wood, toast)
    };
}

function mapStateToProps (ApplicationState: any) {
    return {
        smellProfile: ApplicationState.blind.notes.nose.smellProfile,
        flavorProfile: ApplicationState.blind.notes.palate.flavorProfile,
    };
}

export default connect(mapStateToProps, BlindStore.actionCreators )(ChemicalAnalysis) as typeof ChemicalAnalysis;

