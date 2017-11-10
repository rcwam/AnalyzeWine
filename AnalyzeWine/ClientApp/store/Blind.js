//import { Action, Reducer } from 'redux';
var mySet = new Set();
var initialBlindTastingState = {
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
        barrel: {
            aging: "None",
            wood: "None",
            toast: "None",
        },
        age: {
            min: 1,
            max: 3,
        }
    }
};
export var actionCreators = {
    setWineType: function (selectWineType) { return ({ type: 'SET_WINE_TYPE', selectWineType: selectWineType }); },
    // Sight Actions
    setColor: function (selectColor) { return ({ type: 'SET_COLOR', selectColor: selectColor }); },
    setDepth: function (selectDepth) { return ({ type: 'SET_DEPTH', selectDepth: selectDepth }); },
    setClarity: function (selectClarity) { return ({ type: 'SET_CLARITY', selectClarity: selectClarity }); },
    setSediment: function (selectSediment) { return ({ type: 'SET_SEDIMENT', selectSediment: selectSediment }); },
    setViscosity: function (selectViscosity) { return ({ type: 'SET_VISCOSITY', selectViscosity: selectViscosity }); },
    setCarbonation: function (selectCarbonation) { return ({ type: 'SET_CARBONATION', selectCarbonation: selectCarbonation }); },
    // Smell Actions
    setSmellIntensity: function (selectSmellIntensity) { return ({ type: 'SET_SMELL_INTENSITY', selectSmellIntensity: selectSmellIntensity }); },
    setSmellComplexity: function (selectSmellComplexity) { return ({ type: 'SET_SMELL_COMPLEXITY', selectSmellComplexity: selectSmellComplexity }); },
    setSmellAlcohol: function (selectSmellAlcohol) { return ({ type: 'SET_SMELL_ALCOHOL', selectSmellAlcohol: selectSmellAlcohol }); },
    addAroma: function (aroma, aromaCategory) { return ({ type: 'ADD_AROMA', aroma: aroma, aromaCategory: aromaCategory }); },
    clearAroma: function (aromaCategory) { return ({ type: 'CLEAR_AROMA', aromaCategory: aromaCategory }); },
    // Taste Actions
    setTasteIntensity: function (selectTasteIntensity) { return ({ type: 'SET_TASTE_INTENSITY', selectTasteIntensity: selectTasteIntensity }); },
    setTasteComplexity: function (selectTasteComplexity) { return ({ type: 'SET_TASTE_COMPLEXITY', selectTasteComplexity: selectTasteComplexity }); },
    setBody: function (selectBody) { return ({ type: 'SET_BODY', selectBody: selectBody }); },
    setSweetness: function (selectSweetness) { return ({ type: 'SET_SWEETNESS', selectSweetness: selectSweetness }); },
    setAcidity: function (selectAcidity) { return ({ type: 'SET_ACIDITY', selectAcidity: selectAcidity }); },
    setTannins: function (selectTannins) { return ({ type: 'SET_TANNINS', selectTannins: selectTannins }); },
    setTasteAlcohol: function (selectTasteAlcohol) { return ({ type: 'SET_TASTE_ALCOHOL', selectTasteAlcohol: selectTasteAlcohol }); },
    setFinish: function (selectFinish) { return ({ type: 'SET_FINISH', selectFinish: selectFinish }); },
    addFlavor: function (flavor, flavorCategory) { return ({ type: 'ADD_FLAVOR', flavor: flavor, flavorCategory: flavorCategory }); },
    clearFlavor: function (flavorCategory) { return ({ type: 'CLEAR_FLAVOR', flavorCategory: flavorCategory }); },
    // Conclusion Actions
    setBarrel: function (aging, wood, toast) { return ({ type: 'SET_BARREL', aging: aging, wood: wood, toast: toast }); },
    setAge: function (min, max) { return ({ type: 'SET_AGE', min: min, max: max }); },
};
//export const reducer: Reducer<BlindTastingState> = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
export var reducer = function (state, action) {
    //   const tempState2 = { ...state };
    if (state === void 0) { state = initialBlindTastingState; }
    var tempState = {
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
            barrel: {
                aging: state.conclusions.barrel.aging,
                wood: state.conclusions.barrel.wood,
                toast: state.conclusions.barrel.toast,
            },
            age: {
                min: state.conclusions.age.min,
                max: state.conclusions.age.max,
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
        case 'SET_BARREL':
            tempState.conclusions.barrel.aging = action.aging;
            tempState.conclusions.barrel.wood = action.wood;
            tempState.conclusions.barrel.toast = action.toast;
            return tempState;
        case 'SET_AGE':
            tempState.conclusions.age.min = action.min;
            tempState.conclusions.age.max = action.max;
            return tempState;
        default:
            var exhaustiveCheck = action;
    }
    return state || initialBlindTastingState;
};
//# sourceMappingURL=Blind.js.map