import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';

let climate:string = "";
let country:string[] = [];
let region:string[] = [];
let appellation:string[] = [];



class Place extends Component <any, any> {

    render() {
        const {acidity, body, climateProfile, smellAlcohol,  tasteAlcohol, viscosity} = this.props;

// POSITIVE is WARM, NEGATIVE is COOL
        let coolScore:number = 0;
        let intermediateScore:number = 0;
        let warmScore:number = 0;

        /**/

        // ACID
        switch (acidity) {
            case "High":
                coolScore = coolScore +2;
                break;
            case "Medium":
                intermediateScore = intermediateScore +2;
                break;
            case "Low":
                warmScore = warmScore +2;
                break;
            case "None":
                warmScore = warmScore +2;
                break;
            default:
                break;
        }

      //  alert("Acidity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);

        // ALCOHOL
        if (smellAlcohol == "High" || tasteAlcohol == "High") {
            warmScore = warmScore+2;
        }
        else {
            if (smellAlcohol == "Medium" || tasteAlcohol == "Medium") {
                intermediateScore = intermediateScore+2

            } else {
                if (smellAlcohol == "Low" || tasteAlcohol == "Low") {
                    coolScore=coolScore+2
                } else {
                    coolScore=coolScore+2;
                }
            }
        }

      //  alert("Alcohol = cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);

        // CLIMATE PROFILE
        coolScore = coolScore + climateProfile.cool;
        intermediateScore = intermediateScore + climateProfile.intermediate;
        warmScore = warmScore + climateProfile.warm;

     //   alert("Climate - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);

        // VISCOSITY
        if (body == "Thick" || viscosity == "Thick") {
            warmScore = warmScore +3;
        }
        else {
            if (body == "Medium" || viscosity == "Medium") {
                intermediateScore = intermediateScore +3;

            } else {
                if (body == "Thin" || viscosity == "Thin") {
                    coolScore = coolScore +3;
                } else {
                    coolScore = coolScore +3;
                }
            }
        }



     //   alert("Viscosity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);

        // <div><p>Place:</p> <ul><li>Climate: {climate}</li><li>Country: {country}</li><li>Region: {region}</li><li>Appellation: {appellation}</li></ul></div>
        // <div><p>Climate:</p> <ul><li>Cool: {coolScore}</li><li>Intermediate: {intermediateScore}</li><li>Warm: {warmScore}</li></ul></div>
        return (
            <div><p>Climate:</p> <ul><li>Cool: {coolScore}</li><li>Intermediate: {intermediateScore}</li><li>Warm: {warmScore}</li></ul></div>
        );


    }

    componentWillReceiveProps(nextProps: any) {
        //     alert("Will Receive Props " + this.props.smellProfile.fruitFloral + " to " + nextProps.smellProfile.fruitFloral);
        if (
            this.props.acidity != nextProps.acidity
            || this.props.body != nextProps.body
            || this.props.smellAlcoholl != nextProps.smellAlcohol
            || this.props.tasteAlcohol != nextProps.tasteAlcohol
            || this.props.viscosity != nextProps.viscosity
            || this.props.climateProfile.cool != nextProps.climateProfile.cool
            || this.props.climateProfile.intermediate != nextProps.climateProfile.intermediate
            || this.props.climateProfile.warm != nextProps.climateProfile.warm
        ) {
            //     this.updatePlace(climate,country,region,appellation)
        }
    }

    //   componentDidMount(){this.updateAge(fromAge,toAge)}
    /*
    updateClimate = (aging: string, wood: string, toast: string) => {
        this.props.setPlace(climate, country, region, appellation)
    };
    */
}

function mapStateToProps (ApplicationState: any) {
    return {
        acidity: ApplicationState.blind.notes.palate.acidity,
        body: ApplicationState.blind.notes.palate.body,
        smellAlcohol: ApplicationState.blind.notes.nose.smellAlcohol,
      //  sweetness: ApplicationState.blind.palate.sweetness,
        tasteAlcohol: ApplicationState.blind.notes.palate.tasteAlcohol,
        viscosity: ApplicationState.blind.notes.eye.viscosity,

        climateProfile: ApplicationState.blind.conclusions.SomBot.chemicals.climateProfile,


    };
}

export default connect(mapStateToProps, BlindStore.actionCreators )(Place) as typeof Place;

