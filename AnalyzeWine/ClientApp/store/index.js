import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import * as Blind from './Blind';
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export var reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    blind: Blind.reducer
};
//# sourceMappingURL=index.js.map