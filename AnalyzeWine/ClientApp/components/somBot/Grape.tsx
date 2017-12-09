
//import { ApplicationState } from '../../store';

import * as React from 'react';
import  {Component} from 'react';
import {connect} from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom';
import * as BlindStore from '../../store/Blind';
//import GrapeInterface from '../Grapes/GrapeInterface'
import CabernetSauvignon from '../Grapes/CabernetSauvignon'
import Merlot from '../Grapes/Merlot'
import Chardonnay from '../Grapes/Chardonnay'
import Syrah from '../Grapes/Syrah'
import SauvignonBlanc from '../Grapes/SauvignonBlanc'
import PinotNoir from '../Grapes/PinotNoir'
import Riesling from '../Grapes/Riesling'
import PinotGris from '../Grapes/PinotGris'


let viscosityBody="";
let country:string[] = [];
let region:[string,string][] = [];
//let appellation:string[] = [];

/**
interface grapeScore{
    score:number,
    grape:GrapeInterface
}
 */
//let grapeList :grapeList[] =[];

let grapeList =[
    CabernetSauvignon,
    Merlot,
    Chardonnay,
    Syrah,
    SauvignonBlanc,
    PinotNoir,
    Riesling,
    PinotGris,
    ];

let climate={
    cold:false,
    cool:false,
    medium:false,
    warm:false,
    hot:false,
};

class Grape extends Component <any, any> {

