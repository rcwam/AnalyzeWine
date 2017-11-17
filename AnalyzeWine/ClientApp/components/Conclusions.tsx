import * as React from 'react';
import  {Component} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Age from './somBot/Age'
import BulkAging from './somBot/BulkAging'

class BotConclusions extends Component{


    render() {

        return (
            <div>
                <h3>Summary</h3>
                <p>Som-Bot can give suggested conclusions based on your tasting notes:</p>


                <Age />
                <BulkAging />




                <p>Climate? {}</p>
                <p>Balance (alcohol, acid, tannin, sugar)? {}</p>
                <p>Origin List {}</p>
                <p>Style? {}</p>
                <p>Varietal List {}</p>
                <p>Quality/Rating {}</p>
            </div>
        )
    }
}

export default BotConclusions;