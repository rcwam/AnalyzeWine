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

        }
    }
};

interface SetWineType { type: 'SET_WINE_TYPE' , selectWineType: string}//, selectColor: string}
interface SetColor { type: 'SET_COLOR', selectColor: string }
interface SetDepth {type: 'SET_DEPTH', selectDepth: string}
interface SetClarity {type: 'SET_CLARITY', selectClarity: string}
interface SetSediment {type: 'SET_SEDIMENT', selectSediment: string}
interface SetViscosity {type: 'SET_VISCOSITY', selectViscosity: string}
interface SetCarbonation {type: 'SET_CARBONATION', selectCarbonation: string}


type KnownAction = SetWineType | SetColor | SetDepth | SetClarity | SetSediment | SetViscosity | SetCarbonation;

export const  actionCreators  = {
    setWineType: (selectWineType: string) => <SetWineType>{type: 'SET_WINE_TYPE', selectWineType: selectWineType},
    setColor: (selectColor: string) => <SetColor>{type: 'SET_COLOR', selectColor: selectColor},
    setDepth: (selectDepth: string) => <SetDepth>{type: 'SET_DEPTH', selectDepth: selectDepth},
    setClarity: (selectClarity: string) => <SetClarity>{type: 'SET_CLARITY', selectClarity: selectClarity},
    setSediment: (selectSediment: string) => <SetSediment>{type: 'SET_SEDIMENT', selectSediment: selectSediment},
    setViscosity: (selectViscosity: string) => <SetViscosity>{type: 'SET_VISCOSITY', selectViscosity: selectViscosity},
    setCarbonation: (selectCarbonation: string) => <SetCarbonation>{type: 'SET_CARBONATION', selectCarbonation: selectCarbonation}

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
                carbonation: state.notes.eye.carbonation
            }
        }
    };
    switch (action.type) {
        case 'SET_WINE_TYPE':
            tempState.notes.eye.wineType = action.selectWineType;
            return Object.assign({}, tempState);
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
        default:
            const exhaustiveCheck: never = action;
    }

    return state || initialBlindTastingState;
};
