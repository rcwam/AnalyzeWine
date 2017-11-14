///<reference path="../../node_modules/@types/react/index.d.ts"/>
import * as React from 'react';
import  {Component, PropTypes} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { ApplicationState } from '../store';
import * as BlindStore from '../store/Blind';
//import {render} from "react-dom";
//import set = Reflect.set;
//import {createClass, PropTypes} from "react";
import BotConclusions from './Conclusions'
import Age from './Age'
//import BigCalculation, {default as GiveItUp} from './BigCalculation'


type BlindProps =
    BlindStore.BlindTastingState
    & typeof BlindStore.actionCreators
    & RouteComponentProps<{}>;

//const helloWorld = "Hello World";


class Blind extends Component<BlindProps, {}> {



    changeWineType(e: any) {
        this.props.setWineType(e.target.value);
        // Run Varietal
    }

    // Change Sight State
    changeColor(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.setColor(e.target.value);
//        this.age(e.target.value,sweetness, sediment, tannins,toast,fruitFloral,earthMineral,biologicalChemical);
    }

    changeDepth(e: any) {
        this.props.setDepth(e.target.value);
        // Run Varietal - Thick skin vs thin skin
    }

    changeClarity(e: any) {
        this.props.setClarity(e.target.value);
        // Run Quality
    }

    changeSediment(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.setSediment(e.target.value);
 //       this.age(color,sweetness, e.target.value, tannins,toast,fruitFloral,earthMineral,biologicalChemical );

    }

    changeViscosity(e: any) {
        this.props.setViscosity(e.target.value);
        // Run Climate - new world style is more viscous
        // Run Varietal
    }

    changeCarbonation(e: any) {
        this.props.setCarbonation(e.target.value);
        // determine carbonation style
    }

    // Change Smell State
    changeSmellIntensity(e: any) {
        this.props.setSmellIntensity(e.target.value);
        // Run Quality - indicates stressed vines
    }

    changeSmellComplexity(e: any) {
        this.props.setSmellComplexity(e.target.value);
        // Run Quality
        // possible malolactic fermentation
      // const xFile = {GiveItUp}
    }

    changeSmellAlcohol(e: any) {
        this.props.setSmellAlcohol(e.target.value);
        // Run Climate- new world style is more alcohol
        // Update Varietal with Climate
    }

    addAromaFruitFloral(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addAroma(e.target.value, "fruitFloral");
        this.barrel(fruitFloral, earthMineral, biologicalChemical, woodSpice);
 //       this.age(color, sweetness, sediment, tannins, toast, fruitFloral, earthMineral, biologicalChemical);
        // Run Climate - New World is more FruitFloral
        // Update Varietal with Climate
        // Varietal - Aromas
    }

    addAromaEarthMineral(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addAroma(e.target.value, "earthMineral");
        this.barrel(fruitFloral,earthMineral,biologicalChemical, woodSpice);
        // Run Age (as wine ages it loses FruitFloral and gains EarthMineral (3-5))
//        this.age(color, sweetness, sediment, tannins,toast,fruitFloral,earthMineral,biologicalChemical );
        // Run Climate - Old World more EarthMineral
        // Update Varietal with Climate
        // Varietal - Aromas
    }

    /* Should these all be converted to arrow functions? */
    addAromaWoodSpice = (e: any) => {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addAroma(e.target.value, "woodSpice");
        this.barrel(fruitFloral,earthMineral,biologicalChemical, woodSpice);
        // Run Age (barrel aging is darker/browner (brown sugar & molasses) - Lower age estimate) - Update Barrel Container
 //       this.age(color, sweetness, sediment, tannins, toast, fruitFloral, earthMineral, biologicalChemical);
        // Run Climate - New World uses more oak
        // Update Varietal with Climate
        // Varietal - Aromas
    };

    addAromaBiologicalChemical(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addAroma(e.target.value, "biologicalChemical");
        this.barrel(fruitFloral,earthMineral,biologicalChemical, woodSpice);
        // Run Age (yeast indicates youth - aging wine gains non-fermentation BiologicalChemical strong after 5 years along with carmel)
//        this.age(color, sweetness, sediment, tannins,toast,fruitFloral,earthMineral,biologicalChemical );        // Varietal - Aromas
    }

    clearAroma(aromaCategory: string) {
        this.props.clearAroma(aromaCategory);
    }

    // Change Taste State
    changeTasteIntensity(e: any) {
        this.props.setTasteIntensity(e.target.value);
        // Run Quality - indicates stressed vines
    }

    changeTasteComplexity(e: any) {
        this.props.setTasteComplexity(e.target.value);
        // Run Quality
        // possible malolactic fermentation
    }

    changeBody(e: any) {
        this.props.setBody(e.target.value);
        // Run Climate - new world style is more viscous
        // Run Quality - Balance
        // Run Varietal
    }

    changeSweetness(e: any) {
        this.props.setSweetness(e.target.value);
        // Run Age (sweeter is darker)
        // Run Quality - Balance
        // Run Varietal - Certain white wine grapes are used in sweet wines.
    }

    changeAcidity(e: any) {
        this.props.setAcidity(e.target.value);
        // Run Climate
        // Run Quality - Balance
        // Run Varietal
    }

    changeTannins(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.setTannins(e.target.value);
 //       this.age(color,sweetness, sediment, e.target.value,toast,fruitFloral,earthMineral,biologicalChemical);


        // Run Quality - Balance
        // Run Varietal - Thick skin grapes produce more tannins
    }

    changeTasteAlcohol(e: any) {
        this.props.setTasteAlcohol(e.target.value);
        // Run Climate - new world style is more alcohol
        // Update Varietal with Climate
    }

    changeFinish(e: any) {
        this.props.setFinish(e.target.value);
        // Run Quality
    }

    addFlavorFruitFloral(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addFlavor(e.target.value, "fruitFloral");
        this.barrel(fruitFloral,earthMineral,biologicalChemical, woodSpice);
        // Run Age
        // Run Climate - New World is more FruitFloral
        // Update Varietal with Climate
        // Varietal - Flavors
    }

    addFlavorEarthMineral(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addFlavor(e.target.value, "earthMineral");
        this.barrel(fruitFloral,earthMineral,biologicalChemical, woodSpice);
        // Run Age
        // Run Climate - Old World is more EarthMineral
        // Update Varietal with Climate
        // Varietal - Flavors
    }

