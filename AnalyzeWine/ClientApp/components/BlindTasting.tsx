import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
//import  Select  from 'react-select';
//import {Collapse} from 'react-collapse';
//import Collapsible from 'react-collapsible';
import { ApplicationState } from '../store';
import * as BlindStore from '../store/Blind';


type BlindProps =
    BlindStore.BlindTastingState
    & typeof BlindStore.actionCreators
    & RouteComponentProps<{}>;

class Blind extends React.Component<BlindProps, {}> {
    changeWineType(e: any) {
        this.props.setWineType(e.target.value);
    }

    // Change Sight State
    changeColor(e: any) {
        this.props.setColor(e.target.value);
    }
    changeDepth(e: any) {
        this.props.setDepth(e.target.value);
    }
    changeClarity(e: any) {
        this.props.setClarity(e.target.value);
    }
    changeSediment(e: any) {
        this.props.setSediment(e.target.value);
    }
    changeViscosity(e: any) {
        this.props.setViscosity(e.target.value);
    }
    changeCarbonation(e: any) {
        this.props.setCarbonation(e.target.value);
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

        // Taste Constructors
        this.changeTasteIntensity = this.changeTasteIntensity.bind(this);
        this.changeTasteComplexity = this.changeTasteComplexity.bind(this);
        this.changeBody = this.changeBody.bind(this);
        this.changeSweetness = this.changeSweetness.bind(this);
        this.changeAcidity = this.changeAcidity.bind(this);
        this.changeTannins = this.changeTannins.bind(this);
        this.changeTasteAlcohol = this.changeTasteAlcohol.bind(this);
        this.changeFinish = this.changeFinish.bind(this);
    }


    public render() {
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

            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseAromaProfile" aria-expanded="true" aria-controls="collapseAromaProfile">
                Aroma Profile
            </button>
            <div className="collapse" id="collapseAromaProfile">
                <div className="well">



            <p/>
            <p><i>Fruit &amp; Floral</i> : <b>Lemon : Raspberry : Carrot</b>  <button>Clear</button></p>

            <select value="Citrus"><option value="Citrus">Citrus</option></select>
            <select value="Tree Fruit"><option value="Tree Fruit">Tree Fruit</option></select>
            <select value="Berries"><option value="Berries">Berries</option></select>
            <select value="Tropical Fruit"><option value="Tropical Fruit">Tropical Fruit</option></select>
            <select value="Dried Fruit"><option value="Dried Fruit">Dried Fruit</option></select>
            <select value="Artificial"><option value="Artificial">Artificial</option></select>
            <select value="Floral"><option value="Floral">Floral</option></select>

            <p/>
            <p><i>Earth &amp; Mineral</i> : <b>Dirt</b>  <button>Clear</button></p>

            <select value="Earthy"><option value="Earthy">Earthy</option></select>
            <select value="Mineral"><option value="Mineral">Mineral</option></select>
            <select value="Plant Matter"><option value="Plant Matter">Plant Matter</option></select>
            <select value="Herbal"><option value="Herbal">Herbal</option></select>
            <select value="Vegetable"><option value="Vegetable">Vegetable</option></select>

            <p/>
            <p><i>Wood &amp; Spice</i> : <b>Smoke : Toast : Hazelnut</b>  <button>Clear</button></p>

            <select value="Wood"><option value="Wood">Wood</option></select>
            <select value="Roasted"><option value="Roasted">Roasted</option></select>
            <select value="Smokey"><option value="Smokey">Smokey</option></select>
            <select value="Spice"><option value="Spice">Spice</option></select>
            <select value="Oxidation"><option value="Oxidation">Oxidation</option></select>

            <p/>
            <p><i>Biological &amp; Chemical</i> : <b>Bacon : Chlorine</b>  <button>Clear</button></p>

            <select value="Biological"><option value="Biological">Biological</option></select>
            <select value="Chemical"><option value="Chemical">Chemical</option></select>

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

            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseFlavorProfile" aria-expanded="true" aria-controls="collapseFlavorProfile">
                Flavor Profile
            </button>
            <div className="collapse" id="collapseFlavorProfile">
                <div className="well">

            <p/>
            <p><i>Fruit &amp; Floral</i> : <b>Lemon : Raspberry : Carrot</b>  <button>Clear</button></p>

            <select value="Citrus"><option value="Citrus">Citrus</option></select>
            <select value="Tree Fruit"><option value="Tree Fruit">Tree Fruit</option></select>
            <select value="Berries"><option value="Berries">Berries</option></select>
            <select value="Tropical Fruit"><option value="Tropical Fruit">Tropical Fruit</option></select>
            <select value="Dried Fruit"><option value="Dried Fruit">Dried Fruit</option></select>
            <select value="Artificial"><option value="Artificial">Artificial</option></select>
            <select value="Floral"><option value="Floral">Floral</option></select>

            <p/>
            <p><i>Earth &amp; Mineral</i> : <b>Dirt</b>  <button>Clear</button></p>

            <select value="Earthy"><option value="Earthy">Earthy</option></select>
            <select value="Mineral"><option value="Mineral">Mineral</option></select>
            <select value="Plant Matter"><option value="Plant Matter">Plant Matter</option></select>
            <select value="Herbal"><option value="Herbal">Herbal</option></select>
            <select value="Vegetable"><option value="Vegetable">Vegetable</option></select>

            <p/>
            <p><i>Wood &amp; Spice</i> : <b>Smoke : Toast : Hazelnut</b>  <button>Clear</button></p>

            <select value="Wood"><option value="Wood">Wood</option></select>
            <select value="Roasted"><option value="Roasted">Roasted</option></select>
            <select value="Smokey"><option value="Smokey">Smokey</option></select>
            <select value="Spice"><option value="Spice">Spice</option></select>
            <select value="Oxidation"><option value="Oxidation">Oxidation</option></select>

            <p/>
            <p><i>Biological &amp; Chemical</i> : <b>Bacon : Chlorine</b>  <button>Clear</button></p>

            <select value="Biological"><option value="Biological">Biological</option></select>
            <select value="Chemical"><option value="Chemical">Chemical</option></select>
                </div>
            </div>
            <hr/>

            <h3>Summary</h3>
            <p>Age? {}</p>
            <p>Climate? {}</p>
            <p>Balance (alcohol, acid, tannin, sugar)? {}</p>
            <p>Origin List {}</p>
            <p>Style? {}</p>
            <p>Varietal List {}</p>
            <p>Quality/Rating {}</p>

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
                <option value="Greenish">Greenish</option>
                <option value="Yellow">Yellow</option>
                <option value="Straw">Straw</option>
                <option value="Golden">Golden</option>
                <option value="Amber">Amber</option>
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
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
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
                <option value="Very Long">Very Long (>8 sec)</option>
            </select>
        );
    }






}

export default connect((state: ApplicationState) => state.blind, BlindStore.actionCreators)(Blind) as typeof Blind;