import * as React from 'react';
import GrapeInterface from './GrapeInterface'

const Syrah:GrapeInterface ={
    varietal:'Syrah',
    wineType:'Red',
    production:185568,
    climate:{
        cool:false,
        medium:true,
        warm:true,
    },
    skin: {
        thick:true,
        medium:true,
        thin:false,
    },
    acidity:{
        high:false,
        medium:true,
        low:true,
    },
    viscosity: {
        high: false,
        medium: true,
        low: false,
    },
    tannins: {  // not typically needed for white whine
        high: false,
        medium: true,
        low: false,
    },
    characteristics:{
        general:['Blackberry','Raspberry','Jam','Leather','Black Pepper','Smoke','Meat','Gamey'],
    },
    style: {
        country:{
            countries:['France','Australia','South Africa'],
            alias: [['Australia','Shiraz'],['South Africa','Shiraz']],
            characteristics:[['Australia',['Jammy','Berry']]],
        },
        region:{
            regions:[['France', 'Rhone Valley']],
            characteristics:[['Rhone Valley',['Dark Berry','Peppercorn','Smoked Meat']]], // Region, List
        },
    }


};

export default Syrah;