    addFlavorWoodSpice(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addFlavor(e.target.value, "woodSpice");
        this.barrel(fruitFloral,earthMineral,biologicalChemical, woodSpice);

        // Run Climate - New World uses more Oak
        // Run Varietal - Certain white wine grapes are oak aged
        // Varietal - Flavors
    }

    addFlavorBiologicalChemical(e: any) {
        const {color, sediment} = this.props.notes.eye;
        const {sweetness, tannins} = this.props.notes.palate;
        const {toast} = this.props.conclusions.SomBot.viniculture.bulkAging.barrel;
        const {fruitFloral, earthMineral, biologicalChemical, woodSpice} = this.props.notes.nose.smellProfile;

        this.props.addFlavor(e.target.value, "biologicalChemical");
        this.barrel(fruitFloral,earthMineral,biologicalChemical, woodSpice);
        // Run Age (yeast indicates youth - aging wine gains non-fermentation BiologicalChemical strong after 5 years along with carmel)
        // Varietal - Flavors
    }

    clearFlavor(flavorCategory: string) {
        this.props.clearFlavor(flavorCategory);
    }

    barrel(smellFruitFloral:string[],smellEarthMineral:string[],smellBiologicalChemical:string[],smellWoodSpice:string[]){

        let smell: string[];
        smell = [];
        smell = smell.concat(smellFruitFloral, smellEarthMineral, smellWoodSpice, smellBiologicalChemical);

        // Light toasting toastedBread, Nuts
        let lightToasting = 0;
        if (smell.indexOf("toast") > -1) {
            lightToasting++;
        }
        if (smell.indexOf("nuts") > -1) {
            lightToasting++;
        }
        // heavy toasting roasted coffee beans, dark chocolate
        let heavyToasting = 0;
        if (smell.indexOf("coffee") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("dark chocolate") > -1) {
            heavyToasting++;
        }

        // Oak Barrel
        let oakBarrel = 0;
        if (smell.indexOf("vanilla") > -1) {
            oakBarrel++;
        }
        // French Oak
        // elegantVanilla, cinnamon, cloves, nutmeg
        let frenchOak = 0;
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
        let americanOak = 0;
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

        let ageing = "None";
        let wood = "None";
        let toast = "None";

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
//        this.age(this.props.notes.eye.color, this.props.notes.palate.sweetness, this.props.notes.eye.sediment, this.props.notes.palate.tannins,toast,this.props.notes.nose.smellProfile.fruitFloral,this.props.notes.nose.smellProfile.earthMineral,this.props.notes.nose.smellProfile.biologicalChemical);
    }

    constructor() {
        super();
        this.changeWineType = this.changeWineType.bind(this);

        // Sight Constructors
        this.changeColor = this.changeColor.bind(this);
        this.changeDepth = this.changeDepth.bind(this);
        this.changeClarity = this.changeClarity.bind(this);
        this.changeSediment = this.changeSediment.bind(this);
        this.changeViscosity = this.changeViscosity.bind(this);
        this.changeCarbonation = this.changeCarbonation.bind(this);

        // Smell Constructors
        this.changeSmellIntensity = this.changeSmellIntensity.bind(this);
        this.changeSmellComplexity = this.changeSmellComplexity.bind(this);
        this.changeSmellAlcohol = this.changeSmellAlcohol.bind(this);
        this.addAromaFruitFloral = this.addAromaFruitFloral.bind(this);
        this.addAromaEarthMineral = this.addAromaEarthMineral.bind(this);
        this.addAromaWoodSpice = this.addAromaWoodSpice.bind(this);
        this.addAromaBiologicalChemical = this.addAromaBiologicalChemical.bind(this);
        this.clearAroma = this.clearAroma.bind(this);

        // Taste Constructors
        this.changeTasteIntensity = this.changeTasteIntensity.bind(this);
        this.changeTasteComplexity = this.changeTasteComplexity.bind(this);
        this.changeBody = this.changeBody.bind(this);
        this.changeSweetness = this.changeSweetness.bind(this);
        this.changeAcidity = this.changeAcidity.bind(this);
        this.changeTannins = this.changeTannins.bind(this);
        this.changeTasteAlcohol = this.changeTasteAlcohol.bind(this);
        this.changeFinish = this.changeFinish.bind(this);
        this.addFlavorFruitFloral = this.addFlavorFruitFloral.bind(this);
        this.addFlavorEarthMineral = this.addFlavorEarthMineral.bind(this);
        this.addFlavorWoodSpice = this.addFlavorWoodSpice.bind(this);
        this.addFlavorBiologicalChemical = this.addFlavorBiologicalChemical.bind(this);
        this.clearFlavor = this.clearFlavor.bind(this);

        // Conclusion Constructors
        this.barrel = this.barrel.bind(this);
    }




/*
    componentWillReceiveProps(nextProps: any, nextState: any){alert(this.props.conclusions.age.min + " to next " + nextProps.conclusions.age.min)}
    componentDidMount(){}
    shouldComponentUpdate(nextProps: any, nextState: any){

        return true;
    }
    componentWillUpdate(nextProps: any, nextState: any){

        // this.setState(nextState)
        alert(this.props.conclusions.age.min + " to next " + nextProps.conclusions.age.min)
    }
    componentDidUpdate(previousProps: any, previousState: any){alert(this.props.conclusions.age.min + " to previous " + previousProps.conclusions.age.min)}
*/


















    updateAge(){
        this.setState(this.props.conclusions.SomBot.viniculture.bottleAging.min);
    }



