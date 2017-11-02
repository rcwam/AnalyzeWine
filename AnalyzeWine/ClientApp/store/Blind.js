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
        }
    }
};
export var actionCreators = {
    setWineType: function (selectWineType) { return ({ type: 'SET_WINE_TYPE', selectWineType: selectWineType }); },
    setColor: function (selectColor) { return ({ type: 'SET_COLOR', selectColor: selectColor }); },
    setDepth: function (selectDepth) { return ({ type: 'SET_DEPTH', selectDepth: selectDepth }); },
    setClarity: function (selectClarity) { return ({ type: 'SET_CLARITY', selectClarity: selectClarity }); },
    setSediment: function (selectSediment) { return ({ type: 'SET_SEDIMENT', selectSediment: selectSediment }); },
    setViscosity: function (selectViscosity) { return ({ type: 'SET_VISCOSITY', selectViscosity: selectViscosity }); },
    setCarbonation: function (selectCarbonation) { return ({ type: 'SET_CARBONATION', selectCarbonation: selectCarbonation }); }
};
//export const reducer: Reducer<BlindTastingState> = (state: BlindTastingState=initialBlindTastingState, action: KnownAction) => {
export var reducer = function (state, action) {
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
            var exhaustiveCheck = action;
    }
    return state || initialBlindTastingState;
};
//# sourceMappingURL=Blind.js.map