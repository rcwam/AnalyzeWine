import * as React from 'react';
import { Component } from 'react';
import SmellAlcohol from './nose/SmellAlcohol'
import SmellComplexity from './nose/SmellComplexity'
import SmellIntensity from './nose/SmellIntensity'



class NoseAnalysis extends Component {
    render() {
        return (
            <div>
                <h3>Analyze by Smell</h3>
                <p>How intense is the aroma? <SmellIntensity/></p>
                <p>How complex is the aroma? <SmellComplexity/></p>
                <p>What can you tell about alcohol content? <SmellAlcohol/></p>
            </div>
        )
    }
}

export default NoseAnalysis;