    public render()  {

     //   this.componentDidMount()(this.updateAge());


        return <div>
            <h3>Choose Type</h3>
            <p>What type of wine are you analyzing? {this.selectTypeList()} </p>

            <hr/>

            <h3>Analyze by Sight</h3>
            <p>What color is the wine? {this.pickColorList(this.props.notes.eye.wineType)}</p>
            <p>How deep is the wine's color? {this.selectDepth()}</p>
            <p>How clear is the wine? {this.selectClarity()}</p>
            <p>Does the wine have sediment? {this.selectSediment()}</p>
            <p>How viscous is the wine (legs)? {this.selectViscosity()}</p>
            <p>Is the wine carbonated (bubble size, effervescence)? {this.selectCarbonation()}</p>


            <hr/>

            <h3>Analyze by Smell</h3>
            <p>How intense is the aroma? {this.selectSmellIntensity()}</p>
            <p>How complex is the aroma? {this.selectSmellComplexity()}</p>
            <p>What can you tell about alcohol content? {this.selectSmellAlcohol()}</p>

            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseAromaProfile"
                    aria-expanded="true" aria-controls="collapseAromaProfile">
                Aroma Profile
            </button>
            <div className="collapse" id="collapseAromaProfile">
                <div className="well">


                    <p/>
                    <p><i>Fruit &amp; Floral</i> : <b>{this.props.notes.nose.smellProfile.fruitFloral.toString()}</b>
                        <button onClick={() => this.clearAroma("fruitFloral")}>Clear</button>
                    </p>

                    {this.addCitrusSmell()}
                    {this.addTreeFruitSmell()}
                    {this.addBerriesSmell()}
                    {this.addTropicalFruitSmell()}
                    {this.addDriedFruitSmell()}
                    {this.addArtificialSmell()}
                    {this.addFloralSmell()}

                    <p/>
                    <p><i>Earth &amp; Mineral</i> : <b>{this.props.notes.nose.smellProfile.earthMineral.toString()}</b>
                        <button onClick={() => this.clearAroma("earthMineral")}>Clear</button>
                    </p>

                    {this.addEarthSmell()}
                    {this.addMineralSmell()}
                    {this.addPlantMatterSmell()}
                    {this.addHerbalSmell()}
                    {this.addVegetableSmell()}

                    <p/>
                    <p><i>Wood &amp; Spice</i> : <b>{this.props.notes.nose.smellProfile.woodSpice.toString()}</b>
                        <button onClick={() => this.clearAroma("woodSpice")}>Clear</button>
                    </p>

                    {this.addWoodSmell()}
                    {this.addRoastedSmell()}
                    {this.addSmokeySmell()}
                    {this.addSpiceSmell()}
                    {this.addOxidationSmell()}



                    <p/>
                    <p><i>Biological &amp; Chemical</i> : <b>{this.props.notes.nose.smellProfile.biologicalChemical.toString()}</b>
                        <button onClick={() => this.clearAroma("biologicalChemical")}>Clear</button>
                    </p>


                    {this.addBiologicalSmell()}
                    {this.addChemicalSmell()}

                </div>
            </div>

            <hr/>

            <h3>Analyze by Taste</h3>
            <p>Intensity? {this.selectTasteIntensity()}</p>
            <p>Complexity? {this.selectTasteComplexity()}</p>
            <p>Body (mouth feel)? {this.selectBody()}</p>
            <p>Sweetness? {this.selectSweetness()}</p>
            <p>Acidity? {this.selectAcidity()}</p>
            <p>Tannins? {this.selectTannins()}</p>
            <p>Alcohol? {this.selectTasteAlcohol()}</p>
            <p>Finish? {this.selectFinish()}</p>

            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseFlavorProfile"
                    aria-expanded="true" aria-controls="collapseFlavorProfile">
                Flavor Profile
            </button>
            <div className="collapse" id="collapseFlavorProfile">
                <div className="well">

                    <p/>
                    <p><i>Fruit &amp; Floral</i> : <b>{this.props.notes.palate.flavorProfile.fruitFloral.toString()}</b>
                        <button onClick={() => this.clearFlavor("fruitFloral")}>Clear</button>
                    </p>

                    {this.addCitrusFlavor()}
                    {this.addTreeFruitFlavor()}
                    {this.addBerriesFlavor()}
                    {this.addTropicalFruitFlavor()}
                    {this.addDriedFruitFlavor()}
                    {this.addArtificialFlavor()}
                    {this.addFloralFlavor()}

                    <p/>
                    <p><i>Earth &amp; Mineral</i> : <b>{this.props.notes.palate.flavorProfile.earthMineral.toString()}</b>
                        <button onClick={() => this.clearFlavor("earthMineral")}>Clear</button>
                    </p>

                    {this.addEarthFlavor()}
                    {this.addMineralFlavor()}
                    {this.addPlantMatterFlavor()}
                    {this.addHerbalFlavor()}
                    {this.addVegetableFlavor()}

                    <p/>
                    <p><i>Wood &amp; Spice</i> : <b>{this.props.notes.palate.flavorProfile.woodSpice.toString()}</b>
                        <button onClick={() => this.clearFlavor("woodSpice")}>Clear</button>
                    </p>

                    {this.addWoodFlavor()}
                    {this.addRoastedFlavor()}
                    {this.addSmokeyFlavor()}
                    {this.addSpiceFlavor()}
                    {this.addOxidationFlavor()}



                    <p/>
                    <p><i>Biological &amp; Chemical</i> : <b>{this.props.notes.palate.flavorProfile.biologicalChemical.toString()}</b>
                        <button onClick={() => this.clearFlavor("biologicalChemical")}>Clear</button>
                    </p>


                    {this.addBiologicalFlavor()}
                    {this.addChemicalFlavor()}
                </div>
            </div>
            <hr/>



            <BotConclusions />

            <UserName />

            <FetchUser children={UserName} />

        </div>;
    }



    selectTypeList() {
        return (

            <select name="WineTypeSelector" value={this.props.notes.eye.wineType} onChange={this.changeWineType}>
                <option value="Red">Red</option>
                <option value="White">White</option>
                <option value="Rose">Rose</option>
            </select>
        );
    }

    private pickColorList(thisWineType: string) {
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
    }

    // Sight Selections

    redColorList() {
        return (
            <select value={this.props.notes.eye.color} onChange={this.changeColor}>
                <option value="Purple">Purple</option>
                <option value="Ruby">Ruby</option>
                <option value="Red">Red</option>
                <option value="Garnet">Garnet</option>
                <option value="Brick">Brick</option>
                <option value="Brown">Brown</option>
            </select>
        );
    }

    whiteColorList() {
        return (
            <select value={this.props.notes.eye.color} onChange={this.changeColor}>
                <option value="Clear">Greenish</option>
                <option value="Greenish">Greenish</option>
                <option value="Yellow">Yellow</option>
                <option value="Straw">Straw</option>
                <option value="Golden">Golden</option>
                <option value="Amber">Amber</option>
                <option value="Brown">Brown</option>
            </select>
        );
    }


