import { Action, Reducer } from 'redux';
//import { createAction } from 'redux-actions';

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
            viscosity:"Medium",
            carbonation: "None"
        },
        nose: {
            smellIntensity: "Medium",
            smellComplexity: "Medium",
            smellAlcohol: "Medium"
        },
        palate: {
            tasteIntensity: "Medium",
            tasteComplexity: "Medium",
            body: "Medium",
            sweetness: "Medium",
            acidity: "Medium",
            tannins: "Medium",
            tasteAlcohol: "Medium",
            finish: "Medium"
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

// Palate Interfaces
interface SetTasteIntensity {type: 'SET_TASTE_INTENSITY', selectTasteIntensity: string}
interface SetTasteComplexity {type: 'SET_TASTE_COMPLEXITY', selectTasteComplexity: string}
interface SetBody {type: 'SET_BODY', selectBody: string}
interface SetSweetness {type: 'SET_SWEETNESS', selectSweetness: string}
interface SetAcidity {type: 'SET_ACIDITY', selectAcidity: string}
interface SetTannins {type: 'SET_TANNINS', selectTannins: string}
interface SetTasteAlcohol {type: 'SET_TASTE_ALCOHOL', selectTasteAlcohol: string}
interface SetFinish {type: 'SET_FINISH', selectFinish: string}


type KnownAction = SetWineType | SetColor | SetDepth | SetClarity | SetSediment | SetViscosity | SetCarbonation
    | SetSmellIntensity | SetSmellComplexity | SetSmellAlcohol
    | SetTasteIntensity | SetTasteComplexity | SetBody | SetSweetness | SetAcidity | SetTannins | SetTasteAlcohol | SetFinish;

export const  actionCreators  = {
    setWineType: (selectWineType: string) => <SetWineType>{type: 'SET_WINE_TYPE', selectWineType: selectWineType},

    // Sight Actions
    setColor: (selectColor: string) => <SetColor>{type: 'SET_COLOR', selectColor: selectColor},
    setDepth: (selectDepth: string) => <SetDepth>{type: 'SET_DEPTH', selectDepth: selectDepth},
    setClarity: (selectClarity: string) => <SetClarity>{type: 'SET_CLARITY', selectClarity: selectClarity},
    setSediment: (selectSediment: string) => <SetSediment>{type: 'SET_SEDIMENT', selectSediment: selectSediment},
    setViscosity: (selectViscosity: string) => <SetViscosity>{type: 'SET_VISCOSITY', selectViscosity: selectViscosity},
    setCarbonation: (selectCarbonation: string) => <SetCarbonation>{type: 'SET_CARBONATION', selectCarbonation: selectCarbonation},

    // Smell Actions
    setSmellIntensity: (selectSmellIntensity: string) => <SetSmellIntensity>{type: 'SET_SMELL_INTENSITY', selectSmellIntensity: selectSmellIntensity},
    setSmellComplexity: (selectSmellComplexity: string) => <SetSmellComplexity>{type: 'SET_SMELL_COMPLEXITY', selectSmellComplexity: selectSmellComplexity},
    setSmellAlcohol: (selectSmellAlcohol: string) => <SetSmellAlcohol>{type: 'SET_SMELL_ALCOHOL', selectSmellAlcohol: selectSmellAlcohol},

    // Taste Actions
    setTasteIntensity: (selectTasteIntensity: string) => <SetTasteIntensity>{type: 'SET_TASTE_INTENSITY', selectTasteIntensity: selectTasteIntensity},
    setTasteComplexity: (selectTasteComplexity: string) => <SetTasteComplexity>{type: 'SET_TASTE_COMPLEXITY', selectTasteComplexity: selectTasteComplexity},
    setBody: (selectBody: string) => <SetBody>{type: 'SET_BODY', selectBody: selectBody},
    setSweetness: (selectSweetness: string) => <SetSweetness>{type: 'SET_SWEETNESS', selectSweetness: selectSweetness},
    setAcidity: (selectAcidity: string) => <SetAcidity>{type: 'SET_ACIDITY', selectAcidity: selectAcidity},
    setTannins: (selectTannins: string) => <SetTannins>{type: 'SET_TANNINS', selectTannins: selectTannins},
    setTasteAlcohol: (selectTasteAlcohol: string) => <SetTasteAlcohol>{type: 'SET_TASTE_ALCOHOL', selectTasteAlcohol: selectTasteAlcohol},
    setFinish: (selectFinish: string) => <SetFinish>{type: 'SET_FINISH', selectFinish: selectFinish}

};

//export const reducer: Reducer<BlindTastingState> = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
export const reducer: any = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
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
                smellAlcohol: state.notes.nose.smellAlcohol
            },
            palate: {
                tasteIntensity: state.notes.palate.tasteIntensity,
                tasteComplexity: state.notes.palate.tasteComplexity,
                body: state.notes.palate.body,
                sweetness: state.notes.palate.sweetness,
                acidity: state.notes.palate.acidity,
                tannins: state.notes.palate.tannins,
                tasteAlcohol: state.notes.palate.tasteAlcohol,
                finish: state.notes.palate.finish
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

        default:
            const exhaustiveCheck: never = action;
    }

    return state || initialBlindTastingState;
};
