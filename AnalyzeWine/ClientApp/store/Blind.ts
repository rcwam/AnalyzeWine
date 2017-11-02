import { Action, Reducer } from 'redux';
//import { createAction } from 'redux-actions';

export interface BlindTastingState {
    notes: {
        eye: {
            wineType: string,
            color: string

        }
    }
}

const initialBlindTastingState: BlindTastingState = {
    notes: {
        eye: {
            wineType: "Red",
            color: "Red"
        }
    }
};

interface SetWineType { type: 'SET_WINE_TYPE' , selectWineType: string}//, selectColor: string}
interface SetColor { type: 'SET_COLOR', selectColor: string }


type KnownAction = SetWineType | SetColor;

export const  actionCreators  = {
    setWineType: (selectWineType : string) => <SetWineType>{type: 'SET_WINE_TYPE', selectWineType: selectWineType},
        setColor: (selectColor: string) => <SetColor>{type: 'SET_COLOR', selectColor: selectColor}
 //   setWineType: () => <SetWineType>{type: 'SET_WINE_TYPE'},
 //   setColor: () => <SetColor>{type: 'SET_COLOR'}
};

//export const reducer: Reducer<BlindTastingState> = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
export const reducer: any = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
    let tempState: BlindTastingState = {
        notes: {
            eye: {
                wineType: state.notes.eye.wineType,
                color: state.notes.eye.color
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
        default:
            const exhaustiveCheck: never = action;
    }

    return state || initialBlindTastingState;
};