    roseColorList() {
        return (
            <select value={this.props.notes.eye.color} onChange={this.changeColor}>
                <option value="Pink">Pink</option>
                <option value="Salmon">Salmon</option>
                <option value="Orange">Orange</option>
                <option value="Copper">Copper</option>
                <option value="Brown">Brown</option>
            </select>
        );
    }

    selectDepth() {
        return (
            <select value={this.props.notes.eye.depth} onChange={this.changeDepth}>
                <option value="Watery">Watery</option>
                <option value="Pale">Pale</option>
                <option value="Medium">Medium</option>
                <option value="Deep">Deep</option>
                <option value="Dark">Dark</option>
            </select>
        );
    }

    selectClarity() {
        return (
            <select value={this.props.notes.eye.clarity} onChange={this.changeClarity}>
                <option value="Clear">Clear</option>
                <option value="Hazy">Hazy</option>
                <option value="Cloudy">Cloudy</option>
            </select>
        );
    }

    selectSediment() {
        return (
            <select value={this.props.notes.eye.sediment} onChange={this.changeSediment}>
                <option value="None">None</option>
                <option value="Light">Light</option>
                <option value="Heavy">Heavy</option>
                <option value="Tartrate">Tartrate</option>
            </select>
        );
    }

    selectViscosity() {
        return (
            <select value={this.props.notes.eye.viscosity} onChange={this.changeViscosity}>
                <option value="None">None</option>
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Heavy">Heavy</option>
            </select>
        );
    }

    selectCarbonation() {
        return (
            <select value={this.props.notes.eye.carbonation} onChange={this.changeCarbonation}>
                <option value="None">None</option>
                <option value="Small/Light">Small/Light</option>
                <option value="Small/Heavy">Small/Heavy</option>
                <option value="Large/Light">Large/Light</option>
                <option value="Large/Heavy">Large/Heavy</option>
            </select>
        );
    }

    // Smell Selections
    selectSmellIntensity() {
        return (
            <select value={this.props.notes.nose.smellIntensity} onChange={this.changeSmellIntensity}>
                <option value="None">None</option>
                <option value="Weak">Weak</option>
                <option value="Medium">Medium</option>
                <option value="Strong">Strong</option>
                <option value="Powerful">Powerful</option>
            </select>
        );
    }

    selectSmellComplexity() {
        return (
            <select value={this.props.notes.nose.smellComplexity} onChange={this.changeSmellComplexity}>
                <option value="Simple">Simple</option>
                <option value="Medium">Medium</option>
                <option value="Complex">Complex</option>
            </select>
        );
    }

    selectSmellAlcohol() {
        return (
            <select value={this.props.notes.nose.smellAlcohol} onChange={this.changeSmellAlcohol}>
                <option value="None">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        );
    }

    // Taste Selections
    selectTasteIntensity() {
        return (
            <select value={this.props.notes.palate.tasteIntensity} onChange={this.changeTasteIntensity}>
                <option value="None">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        );
    }
    selectTasteComplexity() {
        return (
            <select value={this.props.notes.palate.tasteComplexity} onChange={this.changeTasteComplexity}>
                <option value="None">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        );
    }
    selectBody() {
        return (
            <select value={this.props.notes.palate.body} onChange={this.changeBody}>
                <option value="None">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        );
    }
    selectSweetness() {
        return (
            <select value={this.props.notes.palate.sweetness} onChange={this.changeSweetness}>
                <option value="Dry">Dry</option>
                <option value="Medium">Medium</option>
                <option value="Sweet">Sweet</option>
                <option value="Dessert">Dessert</option>
            </select>
        );
    }
    selectAcidity() {
        return (
            <select value={this.props.notes.palate.acidity} onChange={this.changeAcidity}>
                <option value="None">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        );
    }
    selectTannins() {
        return (
            <select value={this.props.notes.palate.tannins} onChange={this.changeTannins}>
                <option value="None">None</option>
                <option value="Refined">Refined</option>
                <option value="Soft">Soft</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Harsh">Harsh</option>
                <option value="Astringent">Astringent</option>
                <option value="Aggressive">Aggressive</option>
            </select>
        );
    }
    selectTasteAlcohol() {
        return (
            <select value={this.props.notes.palate.tasteAlcohol} onChange={this.changeTasteAlcohol}>
                <option value="None">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        );
    }
    selectFinish() {
        return (
            <select value={this.props.notes.palate.finish} onChange={this.changeFinish}>
                <option value="None">None</option>
                <option value="Short">Short (&lt;3 sec)</option>
                <option value="Medium">Medium (4-5 sec)</option>
                <option value="Long">Long (5-7 sec)</option>
                <option value="Very Long">Very Long (&gt;8 sec)</option>
            </select>
        );
    }






addCitrusSmell(){
        return (
            <select value="Top"  onChange={this.addAromaFruitFloral}>
                <option value="Top">Citrus</option>
                <option value="Citrus">CITRUS</option>
                <option value="Grapefruit">Grapefruit</option>
                <option value="Lemon">Lemon</option>
                <option value="Lime">Lime</option>
                <option value="Orange">Orange</option>
                <option value="Tangerine">Tangerine</option>
            </select>
        )
}
addTreeFruitSmell(){
    return (
        <select value="Top"  onChange={this.addAromaFruitFloral}>
            <option value="Top">Tree Fruit</option>
            <option value="Tree Fruit">TREE FRUIT</option>
            <option value="Apple">Apple</option>
            <option value="Apricot">Apricot</option>
            <option value="Cherry">Cherry</option>
            <option value="Nectarine">Nectarine</option>
            <option value="Peach">Peach</option>
            <option value="Pear">Pear</option>
            <option value="Persimmon">Persimmon</option>
            <option value="Plum">Plum</option>
        </select>
    )
}
    addBerriesSmell(){
        return (
            <select value="Top"  onChange={this.addAromaFruitFloral}>
                <option value="Top">Berries</option>
                <option value="Berries">BERRIES</option>
                <option value="Blackberry">Blackberry</option>
                <option value="Blueberry">Blueberry</option>
                <option value="Cranberry">Cranberry</option>
                <option value="Currant">Currant</option>
                <option value="Gooseberry">Gooseberry</option>
                <option value="Grape">Grape</option>
                <option value="Loganberry">Loganberry</option>
                <option value="Raspberry">Raspberry</option>
                <option value="Strawberry">Strawberry</option>
            </select>
        )
    }
    addTropicalFruitSmell(){
        return (
            <select value="Top"  onChange={this.addAromaFruitFloral}>
                <option value="Top">Tropical Fruit</option>
                <option value="Tropical Fruit">TROPICAL FRUIT</option>
                <option value="Asian Pear">Asian Pear</option>
                <option value="Banana">Banana</option>
                <option value="Guava">Guava</option>
                <option value="Kiwi">Kiwi</option>
                <option value="Lychee">Lychee</option>
                <option value="Mango">Mango</option>
                <option value="Melon">Melon</option>
                <option value="Papaya">Papaya</option>
                <option value="Passionfruit">Passionfruit</option>
                <option value="Pineapple">Pineapple</option>
                <option value="Plantain">Plantain</option>
                <option value="Star Fruit">Star Fruit</option>
            </select>
        )
    }
    addDriedFruitSmell(){
        return (
            <select value="Top"  onChange={this.addAromaFruitFloral}>
                <option value="Top">Dried Fruit</option>
                <option value="Dried Fruit">DRIED FRUIT</option>
                <option value="Date">Date</option>
                <option value="Fig">Fig</option>
                <option value="Golden Raisin">Golden Raisin</option>
                <option value="Jam & Jelly">Jam &amp; Jelly</option>
                <option value="Prune">Prune</option>
                <option value="Raisin">Raisin</option>
            </select>
        )
    }
    addArtificialSmell(){
        return (
            <select value="Top"  onChange={this.addAromaFruitFloral}>
                <option value="Top">Artificial</option>
                <option value="Artificial">ARTIFICIAL</option>
                <option value="Fruit Cocktail">Fruit Cocktail</option>
                <option value="Froot Loop">Froot Loop</option>
                <option value="Fruit Punch">Fruit Punch</option>
                <option value="Grape Soda">Grape Soda</option>
                <option value="Hard Candy">Hard Candy</option>
                <option value="Red Licorice">Red Licorice</option>
            </select>
        )
    }
    addFloralSmell(){
        return ( // onClick={() => this.clearAroma("fruitFloral")
            <select value="Top"  onChange={this.addAromaFruitFloral}>
                <option value="Top">Floral</option>
                <option value="Floral">FLORAL</option>
                <option value="Acadia">Acadia</option>
                <option value="Apple Blossom" >Apple Blossom</option>
                <option value="Gardenia">Gardenia</option>
                <option value="Geranium">Geranium </option>
                <option value="Honeysuckle">Honeysuckle</option>
                <option value="Lavender">Lavender</option>
                <option value="Orange Blossom">Orange Blossom</option>
                <option value="Perfume">Perfume</option>
                <option value="Rose">Rose</option>
                <option value="Violet">Violet</option>
            </select>
        )
    }


