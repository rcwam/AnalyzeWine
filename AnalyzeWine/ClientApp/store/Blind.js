var initialBlindTastingState = {
    notes: { eye: { wineType: "Red",
            color: "Red" } }
};
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
export var actionCreators = {
    red: function () { return ({ type: 'SET_RED' }); },
    white: function () { return ({ type: 'SET_WHITE' }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
export var reducer = function (state, action) {
    if (state === void 0) { state = initialBlindTastingState; }
    var tempState = Object.assign({}, initialBlindTastingState);
    switch (action.type) {
        case 'SET_RED':
            tempState.notes.eye.wineType = "White";
            return Object.assign({}, tempState);
        case 'SET_WHITE':
            tempState.notes.eye.wineType = "Rose";
            return Object.assign({}, tempState);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { wineType: "Rose", color: "Rose" };
};
//# sourceMappingURL=Blind.js.map