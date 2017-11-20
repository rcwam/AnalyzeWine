//import { Action, Reducer } from 'redux';

let mySet = new Set();

export interface BlindTastingState {
    notes: {
        eye: {
            wineType: string,
            color: string,
            depth: string,
            clarity: string,
            sediment: string,
            viscosity: string,
            carbonation: string
        },
        nose: {
            smellIntensity: string,
            smellComplexity: string,
            smellAlcohol: string,
            smellProfile: {
                fruitFloral: string[],
                earthMineral: string[],
                woodSpice: string[],
                biologicalChemical: string[]
            }
        },
        palate: {
            tasteIntensity: string,
            tasteComplexity: string,
            body: string,
            sweetness: string,
            acidity: string,
            tannins: string,
            tasteAlcohol: string,
            finish: string
            flavorProfile: {
                fruitFloral: string[],
                earthMineral: string[],
                woodSpice: string[],
                biologicalChemical: string[]
            }
        }
    }
    conclusions: {
        SomBot: {
            viticulture: {
                place: {
                    climate: string,
                    country: string[],
                    region: string[],
                    appellation: string[],
                }
                grape:{
                    varietal: string,
                }
            }
            viniculture: {
                harvest: {
                    lateHarvest: boolean,
                    botrytis: boolean,
                }
                crush: {
                    iceWine: boolean;
                    sulfites: boolean,
                    must: boolean,
                }
                fermentation: {
                    must: boolean,
                    wildYeast: boolean,
                    temperature: string,
                    container: string,
                }
                bulkAging: {
                    inert: boolean,
                    barrel: {
                        wood: string;
                        toast: string;
                    }
                }
                conditioning: {
                    acidification: boolean,
                    lees: boolean,
                    battonage: boolean,
                    malolactic: boolean,
                }
                clarification: {
                    racking: boolean,
                    fining: boolean,
                    filtering: boolean,
                }
                sparkling: {
                    method: string,
                }
                fortified: {
                    sugar: boolean,
                    alcohol: boolean,
                }
                bottleAging: {
                    min: number;
                    max: number;
                }
            }
            chemicals: {
                agingProfile: {
                    youthful: number;
                    middleAged: number;
                    oldAged: number;
                }
                climateProfile:{
                    cool:number,
                    intermediate:number,
                    warm:number,
                }
                malolacticProfileClue: boolean;
                botrytisProfileClue: boolean;
            }
            faults:{}
            summary: {
                quality: string;
                potential:{
                    currentReadiness: string,
                    drinkFrom: number,
                    drinkTo: number,
                    peak: number,
                }
                pairing: string[],
            }
        }
        Analyst: {
            tasting: {
                date: string,
                location: string,
                decant: number;
            }
            place: {
                climate: string,
                origin: string,
                why: string,
            }
            grape:{
                varietal: string,
                why: string,
            }
            bottleAge:
                {
                    min:number,
                    max: number,
                    why: string
                }
            assessment:{
                potential:{
                    currentReadiness: string,
                    decantingRecommendation: number,
                    drinkFrom: number,
                    drinkTo: number,
                    peak: number,
                }
                quality: string,
                pairing: string, // build personal pairing with reverse-lookup to food
                summary: string,
            }
            reveal:{
                producer: string,
                vintage: number,
                varietal: string,
                country:string,
                region: string,
                subRegion: string,
                appellation: string,
                vineyard: string,

            }
        }
    }
}