    addEarthSmell(){
        return (
            <select value="Top" onChange={this.addAromaEarthMineral}>
                <option value="Top">Earth</option>
                <option value="Earth">EARTH</option>
                <option value="Clay">Clay</option>
                <option value="Dirt">Dirt</option>
                <option value="Dusty">Dusty</option>
                <option value="Leather">Leather</option>
                <option value="Gamey">Gamey</option>
                <option value="Moss">Moss</option>
                <option value="Mushroom">Mushroom</option>

            </select>
        )
    }
    addMineralSmell(){
        return (
            <select value="Top" onChange={this.addAromaEarthMineral}>
                <option value="Top">Mineral</option>
                <option value="Mineral">MINERAL</option>
                <option value="Chalk">Chalk</option>
                <option value="Concrete Drying">Concrete Drying</option>
                <option value="Drywall">Drywall</option>
                <option value="Flint">Flint</option>
                <option value="Metallic">Metallic</option>
                <option value="Petrichor">Petrichor</option>
                <option value="Sheetrock">Sheetrock</option>
                <option value="Slate">Slate</option>
                <option value="Vitamin Jar">Vitamin Jar</option>
                <option value="Wet Granite">Wet Granite</option>
                <option value="Wet Sand">Wet Sand</option>
            </select>
        )
    }
    addPlantMatterSmell(){
        return (
            <select value="Top" onChange={this.addAromaEarthMineral}>
                <option value="Top">Plant Matter</option>
                <option value="Plant Matter">PLANT MATTER</option>
                <option value="Alfalfa">Alfalfa</option>
                <option value="Cut Grass">Cut Grass</option>
                <option value="Hay">Hay</option>
                <option value="Pine Sap">Pine Sap</option>
                <option value="Resin">Resin</option>
                <option value="Steamy">Steamy</option>
                <option value="Straw">Straw</option>
                <option value="Tea Leaves">Tea Leaves</option>
                <option value="Tobacco">Tobacco</option>
            </select>
        )
    }
    addHerbalSmell(){
        return (
            <select value="Top" onChange={this.addAromaEarthMineral}>
                <option value="Top">Herbal</option>
                <option value="Herbal">HERBAL</option>
                <option value="Basil">Basil</option>
                <option value="Dill">Dill</option>
                <option value="Eucalyptus">Eucalyptus</option>
                <option value="Herbal Tea">Herbal Tea</option>
                <option value="Menthol">Menthol</option>
                <option value="Mint">Mint</option>
                <option value="Rosemary">Rosemary</option>
                <option value="Tarragon">Tarragon</option>
            </select>
        )
    }
    addVegetableSmell(){
        return (
            <select value="Top" onChange={this.addAromaEarthMineral}>
                <option value="Top">Vegetable</option>
                <option value="Vegetable">VEGETABLE</option>
                <option value="Artichoke">Artichoke</option>
                <option value="Asparagus">Asparagus</option>
                <option value="Black Olive">Black Olive</option>
                <option value="Fennel">Fennel</option>
                <option value="Green Bean">Green Bean</option>
                <option value="Green Olive">Green Olive</option>
                <option value="Pepper">Pepper</option>
            </select>
        )
    }
    addWoodSmell(){
        return (
            <select value="Top" onChange={this.addAromaWoodSpice}>
                <option value="Top">Wood</option>
                <option value="Wood">WOOD</option>
                <option value="Cedar">Cedar</option>
                <option value="Decomposing Log">Decomposing Log</option>
                <option value="Oak">Oak</option>
                <option value="Pencil Shavings">Pencil Shavings</option>
                <option value="Sawdust">Sawdust</option>
                <option value="Tree Bark">Tree Bark</option>
            </select>
        )
    }
    addRoastedSmell(){
        return (
            <select value="Top" onChange={this.addAromaWoodSpice}>
                <option value="Top">Roasted</option>
                <option value="Roasted">ROASTED</option>
                <option value="Burnt Toast">Burnt Toast</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Cocoa Powder">Cocoa Powder</option>
                <option value="Coffee">Coffee</option>
                <option value="Biscuits">Biscuits</option>
                <option value="Mocha">Mocha</option>
                <option value="Roasted Nuts">Roasted Nuts</option>
                <option value="Toast">Toast</option>
                <option value="Toasted Coconut">Toasted Coconut</option>
            </select>
        )
    }
    addSmokeySmell(){
        return (
            <select value="Top" onChange={this.addAromaWoodSpice}>
                <option value="Top">Smokey</option>
                <option value="Smokey">SMOKEY</option>
                <option value="Campfire">Campfire</option>
                <option value="Toasted Wood">Toasted Wood</option>
                <option value="Bacon">Bacon</option>
                <option value="Peat">Peat</option>
            </select>
        )
    }
    addSpiceSmell(){
        return (
            <select value="Top" onChange={this.addAromaWoodSpice}>
                <option value="Top">Spice</option>
                <option value="Spice">SPICE</option>
                <option value="Black Licorice">Black Licorice</option>
                <option value="Chinese Five Spice">Chinese Five Spice</option>
                <option value="Cinnamon">Cinnamon</option>
                <option value="Clove">Clove</option>
                <option value="Dill">Dill</option>
                <option value="Nutmeg">Nutmeg</option>
                <option value="Black Pepper">Black Pepper</option>
                <option value="Star Anise">Star Anise</option>
                <option value="Vanilla">Vanilla</option>
            </select>
        )
    }
    addOxidationSmell(){
        return (
            <select value="Top" onChange={this.addAromaWoodSpice}>
                <option value="Top">Oxidation</option>
                <option value="Oxidation">OXIDATION</option>
                <option value="Brown Sugar">Brown Sugar</option>
                <option value="Burnt Sugar">Burnt Sugar</option>
                <option value="Butterscotch">Butterscotch</option>
                <option value="Carmel">Carmel</option>
                <option value="Caramelized Sugar">Caramelized Sugar</option>
                <option value="Crem Brulee">Crem Brulee</option>
                <option value="Honey">Honey</option>
                <option value="Molasses">Molasses</option>
                <option value="Soy Sauce">Soy Sauce</option>
            </select>
        )
    }
    addBiologicalSmell(){
        return (
            <select value="Top" onChange={this.addAromaBiologicalChemical}>
                <option value="Top">Biological</option>
                <option value="Biological">BIOLOGICAL</option>
                <option value="Barnyard">Barnyard</option>
                <option value="Butter">Butter</option>
                <option value="Cat Urine">Cat Urine</option>
                <option value="Horse Stable">Horse Stable</option>
                <option value="Manure">Manure</option>
                <option value="Mildew">Mildew</option>
                <option value="Moldy">Moldy</option>
                <option value="Mousey">Mousey</option>
                <option value="Rotting Meat">Rotting Meat</option>
                <option value="Skunk">Skunk</option>
                <option value="Spoiled Fruit">Spoiled Fruit</option>
                <option value="Sweaty">Sweaty</option>
                <option value="Vinegar">Vinegar</option>
                <option value="Wet Basement">Wet Basement</option>
                <option value="Wet Dog">Wet Dog</option>
                <option value="Wet Wool">Wet Wool</option>
                <option value="Yeast">Yeast</option>
            </select>
        )
    }
    addChemicalSmell(){
        return (
            <select value="Top" onChange={this.addAromaBiologicalChemical}>
                <option value="Top">Chemical</option>
                <option value="Chemical">CHEMICAL</option>
                <option value="Acrid">Acrid</option>
                <option value="Ammonia">Ammonia</option>
                <option value="Asphault">Asphault</option>
                <option value="Cloth">Cloth</option>
                <option value="Disinfectant">Disinfectant</option>
                <option value="Gasoline">Gasoline</option>
                <option value="Hospital">Hospital</option>
                <option value="Kerosene">Kerosene</option>
                <option value="Band-aid">Band-aid</option>
                <option value="Medicine">Medicine</option>
                <option value="Mothballs">Mothballs</option>
                <option value="Nail Polish Remover">Nail Polish Remover</option>
                <option value="Plastic">Plastic</option>
                <option value="Rubber Cement">Rubber Cement</option>
                <option value="Rubbing Alcohol">Rubbing Alcohol</option>
                <option value="Shoe Polish">Shoe Polish</option>
                <option value="Soapy">Soapy</option>
                <option value="Sulphur">Sulphur</option>
                <option value="Wet Newspaper">Wet Newspaper</option>
            </select>
        )
    }
















