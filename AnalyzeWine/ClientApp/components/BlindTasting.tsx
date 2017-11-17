import * as React from 'react';
import  {Component} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as BlindStore from '../store/Blind';
import BotConclusions from './Conclusions'
import EyeAnalysis from './EyeAnalysis'
import NoseAnalysis from './NoseAnalysis'
import ChemicalAnalysis from "./somBot/ChemicalAnalysis";


type BlindProps =
    BlindStore.BlindTastingState
    & typeof BlindStore.actionCreators
    & RouteComponentProps<{}>;

class Blind extends Component<BlindProps, {}> {

    changeWineType(e: any) {
        this.props.setWineType(e.target.value);
    }

    // Change Smell State
    changeSmellIntensity(e: any) {
        this.props.setSmellIntensity(e.target.value);
    }

    changeSmellComplexity(e: any) {
        this.props.setSmellComplexity(e.target.value);
    }

    changeSmellAlcohol(e: any) {
        this.props.setSmellAlcohol(e.target.value);
    }

    addAromaFruitFloral(e: any) {
        this.props.addAroma(e.target.value, "fruitFloral");
    }

    addAromaEarthMineral(e: any) {
        this.props.addAroma(e.target.value, "earthMineral");
    }

    /* Should these all be converted to arrow functions? */
    addAromaWoodSpice = (e: any) => {
        this.props.addAroma(e.target.value, "woodSpice");
    };

    addAromaBiologicalChemical(e: any) {
        this.props.addAroma(e.target.value, "biologicalChemical");
    }

    clearAroma(aromaCategory: string) {
        this.props.clearAroma(aromaCategory);
    }

    // Change Taste State
    changeTasteIntensity(e: any) {
        this.props.setTasteIntensity(e.target.value);
    }

    changeTasteComplexity(e: any) {
        this.props.setTasteComplexity(e.target.value);
    }

    changeBody(e: any) {
        this.props.setBody(e.target.value);
    }

    changeSweetness(e: any) {
        this.props.setSweetness(e.target.value);
    }

    changeAcidity(e: any) {
        this.props.setAcidity(e.target.value);
    }

    changeTannins(e: any) {
        this.props.setTannins(e.target.value);
    }

    changeTasteAlcohol(e: any) {
        this.props.setTasteAlcohol(e.target.value);
    }

    changeFinish(e: any) {
        this.props.setFinish(e.target.value);
    }

    addFlavorFruitFloral(e: any) {
        this.props.addFlavor(e.target.value, "fruitFloral");
    }

    addFlavorEarthMineral(e: any) {
        this.props.addFlavor(e.target.value, "earthMineral");
    }

    addFlavorWoodSpice(e: any) {
        this.props.addFlavor(e.target.value, "woodSpice");
    }

    addFlavorBiologicalChemical(e: any) {
        this.props.addFlavor(e.target.value, "biologicalChemical");
    }

    clearFlavor(flavorCategory: string) {
        this.props.clearFlavor(flavorCategory);
    }



    constructor() {
        super();
        this.changeWineType = this.changeWineType.bind(this);

        // Sight Constructors

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
    }

    public render()  {

        return <div>
            <h3>Choose Type</h3>
            <p>What type of wine are you analyzing? {this.selectTypeList()} </p>

            <hr/>


            <EyeAnalysis/>

                     <hr/>

            <NoseAnalysis/>



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
            <ChemicalAnalysis />

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
                <option value="Passion Fruit">Passion Fruit</option>
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
                <option value="Chamomile">Chamomile</option>
                <option value="Elderflower">Elderflower</option>
                <option value="Gardenia">Gardenia</option>
                <option value="Geranium">Geranium</option>
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
                <option value="Charred Wood">Toasted Wood</option>
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

export default connect((state: ApplicationState) => state.blind, BlindStore.actionCreators)(Blind) as typeof Blind;