const initialBlindTastingState: BlindTastingState = {
    notes: {
        eye: {
            wineType: "Red",
            color: "Red",
            depth: "Medium",
            clarity: "Clear",
            sediment: "None",
            viscosity: "Medium",
            carbonation: "None"
        },
        nose: {
            smellIntensity: "Medium",
            smellComplexity: "Medium",
            smellAlcohol: "Medium",
            smellProfile: {
                fruitFloral: [],
                earthMineral: [],
                woodSpice: [],
                biologicalChemical: []
            }
        },
        palate: {
            tasteIntensity: "Medium",
            tasteComplexity: "Medium",
            body: "Medium",
            sweetness: "Medium",
            acidity: "Medium",
            tannins: "Medium",
            tasteAlcohol: "Medium",
            finish: "Medium",
            flavorProfile: {
                fruitFloral: [],
                earthMineral: [],
                woodSpice: [],
                biologicalChemical: []
            }
        }
    },
    conclusions: {
        SomBot: {
            viticulture: {
                place: {
                    climate: "",
                    country: [],
                    region: [],
                    appellation: [],
                },
                grape: {
                    varietal: "",
                }
            },
            viniculture: {
                harvest: {
                    lateHarvest: false,
                    botrytis: false,
                },
                crush: {
                    iceWine: false,
                    sulfites: false,
                    must: true,
                },
                fermentation: {
                    must: true,
                    wildYeast: false,
                    temperature: "Medium",
                    container: "barrel",
                },
                bulkAging: {
                    inert: false,
                    barrel: {
                        wood: "None",
                        toast: "None",
                    }
                },
                conditioning: {
                    acidification: false,
                    lees: false,
                    battonage: false,
                    malolactic: true,
                },
                clarification: {
                    racking: true,
                    fining: false,
                    filtering: false,
                },
                sparkling: {
                    method: "",
                },
                fortified: {
                    sugar: false,
                    alcohol: false,
                },
                bottleAging: {
                    min: 1,
                    max: 2,
                },
            },
            chemicals: {
                agingProfile: {
                    youthful: 0,
                    middleAged: 0,
                    oldAged: 0,
                },
                climateProfile:{
                    cool:0,
                    intermediate:0,
                    warm:0,
                },
                malolacticProfileClue: false,
                botrytisProfileClue: false,
            },
            faults:{},
            summary: {
                quality: "",
                potential: {
                    currentReadiness: "",
                    drinkFrom: 1999,
                    drinkTo: 2999,
                    peak: 2499,
                },
                pairing: [],
            }
        },
        Analyst: {
            tasting: {
                date: "",
                location: "",
                decant: 0,
            },
            place: {
                climate: "",
                origin: "",
                why: "",
            },
            grape: {
                varietal: "",
                why: "",
            },
            bottleAge:
                {
                    min: 0,
                    max: 0,
                    why: ""
                },
            assessment: {
                potential: {
                    currentReadiness: "",
                    decantingRecommendation: 0,
                    drinkFrom: 0,
                    drinkTo: 0,
                    peak: 0,
                },
                quality: "",
                pairing: "",
                summary: "",
            },
            reveal: {
                producer: "",
                vintage: 0,
                varietal: "",
                country: "",
                region: "",
                subRegion: "",
                appellation: "",
                vineyard: "",
            }
        }
    }
};

interface SetWineType { type: 'SET_WINE_TYPE' , selectWineType: string}

// Sight Interfaces
interface SetColor { type: 'SET_COLOR', selectColor: string }
interface SetDepth {type: 'SET_DEPTH', selectDepth: string}
interface SetClarity {type: 'SET_CLARITY', selectClarity: string}
interface SetSediment {type: 'SET_SEDIMENT', selectSediment: string}
interface SetViscosity {type: 'SET_VISCOSITY', selectViscosity: string}
interface SetCarbonation {type: 'SET_CARBONATION', selectCarbonation: string}

// Smell Interfaces
interface SetSmellIntensity {type: 'SET_SMELL_INTENSITY', selectSmellIntensity: string}
interface SetSmellComplexity {type: 'SET_SMELL_COMPLEXITY', selectSmellComplexity: string}
interface SetSmellAlcohol {type: 'SET_SMELL_ALCOHOL', selectSmellAlcohol: string}
interface AddAroma{type: 'ADD_AROMA', aromaCategory: string, aroma: string}
interface ClearAroma{type: 'CLEAR_AROMA', aromaCategory: string}

// Palate Interfaces
interface SetTasteIntensity {type: 'SET_TASTE_INTENSITY', selectTasteIntensity: string}
interface SetTasteComplexity {type: 'SET_TASTE_COMPLEXITY', selectTasteComplexity: string}
interface SetBody {type: 'SET_BODY', selectBody: string}
interface SetSweetness {type: 'SET_SWEETNESS', selectSweetness: string}
interface SetAcidity {type: 'SET_ACIDITY', selectAcidity: string}
interface SetTannins {type: 'SET_TANNINS', selectTannins: string}
interface SetTasteAlcohol {type: 'SET_TASTE_ALCOHOL', selectTasteAlcohol: string}
interface SetFinish {type: 'SET_FINISH', selectFinish: string}
interface AddFlavor{type: 'ADD_FLAVOR', flavorCategory: string, flavor: string}
interface ClearFlavor{type: 'CLEAR_FLAVOR', flavorCategory: string}

