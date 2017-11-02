var initialBlindTastingState = {
    notes: {
        eye: {
            wineType: "Red",
            color: "Red"
        }
    }
};
export var actionCreators = {
    setWineType: function (selectWineType) { return ({ type: 'SET_WINE_TYPE', selectWineType: selectWineType }); },
    setColor: function (selectColor) { return ({ type: 'SET_COLOR', selectColor: selectColor }); }
    //   setWineType: () => <SetWineType>{type: 'SET_WINE_TYPE'},
    //   setColor: () => <SetColor>{type: 'SET_COLOR'}
};
//export const reducer: Reducer<BlindTastingState> = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
export var reducer = function (state, action) {
    if (state === void 0) { state = initialBlindTastingState; }
    var tempState = {
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
            var exhaustiveCheck = action;
    }
    return state || initialBlindTastingState;
};
//# sourceMappingURL=Blind.js.map