    addCitrusFlavor(){
        return (
            <select value="Top"  onChange={this.addFlavorFruitFloral}>
                <option value="Top">Citrus</option>
                <option value="Citrus">CITRUS</option>
                <option value="Grapefruit">Grapefruit</option>
                <option value="Lemon">Lemon</option>
                <option value="Lime">Lime</option>
                <option value="Orange">Orange</option>
                <option value="Tangerine">Tangerine</option>
            </select>
        )
    }
    addTreeFruitFlavor(){
        return (
            <select value="Top"  onChange={this.addFlavorFruitFloral}>
                <option value="Top">Tree Fruit</option>
                <option value="Tree Fruit">TREE FRUIT</option>
                <option value="Apple">Apple</option>
                <option value="Apricot">Apricot</option>
                <option value="Cherry">Cherry</option>
                <option value="Nectarine">Nectarine</option>
                <option value="Peach">Peach</option>
                <option value="Pear">Pear</option>
                <option value="Persimmon">Persimmon</option>
                <option value="Plum">Plum</option>
            </select>
        )
    }
    addBerriesFlavor(){
        return (
            <select value="Top"  onChange={this.addFlavorFruitFloral}>
                <option value="Top">Berries</option>
                <option value="Berries">BERRIES</option>
                <option value="Blackberry">Blackberry</option>
                <option value="Blueberry">Blueberry</option>
                <option value="Cranberry">Cranberry</option>
                <option value="Currant">Currant</option>
                <option value="Gooseberry">Gooseberry</option>
                <option value="Grape">Grape</option>
                <option value="Loganberry">Loganberry</option>
                <option value="Raspberry">Raspberry</option>
                <option value="Strawberry">Strawberry</option>
            </select>
        )
    }
    addTropicalFruitFlavor(){
        return (
            <select value="Top"  onChange={this.addFlavorFruitFloral}>
                <option value="Top">Tropical Fruit</option>
                <option value="Tropical Fruit">TROPICAL FRUIT</option>
                <option value="Asian Pear">Asian Pear</option>
                <option value="Banana">Banana</option>
                <option value="Guava">Guava</option>
                <option value="Kiwi">Kiwi</option>
                <option value="Lychee">Lychee</option>
                <option value="Mango">Mango</option>
                <option value="Melon">Melon</option>
                <option value="Papaya">Papaya</option>
                <option value="Passionfruit">Passionfruit</option>
                <option value="Pineapple">Pineapple</option>
                <option value="Plantain">Plantain</option>
                <option value="Star Fruit">Star Fruit</option>
            </select>
        )
    }
    addDriedFruitFlavor(){
        return (
            <select value="Top"  onChange={this.addFlavorFruitFloral}>
                <option value="Top">Dried Fruit</option>
                <option value="Dried Fruit">DRIED FRUIT</option>
                <option value="Date">Date</option>
                <option value="Fig">Fig</option>
                <option value="Golden Raisin">Golden Raisin</option>
                <option value="Jam & Jelly">Jam &amp; Jelly</option>
                <option value="Prune">Prune</option>
                <option value="Raisin">Raisin</option>
            </select>
        )
    }
    addArtificialFlavor(){
        return (
            <select value="Top"  onChange={this.addFlavorFruitFloral}>
                <option value="Top">Artificial</option>
                <option value="Artificial">ARTIFICIAL</option>
                <option value="Fruit Cocktail">Fruit Cocktail</option>
                <option value="Froot Loop">Froot Loop</option>
                <option value="Fruit Punch">Fruit Punch</option>
                <option value="Grape Soda">Grape Soda</option>
                <option value="Hard Candy">Hard Candy</option>
                <option value="Red Licorice">Red Licorice</option>
            </select>
        )
    }
    addFloralFlavor(){
        return ( // onClick={() => this.clearAroma("fruitFloral")
            <select value="Top"  onChange={this.addFlavorFruitFloral}>
                <option value="Top">Floral</option>
                <option value="Floral">FLORAL</option>
                <option value="Acadia">Acadia</option>
                <option value="Apple Blossom" >Apple Blossom</option>
                <option value="Gardenia">Gardenia</option>
                <option value="Geranium">Geranium </option>
                <option value="Honeysuckle">Honeysuckle</option>
                <option value="Lavender">Lavender</option>
                <option value="Orange Blossom">Orange Blossom</option>
                <option value="Perfume">Perfume</option>
                <option value="Rose">Rose</option>
                <option value="Violet">Violet</option>
            </select>
        )
    }


    addEarthFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorEarthMineral}>
                <option value="Top">Earth</option>
                <option value="Earth">EARTH</option>
                <option value="Clay">Clay</option>
                <option value="Dirt">Dirt</option>
                <option value="Dusty">Dusty</option>
                <option value="Leather">Leather</option>
                <option value="Gamey">Gamey</option>
                <option value="Moss">Moss</option>
                <option value="Mushroom">Mushroom</option>

            </select>
        )
    }
    addMineralFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorEarthMineral}>
                <option value="Top">Mineral</option>
                <option value="Mineral">MINERAL</option>
                <option value="Chalk">Chalk</option>
                <option value="Concrete Drying">Concrete Drying</option>
                <option value="Drywall">Drywall</option>
                <option value="Flint">Flint</option>
                <option value="Metallic">Metallic</option>
                <option value="Petrichor">Petrichor</option>
                <option value="Sheetrock">Sheetrock</option>
                <option value="Slate">Slate</option>
                <option value="Vitamin Jar">Vitamin Jar</option>
                <option value="Wet Granite">Wet Granite</option>
                <option value="Wet Sand">Wet Sand</option>
            </select>
        )
    }
    addPlantMatterFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorEarthMineral}>
                <option value="Top">Plant Matter</option>
                <option value="Plant Matter">PLANT MATTER</option>
                <option value="Alfalfa">Alfalfa</option>
                <option value="Cut Grass">Cut Grass</option>
                <option value="Hay">Hay</option>
                <option value="Pine Sap">Pine Sap</option>
                <option value="Resin">Resin</option>
                <option value="Steamy">Steamy</option>
                <option value="Straw">Straw</option>
                <option value="Tea Leaves">Tea Leaves</option>
                <option value="Tobacco">Tobacco</option>
            </select>
        )
    }
    addHerbalFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorEarthMineral}>
                <option value="Top">Herbal</option>
                <option value="Herbal">HERBAL</option>
                <option value="Basil">Basil</option>
                <option value="Dill">Dill</option>
                <option value="Eucalyptus">Eucalyptus</option>
                <option value="Herbal Tea">Herbal Tea</option>
                <option value="Menthol">Menthol</option>
                <option value="Mint">Mint</option>
                <option value="Rosemary">Rosemary</option>
                <option value="Tarragon">Tarragon</option>
            </select>
        )
    }
    addVegetableFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorEarthMineral}>
                <option value="Top">Vegetable</option>
                <option value="Vegetable">VEGETABLE</option>
                <option value="Artichoke">Artichoke</option>
                <option value="Asparagus">Asparagus</option>
                <option value="Black Olive">Black Olive</option>
                <option value="Fennel">Fennel</option>
                <option value="Green Bean">Green Bean</option>
                <option value="Green Olive">Green Olive</option>
                <option value="Pepper">Pepper</option>
            </select>
        )
    }
    addWoodFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorWoodSpice}>
                <option value="Top">Wood</option>
                <option value="Wood">WOOD</option>
                <option value="Cedar">Cedar</option>
                <option value="Decomposing Log">Decomposing Log</option>
                <option value="Oak">Oak</option>
                <option value="Pencil Shavings">Pencil Shavings</option>
                <option value="Sawdust">Sawdust</option>
                <option value="Tree Bark">Tree Bark</option>
            </select>
        )
    }
    addRoastedFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorWoodSpice}>
                <option value="Top">Roasted</option>
                <option value="Roasted">ROASTED</option>
                <option value="Burnt Toast">Burnt Toast</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Cocoa Powder">Cocoa Powder</option>
                <option value="Coffee">Coffee</option>
                <option value="Biscuits">Biscuits</option>
                <option value="Mocha">Mocha</option>
                <option value="Roasted Nuts">Roasted Nuts</option>
                <option value="Toast">Toast</option>
                <option value="Toasted Coconut">Toasted Coconut</option>
            </select>
        )
    }
    addSmokeyFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorWoodSpice}>
                <option value="Top">Smokey</option>
                <option value="Smokey">SMOKEY</option>
                <option value="Campfire">Campfire</option>
                <option value="Toasted Wood">Toasted Wood</option>
                <option value="Bacon">Bacon</option>
                <option value="Peat">Peat</option>
            </select>
        )
    }
    addSpiceFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorWoodSpice}>
                <option value="Top">Spice</option>
                <option value="Spice">SPICE</option>
                <option value="Black Licorice">Black Licorice</option>
                <option value="Chinese Five Spice">Chinese Five Spice</option>
                <option value="Cinnamon">Cinnamon</option>
                <option value="Clove">Clove</option>
                <option value="Dill">Dill</option>
                <option value="Nutmeg">Nutmeg</option>
                <option value="Black Pepper">Black Pepper</option>
                <option value="Star Anise">Star Anise</option>
                <option value="Vanilla">Vanilla</option>
            </select>
        )
    }
    addOxidationFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorWoodSpice}>
                <option value="Top">Oxidation</option>
                <option value="Oxidation">OXIDATION</option>
                <option value="Brown Sugar">Brown Sugar</option>
                <option value="Burnt Sugar">Burnt Sugar</option>
                <option value="Butterscotch">Butterscotch</option>
                <option value="Carmel">Carmel</option>
                <option value="Caramelized Sugar">Caramelized Sugar</option>
                <option value="Crem Brulee">Crem Brulee</option>
                <option value="Honey">Honey</option>
                <option value="Molasses">Molasses</option>
                <option value="Soy Sauce">Soy Sauce</option>
            </select>
        )
    }
    addBiologicalFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorBiologicalChemical}>
                <option value="Top">Biological</option>
                <option value="Biological">BIOLOGICAL</option>
                <option value="Barnyard">Barnyard</option>
                <option value="Butter">Butter</option>
                <option value="Cat Urine">Cat Urine</option>
                <option value="Horse Stable">Horse Stable</option>
                <option value="Manure">Manure</option>
                <option value="Mildew">Mildew</option>
                <option value="Moldy">Moldy</option>
                <option value="Mousey">Mousey</option>
                <option value="Rotting Meat">Rotting Meat</option>
                <option value="Skunk">Skunk</option>
                <option value="Spoiled Fruit">Spoiled Fruit</option>
                <option value="Sweaty">Sweaty</option>
                <option value="Vinegar">Vinegar</option>
                <option value="Wet Basement">Wet Basement</option>
                <option value="Wet Dog">Wet Dog</option>
                <option value="Wet Wool">Wet Wool</option>
                <option value="Yeast">Yeast</option>
            </select>
        )
    }
    addChemicalFlavor(){
        return (
            <select value="Top" onChange={this.addFlavorBiologicalChemical}>
                <option value="Top">Chemical</option>
                <option value="Chemical">CHEMICAL</option>
                <option value="Acrid">Acrid</option>
                <option value="Ammonia">Ammonia</option>
                <option value="Asphault">Asphault</option>
                <option value="Cloth">Cloth</option>
                <option value="Disinfectant">Disinfectant</option>
                <option value="Gasoline">Gasoline</option>
                <option value="Hospital">Hospital</option>
                <option value="Kerosene">Kerosene</option>
                <option value="Band-aid">Band-aid</option>
                <option value="Medicine">Medicine</option>
                <option value="Mothballs">Mothballs</option>
                <option value="Nail Polish Remover">Nail Polish Remover</option>
                <option value="Plastic">Plastic</option>
                <option value="Rubber Cement">Rubber Cement</option>
                <option value="Rubbing Alcohol">Rubbing Alcohol</option>
                <option value="Shoe Polish">Shoe Polish</option>
                <option value="Soapy">Soapy</option>
                <option value="Sulphur">Sulphur</option>
                <option value="Wet Newspaper">Wet Newspaper</option>
            </select>
        )
    }


}