// Conclusion Interfaces

// Bulk Aging Interface
interface SetBulk {type: 'SET_BULK', time: string, wood: string, toast: string}
interface SetAge{type: 'SET_AGE', min: number, max: number}

// Chemical Interface
interface SetClimateProfile{type: 'SET_CLIMATE_PROFILE', cool: number, intermediate: number, warm: number}
interface SetAgeProfile{type: 'SET_AGE_PROFILE', youthfulProfile: number, middleAgedProfile: number, oldAgedProfile: number}
interface SetLees{type: 'SET_LEES', lees: boolean}
interface SetMalolacticProfileClue{type: 'SET_MALOLACTIC_PROFILE_CLUE', malolacticProfileClue:boolean}
interface SetBotrytisProfileClue{type:'SET_BOTRYTIS_PROFILE_CLUE',botrytisProfileClue:boolean}


// Malolactic Fermentation
interface SetMalolactic{type: 'SET_MALOLACTIC', malolactic: boolean}



type KnownAction = SetWineType | SetColor | SetDepth | SetClarity | SetSediment | SetViscosity | SetCarbonation
    | SetSmellIntensity | SetSmellComplexity | SetSmellAlcohol | AddAroma | ClearAroma
    | SetTasteIntensity | SetTasteComplexity | SetBody | SetSweetness | SetAcidity | SetTannins | SetTasteAlcohol | SetFinish | AddFlavor | ClearFlavor
    | SetBulk | SetAge
    | SetLees | SetMalolactic
    | SetAgeProfile | SetClimateProfile
    | SetMalolacticProfileClue | SetBotrytisProfileClue
     ;

