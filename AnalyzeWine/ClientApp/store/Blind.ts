import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface BlindTastingState {
  notes: {eye: {wineType: string,
  color: string}}
}

const initialBlindTastingState = <BlindTastingState>{
    notes: {eye: {wineType: "Red",
        color: "Red"}}

};

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface SetRed { type: 'SET_RED' }
interface SetWhite { type: 'SET_WHITE' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = SetRed | SetWhite;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    red: () => <SetRed>{ type: 'SET_RED' },
    white: () => <SetWhite>{ type: 'SET_WHITE' }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<BlindTastingState> = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
    let tempState = Object.assign({}, initialBlindTastingState);
    switch (action.type) {
        case 'SET_RED':
            tempState.notes.eye.wineType = "White";
            return Object.assign({}, tempState);
        case 'SET_WHITE':
            tempState.notes.eye.wineType = "Rose";
            return Object.assign({}, tempState);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { wineType: "Rose", color:"Rose" };
};
