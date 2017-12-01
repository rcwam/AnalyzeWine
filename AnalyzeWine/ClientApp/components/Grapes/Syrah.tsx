import * as React from 'react';
import GrapeInterface from './GrapeInterface'

const Syrah:GrapeInterface ={
    varietal:'Syrah',
    wineType:'Red',
    production:185568,
    climate:{
        cold:false,
        cool:false,
        medium:true,
        warm:true,
        hot:true,
    },
    skin: {
        veryThick:false,
        thick:true,
        medium:true,
        thin:false,
        veryThin:false,
    },
    acidity:{
        veryHigh:false,
        high:false,
        medium:true,
        low:true,
        none:false,
    },
    viscosity: {
        high: false,
        medium: true,
        low: false,
    },
    tannins: {
        veryHigh:false,
        high: false,
        medium: true,
        low: false,
        veryLow:false,
        none:false,
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