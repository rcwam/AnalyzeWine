import * as React from 'react';

interface GrapeInterface {
    varietal: string,
    wineType: string,
    production: number, // 2010 hectares
    climate: {
        cool: boolean,
        medium: boolean,
        warm: boolean,
    },
    skin?: {  // not typically needed for white whine
        thick: boolean,
        medium: boolean,
        thin: boolean,
    },
    acidity: {
        high: boolean,
        medium: boolean,
        low: boolean,
    },
    viscosity: {
        high: boolean,
        medium: boolean,
        low: boolean,
    },
    tannins?: {  // not typically needed for white whine
        high: boolean,
        medium: boolean,
        low: boolean,
    },
    characteristics:{
        general:string[],
        byClimate?:{ // implied ripeness
            cool?: string[],
            medium?: string[],
            warm?: string[],
        },
        byAge?:{ // bottle aging
            young?: string[], // Apple, Banana, Cherry
            middleAge?: string[],
            old?: string[],
        },
        pairing?:string[],
    },
    style?: {
        country?:{
            countries?:string[],
            alias?: [string,string][], // Country, Grape Name
            production?: [string,number][], // Country, Production
            climate?: [string, string][], // Country, [Cool, Intermediate, Warm]
            bulkAging?: [string,string][], // Country, [American, French, Inert]
            sweetness?: [string,string][], // Country, [Dry, Sweet, Dessert]
            characteristics?:[string,string[]][], // Country, List
            lees?: string[], // Country // All
            malolactic?: [string,string][], // country , [Always, Sometimes, Never]
            carbonation?: [string,string], // Country, [Traditional, Other]
        },
        region?:{
            regions?:[string, string][], // country, region
            alias?: [string,string][], // Region, Grape Name
            production?: [string,number][], // Region, Production
            climate?: [string, string][], // Region, [Cool, Intermediate, Warm]
            bulkAging?: [string,string][], // Region, [American, French, Inert]
            sweetness?: [string,string][], // Region, [Dry, Sweet, Dessert]
            characteristics?:[string,string[]][], // Region, List
            lees?: string[], // Region // all
            malolactic?: [string,string][], // region,  [Always, Sometimes, Never]
            carbonation?: [string,string], // Region, [Traditional, Other]
        },
        appellation ?:{
            appellations?:[string, string, string][], // country, region, appellation
            alias?: [string,string][], // Region, Grape Name
            production?: [string,number][], // Region, Production
            climate?: [string, string][], // Region, [Cool, Intermediate, Warm]
            bulkAging?: [string,string][], // Region, [American, French, Inert]
            sweetness?: [string,string][], // Region, [Dry, Sweet, Dessert]
            characteristics?:[string,string[]][], // Region, List
            lees?: string[], // Region // all
            malolactic?: [string,string][], // region , [Always, Sometimes, Never]
            carbonation?: [string,string], // Region, [Traditional, Other]
        },
        note?: string,
    }
}

export default GrapeInterface;