/*

            <p>Age: {this.props.conclusions.age.min} to {this.props.conclusions.age.max}</p>
            <p>Barrel Aging: {this.props.conclusions.barrel.aging}, Wood: {this.props.conclusions.barrel.wood},
                Toast: {this.props.conclusions.barrel.toast}</p>





const Conclusions = createClass({
    render () {

        return(
        <div>
            <h3>Summary</h3>
            <p>Rob-bot can give suggested conclusions based on your tasting notes:</p>
            <p>Age: {this.props.conclusions.age.min} to {this.props.conclusions.age.max}</p>
            <p>Barrel Aging: {this.props.conclusions.barrel.aging}, Wood: {this.props.conclusions.barrel.wood},
                Toast: {this.props.conclusions.barrel.toast}</p>

            <p>Climate? {}</p>
            <p>Balance (alcohol, acid, tannin, sugar)? {}</p>
            <p>Origin List {}</p>
            <p>Style? {}</p>
            <p>Varietal List {}</p>
            <p>Quality/Rating {}</p>
        </div>
        )
    }
}
);


    min: number;
    max: number;
    aging: string;
    wood: string;
    toast: string;
*/





interface IUser {
    Name: string;
}

interface IFetchUserProps {
    children: (user: IUser) => JSX.Element;
}

class FetchUser extends React.Component<IFetchUserProps, any> {
    render() {
        return this.state
            ? this.props.children(this.state.result)
            : null;
    }
}


function UserName() {
    return (
        <FetchUser>
            {user => (
                <h1>{user.Name}</h1>
            )}
        </FetchUser>
    );
}


interface Prop {
    a: number,
    b: string,
    children: string | JSX.Element
}

function Comp(p: Prop) {
    return <div>{p.b}</div>;
}

// OK
let k1 = <Comp a={10} b="hi">
        <h2>Hello</h2>
    </Comp>
;





export default connect((state: ApplicationState) => state.blind, BlindStore.actionCreators)(Blind) as typeof Blind;