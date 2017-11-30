import * as React from 'react';
import GrapeInterface from './GrapeInterface'

const CabernetSauvignon:GrapeInterface ={
    varietal:'Cabernet Sauvignon',
wineType:'Red',
    production:290091,
    climate:{
        cool:true,
        medium:true,
        warm:true,
    },
    skin: {
        thick:true,
        medium:false,
        thin:false,
    },
    acidity:{
        high:false,
        medium:true,
        low:true,
    },
    viscosity: {
        high: true,
        medium: false,
        low: false,
    },
    tannins: {  // not typically needed for white whine
        high: true,
        medium: false,
        low: false,
    },
    characteristics:{
        general:['Black Currant','Plum','Black Cherry','Mint','Bell Pepper','Cedar','Vanilla','Wet Dog'],
    },
    style: {
        country:{
            countries:['France','United States'],
        },
        region:{
            regions:[['France', 'Bordeaux'],['United States','California']],
        },
    }


};

export default CabernetSauvignon;