export const  actionCreators  = {
    setWineType: (selectWineType: string) => <SetWineType>{type: 'SET_WINE_TYPE', selectWineType: selectWineType},

    // Sight Actions
    setColor: (selectColor: string) => <SetColor>{type: 'SET_COLOR', selectColor: selectColor},
    setDepth: (selectDepth: string) => <SetDepth>{type: 'SET_DEPTH', selectDepth: selectDepth},
    setClarity: (selectClarity: string) => <SetClarity>{type: 'SET_CLARITY', selectClarity: selectClarity},
    setSediment: (selectSediment: string) => <SetSediment>{type: 'SET_SEDIMENT', selectSediment: selectSediment},
    setViscosity: (selectViscosity: string) => <SetViscosity>{type: 'SET_VISCOSITY', selectViscosity: selectViscosity},
    setCarbonation: (selectCarbonation: string) => <SetCarbonation>{
        type: 'SET_CARBONATION',
        selectCarbonation: selectCarbonation
    },

    // Smell Actions
    setSmellIntensity: (selectSmellIntensity: string) => <SetSmellIntensity>{
        type: 'SET_SMELL_INTENSITY',
        selectSmellIntensity: selectSmellIntensity
    },
    setSmellComplexity: (selectSmellComplexity: string) => <SetSmellComplexity>{
        type: 'SET_SMELL_COMPLEXITY',
        selectSmellComplexity: selectSmellComplexity
    },
    setSmellAlcohol: (selectSmellAlcohol: string) => <SetSmellAlcohol>{
        type: 'SET_SMELL_ALCOHOL',
        selectSmellAlcohol: selectSmellAlcohol
    },
    addAroma: (aroma: string, aromaCategory: string) => <AddAroma>{
        type: 'ADD_AROMA',
        aroma: aroma,
        aromaCategory: aromaCategory
    },
    clearAroma: (aromaCategory: string) => <ClearAroma>{type: 'CLEAR_AROMA', aromaCategory: aromaCategory},

    // Taste Actions
    setTasteIntensity: (selectTasteIntensity: string) => <SetTasteIntensity>{
        type: 'SET_TASTE_INTENSITY',
        selectTasteIntensity: selectTasteIntensity
    },
    setTasteComplexity: (selectTasteComplexity: string) => <SetTasteComplexity>{
        type: 'SET_TASTE_COMPLEXITY',
        selectTasteComplexity: selectTasteComplexity
    },
    setBody: (selectBody: string) => <SetBody>{type: 'SET_BODY', selectBody: selectBody},
    setSweetness: (selectSweetness: string) => <SetSweetness>{type: 'SET_SWEETNESS', selectSweetness: selectSweetness},
    setAcidity: (selectAcidity: string) => <SetAcidity>{type: 'SET_ACIDITY', selectAcidity: selectAcidity},
    setTannins: (selectTannins: string) => <SetTannins>{type: 'SET_TANNINS', selectTannins: selectTannins},
    setTasteAlcohol: (selectTasteAlcohol: string) => <SetTasteAlcohol>{
        type: 'SET_TASTE_ALCOHOL',
        selectTasteAlcohol: selectTasteAlcohol
    },
    setFinish: (selectFinish: string) => <SetFinish>{type: 'SET_FINISH', selectFinish: selectFinish},
    addFlavor: (flavor: string, flavorCategory: string) => <AddFlavor>{
        type: 'ADD_FLAVOR',
        flavor: flavor,
        flavorCategory: flavorCategory
    },
    clearFlavor: (flavorCategory: string) => <ClearFlavor>{type: 'CLEAR_FLAVOR', flavorCategory: flavorCategory},

    // Conclusion Actions

    // Bulk Aging Actions
    setBulk: (wood: string, toast: string) => <SetBulk>{type: 'SET_BULK', wood: wood, toast: toast},
    setAge: (min: number, max: number) => <SetAge>{type: 'SET_AGE', min: min, max: max},

    // Processing
    setLees: (lees: boolean) => <SetLees>{type: 'SET_LEES', lees: lees},
    setMalolactic: (malolactic: boolean) => <SetMalolactic>{type: 'SET_MALOLACTIC', malolactic: malolactic},


    // Chemicals
    setAgeProfile: (youthfulProfile: number, middleAgedProfile: number, oldAgedProfile: number) => <SetAgeProfile>{
        type: 'SET_AGE_PROFILE',
        youthfulProfile: youthfulProfile,
        middleAgedProfile: middleAgedProfile,
        oldAgedProfile: oldAgedProfile,
    },
    setClimateProfile: (cool: number, intermediate: number, warm: number) => <SetClimateProfile>{
        type: 'SET_CLIMATE_PROFILE',
        cool: cool,
        intermediate: intermediate,
        warm: warm,
    },

    setMalolacticProfileClue: (malolacticProfileClue: boolean) => <SetMalolacticProfileClue>{
        type: 'SET_MALOLACTIC_PROFILE_CLUE',
        malolacticProfileClue: malolacticProfileClue
    },
    setBotrytisProfileClue: (botrytisProfileClue: boolean) => <SetBotrytisProfileClue>{
        type: 'SET_BOTRYTIS_PROFILE_CLUE',
        botrytisProfileClue: botrytisProfileClue
    },


};



