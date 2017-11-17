/*
import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

let aging = "";
let wood = "";
let surLie = "";

class Lees extends Component <any, any> {
    render() {
        const { smellProfile} = this.props;

        let smell: string[];
        smell = [];
        smell = smell.concat(smellProfile.fruitFloral, smellProfile.earthMineral, smellProfile.biologicalChemical, smellProfile.woodSpice);

        // Light toasting toastedBread, Nuts
        let lightToasting = 0;
        if (smell.indexOf("Burnt Toast") > -1) {
            lightToasting++;
        }
        if (smell.indexOf("Toast") > -1) {
            lightToasting++;
        }
        if (smell.indexOf("Roasted Nuts") > -1) {
            lightToasting++;
        }
        // alert(lightToasting);
        // heavy toasting roasted coffee beans, dark chocolate
        let heavyToasting = 0;
        if (smell.indexOf("Coffee") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Dark Chocolate") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Chocolate") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Smoke") > -1) {
            heavyToasting++;
        }
        if (smell.indexOf("Charred Wood") > -1) {
            heavyToasting++;
        }

        // Oak Barrel
        let oakBarrel = 0;
        if (smell.indexOf("Vanilla") > -1) {
            oakBarrel++;
        }
        if (smell.indexOf("Cedar") > -1) {
            oakBarrel++;
        }
        if (smell.indexOf("Resin") > -1) {
            oakBarrel++;
        }
        if (smell.indexOf("Butterscotch") > -1) {
            oakBarrel++;
        }
        // French Oak
        // elegantVanilla, cinnamon, cloves, nutmeg
        let frenchOak = 0;
        if (smell.indexOf("Cinnamon") > -1) {
            frenchOak++;
        }
        if (smell.indexOf("Cloves") > -1) {
            frenchOak++;
        }
        if (smell.indexOf("Nutmeg") > -1) {
            frenchOak++;
        }

        // American Oak
        // aggressiveVanilla, toastedCoconut, dill
        let americanOak = 0;
        if (smell.indexOf("Coconut") > -1) {
            americanOak++;
        }
        if (smell.indexOf("Dill") > -1) {
            americanOak++;
        }

        let aging = "None";
        let wood = "None";
        let toast = "None";

        // Toast
        if (lightToasting + heavyToasting > 0) {
            wood = "Wood";
            toast = "Light";
            if (heavyToasting > 0) {
                toast = "Heavy";
            }
        }

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

        // Aging
        if (oakBarrel + frenchOak + americanOak + lightToasting + heavyToasting > 0) {
            aging = "Possible";
            if (oakBarrel + frenchOak + americanOak + lightToasting + heavyToasting > 2) {
                aging = "Likely";
            }
        }

        return (
            <div><p>Bulk Aging:</p> <ul><li>Barrel: {aging}</li><li>Wood: {wood}</li><li>Toast: {toast}</li></ul></div>
        )
    }

    componentWillReceiveProps(nextProps: any) {
        //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if (
            (this.props.smellProfile.fruitFloral != nextProps.smellProfile.fruitFloral) ||
            (this.props.smellProfile.earthMineral != nextProps.smellProfile.earthMineral) ||
            (this.props.smellProfile.biologicalChemical != nextProps.smellProfile.biologicalChemical) ||
            (this.props.smellProfile.woodSpice != nextProps.smellProfile.woodSpice)
        ) {
            this.updateBulkAging(aging,wood,toast)
        }
    }

    //   componentDidMount(){this.updateAge(fromAge,toAge)}
    updateBulkAging = (aging: string, wood: string, toast: string) => {
        this.props.setBulk(aging,wood,toast)
    };
}

function mapStateToProps (ApplicationState: any) {
    return {
        smellProfile: ApplicationState.blind.notes.nose.smellProfile,
    };
}

export default connect(mapStateToProps, BlindStore.actionCreators )(Lees) as typeof Lees;

*/