    render() {
        const {acidity, body, smellAlcohol,  tasteAlcohol, viscosity, wineType,depth,tannins} = this.props;

        grapeList =[
            CabernetSauvignon,
            Merlot,
            Chardonnay,
            Syrah,
            SauvignonBlanc,
            PinotNoir,
            Riesling,
            PinotGris,
        ];

        climate={
            cold:false,
            cool:false,
            medium:false,
            warm:false,
            hot:false,
        };

        country=[];
        region=[];

        /*
               let test = grapeList.filter(function (list) {
                  return list.grape.varietal=="Chardonnay";
               });
               alert("Start : Grape = "+test[0].grape.varietal);
              */

        // TYPE
        switch (wineType) {
            case "Red":
                 grapeList = grapeList.filter(function(grape) {
                    return grape.wineType == 'Red' ;
                });
                break;
            case "White":
                grapeList = grapeList.filter(function(grape) {
                    return grape.wineType == 'White' ;
                });
                break;
            case "Rose":
                grapeList = grapeList.filter(function(grape) {
                    return grape.wineType == 'Rose' ;
                });
                break;
            default:
                break;
        }


        /*
        test = grapeList.filter(function (list) {
            return list.grape.varietal=="Chardonnay";
        });
        let testBool = test!=name;
        alert("Type : Chardonnay = "+String(testBool));
        */

        // SKIN
        switch (depth){
            case "Watery":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.skin != null) {
                        return grape.skin.veryThin == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "Pale":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.skin != null) {
                        return grape.skin.thin == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.skin != null) {
                        return grape.skin.medium == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "Deep":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.skin != null) {
                        return grape.skin.thick == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "Dark":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.skin != null) {
                        return grape.skin.veryThick == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
        }


        /*
        test = grapeList.filter(function (list) {
            return list.grape.varietal=="Chardonnay";
        });
        testBool = test!=name;
        alert("Skin : Chardonnay = "+String(testBool));
        */

        // ACIDITY
        switch (acidity) {
            case "Very High":
                grapeList = grapeList.filter(function(grape) {
                    return grape.acidity.veryHigh == true ;
                });

                break;
            case "High":
                grapeList = grapeList.filter(function(grape) {
                    return grape.acidity.high == true ;
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function(grape) {
                    return grape.acidity.medium == true ;
                });
                break;
            case "Low":
                grapeList = grapeList.filter(function(grape) {
                    return grape.acidity.low == true ;
                });
                break;
            case "None":
                grapeList = grapeList.filter(function(grape) {
                    return grape.acidity.none == true ;
                });
                break;

        }

        /*
        test = grapeList.filter(function (list) {
            return list.grape.varietal=="Chardonnay";
        });
        testBool = test!=name;
        alert("Acid : Chardonnay = "+String(testBool));
        */

        // VISCOSITY
        if (body == "Thick" || viscosity == "Thick") {
            viscosityBody="Thick";
            climate.hot=true;
            climate.warm=true;
        }
        else {
            if (body == "Medium" || viscosity == "Medium") {
                viscosityBody = "Medium";
                climate.medium=true;
            } else {
                viscosityBody = "Thin";
                climate.cool=true;
                climate.cold=true;
            }
        }

        switch (viscosityBody) {
            case "Thick":
                grapeList = grapeList.filter(function (grape) {
                    return grape.viscosity.high == true;
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function (grape) {
                    return grape.viscosity.medium == true;
                });
                break;
            case "Thin":
                grapeList = grapeList.filter(function (grape) {
                    return grape.viscosity.low == true;
                });
                break;
        }

        // TANNINS (Should correlate with Skin Thickness)
        switch (tannins){
            case "Very High":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.tannins != null) {
                        return grape.tannins.veryHigh == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "High":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.tannins != null) {
                        return grape.tannins.high == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "Medium":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.tannins != null) {
                        return grape.tannins.medium == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "Low":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.tannins != null) {
                        return grape.tannins.low == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "Very Low":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.tannins != null) {
                        return grape.tannins.veryLow == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
            case "None":
                grapeList = grapeList.filter(function(grape) {
                    if(grape.tannins != null) {
                        return grape.tannins.none == true;
                    }
                    else{
                        return grapeList;
                    }
                });
                break;
        }

        // CLIMATE [ ACID , ALCOHOL , VISCOSITY ]


        //  alert("Acidity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);

        // ALCOHOL
        if (smellAlcohol == "High" || tasteAlcohol == "High") {
            climate.hot=true;
            climate.warm=true;
        }
        else {
            if (smellAlcohol == "Medium" || tasteAlcohol == "Medium") {
                climate.medium=true;

            } else {
                climate.cool=true;
                climate.cold=true;
            }
        }

        // COUNTRY
        grapeList.forEach(function (place) {
            if (place.style != null) {
                if (place.style.country != null) {
                    if (place.style.country.countries != null) {
                        country = country.concat(place.style.country.countries)
                    }
                }
            }
        });
        country  = country.filter((val, id, array) => {
            return array.indexOf(val) == id;
        });

        // Create Country Score
        let countryScore=country.map(function (country) {
            return {country:country,score:0}
        });

               // Score On Popularity
        for (let i = 0; i<countryScore.length; i++) {
            grapeList.map(function (grape) {
                if (grape.style != null) {
                    if (grape.style.country != null) {
                        if (grape.style.country.production != null) {

                            let grapeCountry = grape.style.country.production.map(function (item) {
                                return item[0]
                            });

                            let grapeCountryIndex = grapeCountry.indexOf(countryScore[i].country, 0);
                            if(grapeCountryIndex!=-1) {

                                let countryProduction = grape.style.country.production[grapeCountryIndex][1];

                                //    alert(displayCountry.country+" "+countryProduction);
                                //  if (grape.style.country.production[grapeCountryIndex][0] == displayCountry.country) {
                                // alert(countryWS.country+" "+grape.varietal+" "+grape.style.country.production[countryIndex][1] / grape.production);
                                if (countryScore[i].country == grapeCountry[grapeCountryIndex]) {
                                    countryScore[i].score = countryScore[i].score + countryProduction / grape.production;
                             //       alert("Inner Loop " + countryScore[i].country + " " + countryScore[i].score)
                                }
                            }

                            //    }
                        }
                    }
                   // alert(grape.varietal)
                }
             //   alert(countryScore[i].country +" for "+grape.varietal +" "+(i+1)+" of "+countryScore.length)
            })}
       //     alert('Done');

        /*
        let displayCountryIndex =-1;
        countryScore.map(function (displayCountry) {
            displayCountryIndex++;
            grapeList.map(function (grape) {
            //    alert(grape.varietal);

                if (grape.style != null) {

                    if (grape.style.country != null) {

                        if (grape.style.country.production != null) {

                            let grapeCountryOnly = grape.style.country.production.map(function (item) {
                                return item[0]
                            });
                            let grapeCountryIndex = grapeCountryOnly.indexOf(displayCountry.country, 0);
                            //let displayCountryIndex =
                            let countryProduction = grape.style.country.production[grapeCountryIndex][1];

                            //    alert(displayCountry.country+" "+countryProduction);
                            //  if (grape.style.country.production[grapeCountryIndex][0] == displayCountry.country) {
                                // alert(countryWS.country+" "+grape.varietal+" "+grape.style.country.production[countryIndex][1] / grape.production);
                                countryScore[displayCountryIndex].score =countryScore[displayCountryIndex].score+  countryProduction / grape.production;
                              alert("1 "+countryScore[displayCountryIndex].country + " " + countryScore[displayCountryIndex].score)
                        //    }
                        }
                    }
                }
            })
        });
        */





        // REGION
        grapeList.forEach(function (place) {
            if (place.style != null) {
                if (place.style.region != null) {
                    if (place.style.region.regions != null) {
                        region = region.concat(place.style.region.regions)
                    }
                }
            }
        });
        // Combine Country and Region
        let  regionList = region.map(function (region) {
            return region[0] +": "+region[1];
        });
        // Filter by unique combo
         regionList  = regionList.filter((val, id, array) => {
            return array.indexOf(val) == id;
        });


        regionList = regionList.sort();



        /*

        if(!climate.cold){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.cold==false;
        })}
        if(!climate.cool){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.cool==false;
        })}
        if(!climate.medium){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.medium==false;
        })}
        if(!climate.warm){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.warm==false;
        })}
        if(!climate.hot){grapeList=grapeList.filter(function (grape) {
            return grape.grape.climate.hot==false;
        })}

        */


        //   alert("Climate - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);





        //   alert("Viscosity - cool "+coolScore+" intermediate "+intermediateScore+' warm '+warmScore);

        // <div><p>Place:</p> <ul><li>Climate: {climate}</li><li>Country: {country}</li><li>Region: {region}</li><li>Appellation: {appellation}</li></ul></div>
        // <div><p>Climate:</p> <ul><li>Cool: {coolScore}</li><li>Intermediate: {intermediateScore}</li><li>Warm: {warmScore}</li></ul></div>
        return (
            <div>
            <div><p>Varietal:</p> <ul>{grapeList.map(function (grape) {
                return <li>{grape.varietal}</li>
            })}</ul></div>
                <div>
                    <p>Climate:</p>
                    <ul>
                        <li>Hot: {String(climate.hot)}</li>
                        <li>Warm: {String(climate.warm)}</li>
                        <li>Medium: {String(climate.medium)}</li>
                        <li>Cool: {String(climate.cool)}</li>
                        <li>Cold: {String(climate.cold)}</li>
                    </ul>
                </div>
                <div><p>Countries:</p> <ul>{countryScore.sort((a, b) => b.score-a.score).map(function (place) {
                    return <li>{String(place.country)}</li>
                })}</ul></div>
                <div><p>Regions:</p> <ul>{regionList.map(function (place) {
                    return <li>{place}</li>
                })}</ul></div>
            </div>
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
            || this.props.wineType != nextProps.wineType
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
        wineType:ApplicationState.blind.notes.eye.wineType,
        depth:ApplicationState.blind.notes.eye.depth,
        acidity: ApplicationState.blind.notes.palate.acidity,
        body: ApplicationState.blind.notes.palate.body,
        smellAlcohol: ApplicationState.blind.notes.nose.smellAlcohol,
        //  sweetness: ApplicationState.blind.palate.sweetness,
        tasteAlcohol: ApplicationState.blind.notes.palate.tasteAlcohol,
        viscosity: ApplicationState.blind.notes.eye.viscosity,
        tannins:ApplicationState.blind.notes.palate.tannins,

        climateProfile: ApplicationState.blind.conclusions.SomBot.chemicals.climateProfile,


    };
}


export default connect(mapStateToProps, BlindStore.actionCreators )(Grape) as typeof Grape;

