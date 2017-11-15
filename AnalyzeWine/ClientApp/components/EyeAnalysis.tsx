import * as React from 'react';
import  {Component} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Color from './eye/Color'


class EyeAnalysis extends Component{
    render() {
        return (
            <div>
                <h3>EyeAnalysis</h3>

                <Color/>
            </div>
        )
    }
}

export default EyeAnalysis;