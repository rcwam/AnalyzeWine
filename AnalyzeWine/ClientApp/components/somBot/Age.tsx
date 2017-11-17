import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

let fromAge = 0;
let toAge = 0;

class Age extends Component <any, any> {
    render() {
        const {wineType, color, sediment, tannins, toast, smellProfile} = this.props;

        let minAge = 0;
        let maxAge = 0;
        if (sediment == ("Light" || "Heavy")) {
            minAge = 5;
            maxAge = 99;
        } else {
            // Initial guess based on color
            switch (wineType) {
                case "Red":
                    switch (color) {
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
                    switch (color) {
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
                    switch (color) {
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
        if (toast == "Light") {
            minAge = minAge - 1;
            maxAge = maxAge - 1;
        }
        if (toast == "Heavy") {
            minAge = minAge - 2;
            maxAge = maxAge - 2;
        }

        // Use aroma group to verify the final guess.
        const smellFruitFloraCount = smellProfile.fruitFloral.length;
        const smellEarthMineralCount = smellProfile.earthMineral.length;
        const smellBiologicalChemicalCount = smellProfile.biologicalChemical.length;

        // take into account the expected type of wine?
        if (smellFruitFloraCount > smellEarthMineralCount) {
            if (smellFruitFloraCount > smellBiologicalChemicalCount) {
                minAge = Math.min(minAge, 3);  // three years or less
                if (tannins === "Harsh" || "Astringent" || "Aggressive") {
                    maxAge = Math.min(maxAge, 5);  // five years or less
                }
            }
        }

        if (smellBiologicalChemicalCount > smellEarthMineralCount) {
            if (smellBiologicalChemicalCount > smellFruitFloraCount) {
                minAge = Math.max(minAge, 5);  // at least five years
            }
        }

        // Expand Results
        // minAge--;
        // maxAge++;

        minAge = Math.max(0, minAge);        // minAge is positive
        maxAge = Math.max(minAge + 1, maxAge);  // maxAge is at least one year longer than minAge
        minAge = Math.min(99, minAge);
        maxAge = Math.min(99, maxAge);

        fromAge = minAge;
        toAge = maxAge;

        return (
            <div>Age: {minAge} to {maxAge} years</div>

        )
    }

    componentWillMount() {
 //       alert("Will Mount")
    }

    componentDidMount() {
  //      alert("Did Mount")
    }

    componentWillReceiveProps(nextProps: any) {
   //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if (
            (this.props.wineType != nextProps.wineType) ||
            (this.props.color != nextProps.color) ||
            (this.props.sediment != nextProps.sediment) ||
            (this.props.tannins != nextProps.tannins) ||
            (this.props.toast != nextProps.toast) ||
            (this.props.smellProfile.fruitFloral != nextProps.smellProfile.fruitFloral) ||
            (this.props.smellProfile.earthMineral != nextProps.smellProfile.earthMineral) ||
            (this.props.smellProfile.biologicalChemical != nextProps.smellProfile.biologicalChemical) ||
            (this.props.smellProfile.woodSpice != nextProps.smellProfile.woodSpice)
        ) {
            this.updateAge(fromAge, toAge)
        }
    }

    //   shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any) {    }
    componentWillUpdate() {
 //       alert("Will Update")
    }

    componentDidUpdate() {
 //       alert("Did Update")
    }

    //   componentDidMount(){this.updateAge(fromAge,toAge)}
    updateAge = (fromAge: number, toAge: number) => {
        this.props.setAge(fromAge, toAge)
    };
}

function mapStateToProps (ApplicationState: any) {
    return {
        wineType: ApplicationState.blind.notes.eye.wineType,
        color: ApplicationState.blind.notes.eye.color,
        sediment: ApplicationState.blind.notes.eye.sediment,
        tannins: ApplicationState.blind.notes.palate.tannins,
        toast: ApplicationState.blind.conclusions.SomBot.viniculture.bulkAging.barrel.toast,
        smellProfile: ApplicationState.blind.notes.nose.smellProfile,
    };
}

const AgeExport = connect(mapStateToProps, BlindStore.actionCreators )(Age) as typeof Age;
export default AgeExport
