import * as React from 'react';
import GrapeInterface from './GrapeInterface'

const Merlot:GrapeInterface ={
    varietal :'Merlot',
    wineType:'Red',
    production: 267169,
    climate:{
        cold:false,
        cool:true,
        medium:true,
        warm:true,
        hot:false,
    },
    skin: {
        veryThick:true,
        thick:true,
        medium:false,
        thin:false,
        veryThin:false,
    },
    acidity:{
        veryHigh:false,
        high:false,
        medium:false,
        low:true,
        none:false,
    },
    viscosity: {
        high: true,
        medium: true,
        low: false,
    },
    tannins: {
        veryHigh:false,
        high: true,
        medium: true,
        low: false,
        veryLow:false,
        none:false,
    },
    characteristics:{
        general:['Blueberry','Black Cherry','Plum','Chocolate','Spice','Cedar','Vanilla'],
        byAge:{ // bottle aging
            young: ['Dark Berry'],
         },
    },
    style: {
        country:{
            countries:['France','United States'],
        },
        region:{
            regions:[['France', 'Bordeaux'],['United States','California'],['United States','Washington']],
            climate: [['Washington', 'Cool']], // Region, [Cool, Intermediate, Warm]
         },
    }

};

export default Merlot;