//export const reducer: Reducer<BlindTastingState> = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
export const reducer: any = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
    //   const tempState2 = { ...state };

    let tempState: BlindTastingState = {
        notes: {
            eye: {
                wineType: state.notes.eye.wineType,
                color: state.notes.eye.color,
                depth: state.notes.eye.depth,
                clarity: state.notes.eye.clarity,
                sediment: state.notes.eye.sediment,
                viscosity: state.notes.eye.viscosity,
                carbonation: state.notes.eye.carbonation,
            },
            nose: {
                smellIntensity: state.notes.nose.smellIntensity,
                smellComplexity: state.notes.nose.smellComplexity,
                smellAlcohol: state.notes.nose.smellAlcohol,
                smellProfile: {
                    fruitFloral: state.notes.nose.smellProfile.fruitFloral,
                    earthMineral: state.notes.nose.smellProfile.earthMineral,
                    woodSpice: state.notes.nose.smellProfile.woodSpice,
                    biologicalChemical: state.notes.nose.smellProfile.biologicalChemical
                }
            },
            palate: {
                tasteIntensity: state.notes.palate.tasteIntensity,
                tasteComplexity: state.notes.palate.tasteComplexity,
                body: state.notes.palate.body,
                sweetness: state.notes.palate.sweetness,
                acidity: state.notes.palate.acidity,
                tannins: state.notes.palate.tannins,
                tasteAlcohol: state.notes.palate.tasteAlcohol,
                finish: state.notes.palate.finish,
                flavorProfile: {
                    fruitFloral: state.notes.palate.flavorProfile.fruitFloral,
                    earthMineral: state.notes.palate.flavorProfile.earthMineral,
                    woodSpice: state.notes.palate.flavorProfile.woodSpice,
                    biologicalChemical: state.notes.palate.flavorProfile.biologicalChemical
                }
            }
        },
        conclusions: {
            SomBot: {
                viticulture: {
                    place: {
                        climate: "",
                        country: [],
                        region: [],
                        appellation: [],
                    },
                    grape: {
                        varietal: "",
                    }
                },
                viniculture: {
                    harvest: {
                        lateHarvest: false,
                        botrytis: false,
                    },
                    crush: {
                        iceWine: false,
                        sulfites: false,
                        must: true,
                    },
                    fermentation: {
                        must: true,
                        wildYeast: false,
                        temperature: "Medium",
                        container: "barrel",
                    },
                    bulkAging: {
                        inert: false,
                        barrel: {
                            wood: state.conclusions.SomBot.viniculture.bulkAging.barrel.wood,
                            toast: state.conclusions.SomBot.viniculture.bulkAging.barrel.toast,
                        }
                    },
                    conditioning: {
                        acidification: false,
                        lees: state.conclusions.SomBot.viniculture.conditioning.lees,
                        battonage: false,
                        malolactic: state.conclusions.SomBot.viniculture.conditioning.malolactic,
                    },
                    clarification: {
                        racking: true,
                        fining: false,
                        filtering: false,
                    },
                    sparkling: {
                        method: "",
                    },
                    fortified: {
                        sugar: false,
                        alcohol: false,
                    },
                    bottleAging: {
                        min: state.conclusions.SomBot.viniculture.bottleAging.min,
                        max: state.conclusions.SomBot.viniculture.bottleAging.max,
                    },
                },
                chemicals: {
                    agingProfile: {
                        youthful: state.conclusions.SomBot.chemicals.agingProfile.youthful,
                        middleAged: state.conclusions.SomBot.chemicals.agingProfile.middleAged,
                        oldAged: state.conclusions.SomBot.chemicals.agingProfile.oldAged,
                    },
                    climateProfile:{
                        cool:state.conclusions.SomBot.chemicals.climateProfile.cool,
                        intermediate:state.conclusions.SomBot.chemicals.climateProfile.intermediate,
                        warm:state.conclusions.SomBot.chemicals.climateProfile.warm,
                    },
                    malolacticProfileClue: state.conclusions.SomBot.chemicals.malolacticProfileClue,
                    botrytisProfileClue: state.conclusions.SomBot.chemicals.botrytisProfileClue,
                },
                faults: {},
                summary: {
                    quality: "",
                    potential: {
                        currentReadiness: "",
                        drinkFrom: 1999,
                        drinkTo: 2999,
                        peak: 2499,
                    },
                    pairing: [],
                }
            },
            Analyst: {
                tasting: {
                    date: "",
                    location: "",
                    decant: 0,
                },
                place: {
                    climate: "",
                    origin: "",
                    why: "",
                },
                grape: {
                    varietal: "",
                    why: "",
                },
                bottleAge:
                    {
                        min: 0,
                        max: 0,
                        why: ""
                    },
                assessment: {
                    potential: {
                        currentReadiness: "",
                        decantingRecommendation: 0,
                        drinkFrom: 0,
                        drinkTo: 0,
                        peak: 0,
                    },
                    quality: "",
                    pairing: "",
                    summary: "",
                },
                reveal: {
                    producer: "",
                    vintage: 0,
                    varietal: "",
                    country: "",
                    region: "",
                    subRegion: "",
                    appellation: "",
                    vineyard: "",
                }
            }
        }
    };
    switch (action.type) {
        case 'SET_WINE_TYPE':
            tempState.notes.eye.wineType = action.selectWineType;
            switch (action.selectWineType) {
                case 'Red':
                    tempState.notes.eye.color = "Red";
                    tempState.notes.eye.carbonation = "None";
                    tempState.notes.palate.tannins = "Medium";
                    return tempState;
                case 'White':
                    tempState.notes.eye.color = "Yellow";
                    tempState.notes.eye.sediment = "None";
                    tempState.notes.palate.tannins = "None";
                    return tempState;
                case 'Rose':
                    tempState.notes.eye.color = "Pink";
                    tempState.notes.eye.sediment = "None";
                    tempState.notes.palate.tannins = "None";
                    return tempState;
            }
            return Object.assign({}, tempState);

        // Sight Cases
        case 'SET_COLOR':
            tempState.notes.eye.color = action.selectColor;
            return Object.assign({}, tempState);
        case 'SET_DEPTH':
            tempState.notes.eye.depth = action.selectDepth;
            return Object.assign({}, tempState);
        case 'SET_CLARITY':
            tempState.notes.eye.clarity = action.selectClarity;
            return Object.assign({}, tempState);
        case 'SET_SEDIMENT':
            tempState.notes.eye.sediment = action.selectSediment;
            return Object.assign({}, tempState);
        case 'SET_VISCOSITY':
            tempState.notes.eye.viscosity = action.selectViscosity;
            return Object.assign({}, tempState);
        case 'SET_CARBONATION':
            tempState.notes.eye.carbonation = action.selectCarbonation;
            return Object.assign({}, tempState);

        // Smell Cases
        case 'SET_SMELL_INTENSITY':
            tempState.notes.nose.smellIntensity = action.selectSmellIntensity;
            return Object.assign({}, tempState);
        case 'SET_SMELL_COMPLEXITY':
            tempState.notes.nose.smellComplexity = action.selectSmellComplexity;

            return Object.assign({}, tempState);
        case 'SET_SMELL_ALCOHOL':
            tempState.notes.nose.smellAlcohol = action.selectSmellAlcohol;
            return Object.assign({}, tempState);
        case 'ADD_AROMA':
            switch (action.aromaCategory) {
                case 'fruitFloral':
                    if (tempState.notes.nose.smellProfile.fruitFloral.indexOf(action.aroma) == -1) {
                        tempState.notes.nose.smellProfile.fruitFloral = tempState.notes.nose.smellProfile.fruitFloral.concat(action.aroma);
                    }
                    return tempState;
                case 'earthMineral':
                    if (tempState.notes.nose.smellProfile.earthMineral.indexOf(action.aroma) == -1) {
                        tempState.notes.nose.smellProfile.earthMineral = tempState.notes.nose.smellProfile.earthMineral.concat(action.aroma);
                    }
                    return tempState;
                case 'woodSpice':
                    if (tempState.notes.nose.smellProfile.woodSpice.indexOf(action.aroma) == -1) {
                        tempState.notes.nose.smellProfile.woodSpice = tempState.notes.nose.smellProfile.woodSpice.concat(action.aroma);
                    }
                    return tempState;
                case 'biologicalChemical':
                    if (tempState.notes.nose.smellProfile.biologicalChemical.indexOf(action.aroma) == -1) {
                        tempState.notes.nose.smellProfile.biologicalChemical = tempState.notes.nose.smellProfile.biologicalChemical.concat(action.aroma);
                    }
                    return tempState;
                default:
                    return tempState;
            }


        case 'CLEAR_AROMA':
            switch (action.aromaCategory) {
                case 'fruitFloral':
                    tempState.notes.nose.smellProfile.fruitFloral = [];
                    return tempState;
                case 'earthMineral':
                    tempState.notes.nose.smellProfile.earthMineral = [];
                    return tempState;
                case 'woodSpice':
                    tempState.notes.nose.smellProfile.woodSpice = [];
                    return tempState;
                case 'biologicalChemical':
                    tempState.notes.nose.smellProfile.biologicalChemical = [];
                    return tempState;
                default:
                    return tempState;
            }

        // Taste Cases
        case 'SET_TASTE_INTENSITY':
            tempState.notes.palate.tasteIntensity = action.selectTasteIntensity;
            return Object.assign({}, tempState);
        case 'SET_TASTE_COMPLEXITY':
            tempState.notes.palate.tasteComplexity = action.selectTasteComplexity;
            return Object.assign({}, tempState);
        case 'SET_BODY':
            tempState.notes.palate.body = action.selectBody;
            return Object.assign({}, tempState);
        case 'SET_SWEETNESS':
            tempState.notes.palate.sweetness = action.selectSweetness;
            return Object.assign({}, tempState);
        case 'SET_ACIDITY':
            tempState.notes.palate.acidity = action.selectAcidity;
            return Object.assign({}, tempState);
        case 'SET_TANNINS':
            tempState.notes.palate.tannins = action.selectTannins;
            return Object.assign({}, tempState);
        case 'SET_TASTE_ALCOHOL':
            tempState.notes.palate.tasteAlcohol = action.selectTasteAlcohol;
            return Object.assign({}, tempState);
        case 'SET_FINISH':
            tempState.notes.palate.finish = action.selectFinish;
            return Object.assign({}, tempState);
        case 'ADD_FLAVOR':
            switch (action.flavorCategory) {
                case 'fruitFloral':
                    if (tempState.notes.palate.flavorProfile.fruitFloral.indexOf(action.flavor) == -1) {
                        tempState.notes.palate.flavorProfile.fruitFloral = tempState.notes.palate.flavorProfile.fruitFloral.concat(action.flavor);
                    }
                    return tempState;
                case 'earthMineral':
                    if (tempState.notes.palate.flavorProfile.earthMineral.indexOf(action.flavor) == -1) {
                        tempState.notes.palate.flavorProfile.earthMineral = tempState.notes.palate.flavorProfile.earthMineral.concat(action.flavor);
                    }
                    return tempState;
                case 'woodSpice':
                    if (tempState.notes.palate.flavorProfile.woodSpice.indexOf(action.flavor) == -1) {
                        tempState.notes.palate.flavorProfile.woodSpice = tempState.notes.palate.flavorProfile.woodSpice.concat(action.flavor);
                    }
                    return tempState;
                case 'biologicalChemical':
                    if (tempState.notes.palate.flavorProfile.biologicalChemical.indexOf(action.flavor) == -1) {
                        tempState.notes.palate.flavorProfile.biologicalChemical = tempState.notes.palate.flavorProfile.biologicalChemical.concat(action.flavor);
                    }
                    return tempState;
                default:
                    return tempState;
            }


        case 'CLEAR_FLAVOR':
            switch (action.flavorCategory) {
                case 'fruitFloral':
                    tempState.notes.palate.flavorProfile.fruitFloral = [];
                    return tempState;
                case 'earthMineral':
                    tempState.notes.palate.flavorProfile.earthMineral = [];
                    return tempState;
                case 'woodSpice':
                    tempState.notes.palate.flavorProfile.woodSpice = [];
                    return tempState;
                case 'biologicalChemical':
                    tempState.notes.palate.flavorProfile.biologicalChemical = [];
                    return tempState;
                default:
                    return tempState;
            }

        case 'SET_BULK':
         //   alert("Case Set Barrel");
            tempState.conclusions.SomBot.viniculture.bulkAging.barrel.wood = action.wood;
            tempState.conclusions.SomBot.viniculture.bulkAging.barrel.toast = action.toast;
            return tempState;
        case "SET_LEES":
            tempState.conclusions.SomBot.viniculture.conditioning.lees = action.lees;
            return Object.assign({}, tempState);
        case "SET_MALOLACTIC":
            tempState.conclusions.SomBot.viniculture.conditioning.malolactic = action.malolactic;
            return Object.assign({}, tempState);
        case 'SET_AGE':
            tempState.conclusions.SomBot.viniculture.bottleAging.min = action.min;
            tempState.conclusions.SomBot.viniculture.bottleAging.max = action.max;
            return tempState;
        case 'SET_AGE_PROFILE':
          //  alert("Case Age Profile");
            tempState.conclusions.SomBot.chemicals.agingProfile.youthful = action.youthfulProfile;
            tempState.conclusions.SomBot.chemicals.agingProfile.middleAged = action.middleAgedProfile;
            tempState.conclusions.SomBot.chemicals.agingProfile.oldAged = action.oldAgedProfile;
            return tempState;
        case 'SET_CLIMATE_PROFILE':
            //  alert("Case Age Profile");
            tempState.conclusions.SomBot.chemicals.climateProfile.cool = action.cool;
            tempState.conclusions.SomBot.chemicals.climateProfile.intermediate = action.intermediate;
            tempState.conclusions.SomBot.chemicals.climateProfile.warm = action.warm;
            return tempState;
        case 'SET_MALOLACTIC_PROFILE_CLUE':
            tempState.conclusions.SomBot.chemicals.malolacticProfileClue = action.malolacticProfileClue;
            return tempState;
        case 'SET_BOTRYTIS_PROFILE_CLUE':
            tempState.conclusions.SomBot.chemicals.botrytisProfileClue = action.botrytisProfileClue;
            return tempState;

        default:
            const exhaustiveCheck: never = action;
    }

    return state || initialBlindTastingState;
};
