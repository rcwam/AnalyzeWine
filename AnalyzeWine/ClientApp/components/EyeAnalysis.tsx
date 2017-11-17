import * as React from 'react';
import  {Component} from 'react';
import Color from './eye/Color'
import Depth from './eye/Depth'
import Clarity from './eye/Clarity'
import Sediment from './eye/Sediment'
import Viscosity from './eye/Viscosity'
import Carbonation from './eye/Carbonation'


class EyeAnalysis extends Component {
    render() {
        return (
            <div>
                <h3>Analyze by Eye</h3>
                <p><Color/></p>
                <p><Depth/></p>
                <p>How clear is the wine?   <Clarity/></p>
                <p><Sediment/></p>
                <p><Viscosity/></p>
                <p>Is the wine carbonated (bubble size, effervescence)?    <Carbonation/></p>
            </div>
        )
    }
}

export default EyeAnalysis;